import Image from "next/image"
import Link from "next/link"
import { AuraHeroSection } from "@/components/ui/aura-hero"
import { Footer } from "@/components/footer"
import { ArrowRight, Instagram } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AuraHeroSection />

      {/* Page 1: Business Services (Priority #1) */}
      <section className="py-16 px-6 md:px-12 bg-white border-t border-b">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-light text-muted-foreground mb-2">Trusted by:</p>
            <h2 className="text-lg md:text-xl font-serif">
              Interior Designers | Architects | Premium Homeowners
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide">Imported & curated botanical elements</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Carefully selected from global sources for quality and realism
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide">Material realism & spatial harmony</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Every piece evaluated for tactile authenticity and visual integrity
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide">Warmth of home, lasting elegance</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Creating timeless beauty and spatial harmony in every environment
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-muted-foreground font-light leading-relaxed mt-12 max-w-3xl mx-auto italic">
            "Collaborates with professionals to bring refined artificial florals into everyday environments."
          </p>
        </div>
      </section>

      {/* Page 2: Collection 01 - Core Products */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Collection 01</span>
            <h2 className="font-serif text-4xl md:text-5xl">Living & Green Décor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Flowers",
                description: "Blooms that defy seasons",
                image: "/minimal-botanical-arrangement-on-stone.jpg",
              },
              {
                title: "Artificial Green Plants",
                description: "Perpetual greenery",
                image: "/luxury-interior-with-artificial-floral-installatio.jpg",
              },
              {
                title: "Hanging Greenery",
                description: "Suspended elegance",
                image: "/large-artificial-floral-installation-wall.jpg",
              },
              {
                title: "Bonsai",
                description: "Miniature contemplation",
                image: "/luxury-artificial-orchid-arrangement.jpg",
              },
              {
                title: "Décor Accessories",
                description: "Refined touches",
                image: "/ceramic-gradient-pot-minimal.jpg",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={`/collections/${item.title.toLowerCase().replace(/ /g, "-")}`}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 text-background translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1 opacity-80">{item.description}</p>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Page 3: Collection 02 - Signature Pieces */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-foreground text-background overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-12 relative z-10">
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Collection 02</span>
                <h2 className="font-serif text-4xl md:text-7xl leading-tight">
                  Signature <br />
                  <span className="italic">Pieces</span>
                </h2>
              </div>
              <div className="space-y-8 text-lg opacity-90 leading-relaxed font-light max-w-md">
                <div>
                  <h3 className="font-serif text-xl mb-2 opacity-100">Console Table</h3>
                  <p className="text-base opacity-70">Round wood, black legs, brass tips</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 opacity-100">Ceramic Gradient Pots</h3>
                  <p className="text-base opacity-70">Amber-to-charcoal glaze</p>
                </div>
              </div>
              <Link
                href="/signature"
                className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold group"
              >
                Shop the editions
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8 mt-12 md:mt-24">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image src="/ceramic-gradient-pot-minimal.jpg" alt="Ceramic Gradient Pots" fill className="object-cover" />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/luxury-artificial-orchid-arrangement.jpg" alt="Signature Pieces" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-8">
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/minimal-handcrafted-console-table.jpg" alt="Console Table" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/large-artificial-floral-installation-wall.jpg"
                    alt="Signature Installations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Decorative Text Background */}
        <div className="absolute -bottom-24 -right-12 text-[20vw] font-serif text-white/[0.03] leading-none pointer-events-none select-none">
          AURA
        </div>
      </section>

      {/* Page 4: Wedding & Events Service */}
      <section className="py-24 px-6 md:px-12 bg-white border-y">
        <div className="max-w-screen-xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Ceremonial Team</span>
            <h2 className="font-serif text-4xl md:text-6xl">Gujarat Florist</h2>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              Ceremonial & Wedding Décor Specialist
            </p>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-loose max-w-2xl mx-auto">
            Large-scale floral designs for celebrations. From intimate gatherings to grand events, we create immersive
            botanical environments.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="https://www.instagram.com/gujarat_florist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 border border-foreground text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground hover:text-background transition-all"
            >
              <Instagram size={16} strokeWidth={1.5} />
              @gujarat_florist
            </Link>
            <Link
              href="/wedding"
              className="text-[11px] uppercase tracking-[0.3em] font-semibold flex items-center gap-2 group border-b border-transparent hover:border-foreground transition-all py-1"
            >
              View Wedding Services
            </Link>
          </div>
        </div>
      </section>

      {/* Final Page: Contact & CTA */}
      <section className="py-32 px-6 md:px-12 bg-background border-t">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-7xl leading-tight text-balance">
            Let's Design Something <span className="italic">Timeless</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-loose font-light max-w-2xl mx-auto">
            Whether it's a home, workspace, or commercial interior, Aura House of Flowers works closely to curate décor
            that feels intentional, refined, and enduring.
          </p>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="font-serif text-lg">DEVVAN COMPLEX, G-6, Atabhai Rd</p>
            <p className="font-serif text-lg">Bhavnagar, Gujarat 364001</p>
            <p className="font-serif text-lg">+91 9737828614</p>
            <Link 
              href="https://www.instagram.com/aurahouseofflowers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-serif text-lg hover:text-foreground transition-colors"
            >
              <Instagram size={20} />
              @aurahouseofflowers
            </Link>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/collections"
              className="px-12 py-5 bg-foreground text-background text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground/90 transition-all"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="px-12 py-5 border border-foreground text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground hover:text-background transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
