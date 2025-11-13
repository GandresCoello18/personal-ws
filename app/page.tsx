import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { ClassgapSection } from "@/components/classgap-section"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { PaymentMethods } from "@/components/payment-methods"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Services />
      <ClassgapSection />
      <Testimonials />
      <CTA />
      <PaymentMethods />
      <Footer />
    </main>
  )
}
