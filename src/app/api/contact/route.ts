import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

export interface Inquiry {
  id: string
  name: string
  email: string
  phone: string
  eventDate: string
  package: string
  message: string
  createdAt: string
}

// Save inquiry to a JSON file (swap for DB in production)
function saveInquiry(inquiry: Inquiry) {
  const filePath = path.join(process.cwd(), 'data', 'inquiries.json')
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  const existing: Inquiry[] = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : []
  existing.push(inquiry)
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, eventDate, packageType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // Save inquiry locally
    const inquiry: Inquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      eventDate: eventDate || '',
      package: packageType || '',
      message,
      createdAt: new Date().toISOString(),
    }
    saveInquiry(inquiry)

    // Send email if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })

      // Notify the studio
      await transporter.sendMail({
        from: `"Vedika Weddings Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
        subject: `✨ New Inquiry from ${name}`,
        html: `
          <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:2rem;background:#0A0A0A;color:#FDFCF8;">
            <h1 style="color:#C9A84C;font-size:1.5rem;margin-bottom:1rem">New Wedding Inquiry</h1>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem">Name</td><td style="padding:0.5rem 0">${name}</td></tr>
              <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem">Email</td><td style="padding:0.5rem 0"><a href="mailto:${email}" style="color:#C9A84C">${email}</a></td></tr>
              <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem">Phone</td><td style="padding:0.5rem 0">${phone || '—'}</td></tr>
              <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem">Event Date</td><td style="padding:0.5rem 0">${eventDate || '—'}</td></tr>
              <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem">Package</td><td style="padding:0.5rem 0">${packageType || '—'}</td></tr>
            </table>
            <div style="margin-top:1.5rem;padding:1rem;border:1px solid #333;border-radius:4px">
              <p style="color:#888;font-size:0.85rem;margin-bottom:0.5rem">Message</p>
              <p style="line-height:1.7">${message}</p>
            </div>
            <p style="margin-top:2rem;font-size:0.75rem;color:#555">Received at ${new Date().toLocaleString('en-NP', { timeZone: 'Asia/Kathmandu' })} NPT</p>
          </div>
        `,
      })

      // Auto-reply to couple
      await transporter.sendMail({
        from: `"Vedika Weddings" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Thank you, ${name.split(' ')[0]} 💛 — We've received your inquiry`,
        html: `
          <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:2rem;background:#0A0A0A;color:#FDFCF8;">
            <h1 style="color:#C9A84C;font-size:2rem;font-weight:300;margin-bottom:0.5rem">Vedika Weddings</h1>
            <p style="color:#888;font-size:0.8rem;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:2rem">From Moments to Memories</p>
            <p>Dear ${name.split(' ')[0]},</p>
            <p style="line-height:1.9;margin:1rem 0">Thank you for reaching out. We are absolutely delighted at the thought of being part of your special day.</p>
            <p style="line-height:1.9;margin:1rem 0">We've received your inquiry and our team will review your details and get back to you within <strong style="color:#C9A84C">24 hours</strong> to discuss how we can make your wedding day truly unforgettable.</p>
            <p style="line-height:1.9;margin:1rem 0">In the meantime, feel free to browse our portfolio and planning hub at <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color:#C9A84C">vedikaweddings.com</a>.</p>
            <p style="margin-top:2rem">With love,<br><strong style="color:#C9A84C">The Vedika Weddings Team</strong></p>
            <p style="margin-top:0.25rem;font-size:0.8rem;color:#555">Pokhara · Kathmandu · Nepal</p>
            <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid #222;font-size:0.75rem;color:#444">
              WhatsApp: +977 9800000000 | hello@vedikaweddings.com
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true, message: 'Inquiry received!' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Failed to send. Please try WhatsApp.' }, { status: 500 })
  }
}

export async function GET() {
  // Admin endpoint — protect with auth middleware in production
  try {
    const filePath = path.join(process.cwd(), 'data', 'inquiries.json')
    if (!fs.existsSync(filePath)) return NextResponse.json([])
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    return NextResponse.json(data)
  } catch {
    return NextResponse.json([])
  }
}
