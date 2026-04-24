import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import AboutStrip from '@/components/AboutStrip'
import Portfolio from '@/components/Portfolio'
import Packages from '@/components/Packages'
import PlanningHub from '@/components/PlanningHub'
import Tools from '@/components/Tools'
import Testimonials from '@/components/Testimonials'
import BlogPreview from '@/components/BlogPreview'
import AboutSection from '@/components/AboutSection'
import InstagramGrid from '@/components/InstagramGrid'
import ContactSection from '@/components/ContactSection'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Vedika Weddings | From Moments to Memories – Nepal',
  description:
    'Vedika Weddings offers luxury wedding photography, cinematic films, and full wedding planning in Pokhara and Kathmandu, Nepal. Book your date today.',
}

export default async function HomePage() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 4)

  return (
    <>
      <Hero />
      <AboutStrip />
      <Portfolio />
      <Packages />
      <PlanningHub />
      <Tools />
      <Testimonials />
      <BlogPreview posts={featuredPosts} />
      <AboutSection />
      <InstagramGrid />
      <ContactSection />
    </>
  )
}
