"use client";

export default function ContactSection() {
  const handleWhatsAppSend = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;

    const phone = "923152669152";
    const text = `👤 Name: ${name}  📧 Email: ${email}  💬 Message: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="body-font bg-gray-50 py-20">
      <div className="container mx-auto px-5 flex sm:flex-nowrap flex-wrap gap-10">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.380657233513!2d67.02340577442928!3d24.85084544564403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Karachi!5e0!3m2!1sen!2s!4v1764822203349!5m2!1sen!2s"
            style={{ filter: "grayscale(20%) contrast(1.1) opacity(0.85)" }}
          ></iframe>

          <div className="relative bg-white p-6 rounded-lg shadow-md m-6 max-w-xs">
            <h2 className="text-gray-700 text-sm font-semibold tracking-widest">
              ADDRESS
            </h2>
            <p className="mt-2 text-gray-600">
              Governor House Karachi, Aiwan-e-Sadar, Civil Lines
            </p>

            <h2 className="text-gray-700 text-sm font-semibold tracking-widest mt-4">
              EMAIL
            </h2>
            <p className="text-indigo-600">mubashirmpa2008@gmail.com</p>

            <h2 className="text-gray-700 text-sm font-semibold tracking-widest mt-4">
              PHONE
            </h2>
            <p className="text-gray-600">+92 315 2669152</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 w-full bg-white rounded-xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-gray-900 text-2xl font-semibold mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Have any questions? Feel free to reach out — we are here to help.
          </p>

          <div className="mb-4">
            <label className="text-sm text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              id="message"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 h-32 text-gray-700 
              resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          <button
            onClick={handleWhatsAppSend}
            className="w-full text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg font-medium 
            transition-all shadow-md hover:shadow-lg"
          >
            Send via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
