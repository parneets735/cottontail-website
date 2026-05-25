"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Star, Truck, Heart, Mail } from "lucide-react";
const Button = ({ children, className = "", ...props }: any) => (
  <button
    className={`px-4 py-2 rounded-xl font-semibold transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }: any) => (
  <div className={`rounded-3xl ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }: any) => (
  <div className={className}>{children}</div>
);

const flavors = [
  {
    name: "Cloudberry Bliss",
    desc: "A dreamy mix of strawberry, vanilla, and berry sparkle.",
    price: "$7.99",
    tag: "Best Seller",
  },
  {
    name: "Blue Bunny Burst",
    desc: "Electric blue raspberry with a tiny sour-candy kick.",
    price: "$7.99",
    tag: "Fan Fave",
  },
  {
    name: "Peachy Puff",
    desc: "Soft peach, cream soda, and sunshine in every swirl.",
    price: "$8.49",
    tag: "New",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Small-Batch Magic",
    text: "Made fresh in tiny batches for fluffy texture and bold flavour.",
  },
  {
    icon: Heart,
    title: "Party-Ready Packaging",
    text: "Cute tubs, pastel cones, and gift boxes made for birthdays and events.",
  },
  {
    icon: Truck,
    title: "Sweet Delivery",
    text: "Local delivery and event carts available for pop-ups, weddings, and school events.",
  },
];

export default function CottontailWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50 text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 border-b border-pink-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-pink-300 to-sky-300 flex items-center justify-center shadow-sm">
              <span className="text-2xl">☁️</span>
            </div>
            <div>
              <p className="font-black text-2xl tracking-tight">Cottontail</p>
              <p className="text-xs text-slate-500 -mt-1">cotton candy co.</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#flavors" className="hover:text-pink-500">Flavours</a>
            <a href="#events" className="hover:text-pink-500">Events</a>
            <a href="#about" className="hover:text-pink-500">About</a>
            <a href="#contact" className="hover:text-pink-500">Contact</a>
          </div>
          <Button className="rounded-full bg-slate-900 hover:bg-pink-500 text-white px-5">
            Order Now
          </Button>
        </nav>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-pink-100 mb-6">
              <Sparkles className="h-4 w-4 text-pink-500" />
              <span className="text-sm font-semibold text-slate-600">Fresh-spun cotton candy for sweet moments</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Fluffy clouds of candy, spun with joy.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-8">
              Cottontail makes playful, pastel cotton candy for parties, gifting, pop-ups, and everyday treat-yourself energy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-8 shadow-lg shadow-pink-200">
                Shop Flavours
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-slate-300 px-8 bg-white/70">
                Book Event Cart
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {["🍓", "🫐", "🍑", "🍋"].map((item) => (
                  <div key={item} className="h-10 w-10 rounded-full bg-white border border-pink-100 flex items-center justify-center shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
              <p><span className="font-bold text-slate-800">12+</span> rotating flavours every season</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 h-36 w-36 bg-pink-200 rounded-full blur-3xl opacity-70" />
            <div className="absolute -bottom-8 -right-8 h-44 w-44 bg-sky-200 rounded-full blur-3xl opacity-70" />
            <div className="relative rounded-[2rem] bg-white p-6 shadow-2xl border border-pink-100 overflow-hidden">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-pink-100 via-purple-50 to-sky-100 min-h-[430px] flex items-center justify-center p-8">
                <div className="relative h-80 w-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-white to-sky-300 blur-sm" />
                  <div className="absolute top-8 left-8 h-36 w-36 rounded-full bg-pink-200" />
                  <div className="absolute top-5 right-12 h-32 w-32 rounded-full bg-sky-200" />
                  <div className="absolute bottom-14 left-14 h-40 w-40 rounded-full bg-purple-200" />
                  <div className="absolute bottom-8 right-6 h-36 w-36 rounded-full bg-white" />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl drop-shadow-sm">🐰</div>
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 h-44 w-14 bg-amber-100 rotate-6 rounded-b-3xl border border-amber-200" />
                </div>
              </div>
              <div className="absolute top-8 right-8 rounded-full bg-white px-4 py-2 shadow-md flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold">4.9 Sweetness</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="flavors" className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-pink-500 font-bold uppercase tracking-widest text-sm">Signature Flavours</p>
              <h2 className="text-4xl font-black mt-2">Pick your puff.</h2>
            </div>
            <p className="text-slate-600 max-w-md">Every tub is sealed fresh and made to look cute enough for the table before it disappears.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {flavors.map((flavor) => (
              <Card key={flavor.name} className="rounded-3xl border-pink-100 shadow-sm hover:shadow-xl transition overflow-hidden bg-white/80">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-pink-100 via-white to-sky-100 flex items-center justify-center text-7xl">
                    ☁️
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="text-xl font-black">{flavor.name}</h3>
                      <span className="text-xs rounded-full bg-pink-100 text-pink-600 px-3 py-1 font-bold">{flavor.tag}</span>
                    </div>
                    <p className="text-slate-600 leading-7">{flavor.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-black text-lg">{flavor.price}</span>
                      <Button size="sm" className="rounded-full bg-slate-900 hover:bg-pink-500">
                        <ShoppingBag className="h-4 w-4 mr-2" /> Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-12 grid lg:grid-cols-3 gap-8 items-center shadow-xl">
            <div className="lg:col-span-1">
              <p className="text-pink-300 font-bold uppercase tracking-widest text-sm">Why Cottontail</p>
              <h2 className="text-4xl font-black mt-2">Cute, fresh, and event-ready.</h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-3xl bg-white/10 p-6 border border-white/10">
                    <Icon className="h-7 w-7 text-pink-300 mb-4" />
                    <h3 className="font-black text-lg mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm leading-6">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="events" className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 to-sky-100 p-8 min-h-[360px] flex items-center justify-center text-8xl shadow-inner">
            🎪🍭☁️
          </div>
          <div>
            <p className="text-pink-500 font-bold uppercase tracking-widest text-sm">Events & Pop-Ups</p>
            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">Bring the cotton candy cart to your next party.</h2>
            <p className="mt-5 text-slate-600 leading-8">
              From birthday tables to campus events, our pastel cart serves fresh-spun cotton candy with custom colours, flavour labels, and photo-ready packaging.
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
              <div className="rounded-2xl bg-white p-4 border border-pink-100">Custom flavour menu</div>
              <div className="rounded-2xl bg-white p-4 border border-pink-100">On-site spinning</div>
              <div className="rounded-2xl bg-white p-4 border border-pink-100">Branded party favours</div>
              <div className="rounded-2xl bg-white p-4 border border-pink-100">Pastel dessert table setup</div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 py-16 pb-24">
          <div className="rounded-[2rem] bg-white border border-pink-100 p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-pink-500 font-bold uppercase tracking-widest text-sm">Sweet inbox only</p>
              <h2 className="text-4xl font-black mt-2">Get 10% off your first puff box.</h2>
              <p className="text-slate-600 mt-4 max-w-xl">Join the Cottontail list for seasonal drops, party packages, and limited flavour alerts.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input className="w-full rounded-full border border-slate-200 py-4 pl-12 pr-4 outline-none focus:ring-4 focus:ring-pink-100" placeholder="your@email.com" />
              </div>
              <Button className="rounded-full bg-pink-500 hover:bg-pink-600 py-6 px-8">Sign Up</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-100 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Cottontail Cotton Candy Co.</p>
          <p>Made for birthdays, pop-ups, weddings, and tiny treat emergencies.</p>
        </div>
      </footer>
    </div>
  );
}
