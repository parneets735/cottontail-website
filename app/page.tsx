"use client";

export default function Home() {
  const email = "elevatedigitalagencies@gmail.com";

  return (
    <main className="min-h-screen bg-[#05050b] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,210,255,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,36,180,0.22),transparent_32%),radial-gradient(circle_at_bottom,rgba(93,38,255,0.28),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,183,255,0.08),transparent_35%,rgba(255,0,170,0.08))]" />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/30 bg-white p-2 shadow-[0_0_35px_rgba(0,200,255,0.22)]">
              <img src="/elevate-logo.png" alt="Elevate Digital logo" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">Elevate Digital</p>
              <p className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-sm font-bold text-transparent">Agencies</p>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="hidden rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 transition hover:border-cyan-300 hover:text-cyan-300 sm:block"
          >
            {email}
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-14 lg:grid-cols-2 lg:pb-32 lg:pt-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Website design for small businesses
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Modern websites that help your business look professional online.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Elevate Digital Agencies creates clean, mobile-friendly websites for local businesses, tutors, studios, and service providers who want a stronger online presence.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${email}`}
                className="rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 px-7 py-4 text-center text-sm font-bold text-white shadow-[0_0_35px_rgba(0,183,255,0.25)] transition hover:scale-[1.02]"
              >
                Get a Free Website Mockup
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:border-fuchsia-300 hover:text-fuchsia-200"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0c0c16] p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <p className="text-sm text-white/50">Sample business website</p>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="h-3 w-3 rounded-full bg-fuchsia-400" />
                </div>
              </div>

              <div className="space-y-5">
                <div className="h-8 w-3/4 rounded-full bg-gradient-to-r from-cyan-300/40 to-fuchsia-400/40" />
                <div className="h-4 w-full rounded-full bg-white/10" />
                <div className="h-4 w-5/6 rounded-full bg-white/10" />
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4">
                    <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600" />
                    <div className="mb-2 h-3 w-3/4 rounded-full bg-white/20" />
                    <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  </div>
                  <div className="rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/[0.06] p-4">
                    <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500" />
                    <div className="mb-2 h-3 w-3/4 rounded-full bg-white/20" />
                    <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-fuchsia-300/20 bg-fuchsia-300/10 p-6">
              <h2 className="text-2xl font-semibold">Book more clients with a better first impression.</h2>
              <p className="mt-3 text-white/60">
                Clear services, mobile-friendly design, simple contact forms, and a polished look.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090914] px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 text-center sm:grid-cols-4">
          {["Mobile-ready", "Fast setup", "Clean design", "Easy contact"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-sm font-semibold text-white/75">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Our Mission</p>
        <p className="max-w-4xl text-3xl font-medium leading-tight text-white/90 md:text-5xl">
          Our mission is simple: create clean, high-performing digital experiences that elevate businesses to the next level.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Services</p>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">What we build</h2>
          <p className="max-w-md text-white/60">
            Simple, professional websites designed to make your business easier to find, trust, and contact.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Website Design", "Modern landing pages and full websites for small businesses and personal brands."],
            ["Mobile Optimization", "Websites that look clean and easy to use on phones, tablets, and desktops."],
            ["Contact Setup", "Simple contact forms, call-to-action buttons, and email links so customers can reach you quickly."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-7 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-600 to-fuchsia-500" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-[#0c0c16] p-8 md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Why Elevate Digital</p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            A polished website without the complicated process.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Clean, professional design that fits your brand",
              "Simple layout focused on getting customers to contact you",
              "Mobile-friendly pages for today's customers",
              "Quick mockups so you can see the vision before committing",
            ].map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/75">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-fuchsia-500 text-sm font-black text-white">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 pb-28">
        <div className="rounded-[2rem] bg-gradient-to-r from-cyan-300 via-blue-600 to-fuchsia-500 p-8 text-white md:p-12">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Want a free mockup?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Send your current website or business page, and we'll show you what a cleaner, more modern version could look like.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black"
          >
            Email Us Today
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 Elevate Digital Agencies · <a className="hover:text-cyan-300" href={`mailto:${email}`}>{email}</a>
      </footer>
    </main>
  );
}

