export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
		<img src="/logo.png" alt="ZapataLogic Logo" className="h-10 w-auto" />
		<span className="text-xl font-semibold">ZapataLogic</span>
	  </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Smarter Technology.
            <br />
            <span className="text-blue-700">Strategic AI Integration.</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            ZapataLogic helps organizations integrate AI, optimize workflows,
            implement secure infrastructure, and build scalable Apple-first environments.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-slate-100 transition"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
  src="/andy.jpg"
  alt="Andy Zapata"
  className="w-72 h-72 object-cover rounded-2xl shadow-lg"
/>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "AI Integration",
              "Technology Process Optimization",
              "MSP Advocacy",
              "Apple Integration & Management",
              "Network Consulting & Implementation",
              "Security & Compliance"
            ].map((service) => (
              <div
                key={service}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{service}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">About ZapataLogic</h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Founded by Andy Zapata, ZapataLogic bridges strategic technology vision
            with real-world implementation. As an Apple Certified consultant and
            member of the Apple Consultants Network, Andy delivers practical,
            secure, and scalable technology solutions.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-700 text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Let’s Build Smarter Systems</h2>
        <p className="mt-4 text-blue-100">
          Ready to modernize your technology?
        </p>
        <div className="mt-8">
          <a
            href="mailto:info@zapatologic.com"
            className="px-6 py-3 bg-white text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition"
          >
            info@zapatologic.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500 border-t">
        © {new Date().getFullYear()} ZapataLogic. All rights reserved.
      </footer>

    </main>
  );
}
