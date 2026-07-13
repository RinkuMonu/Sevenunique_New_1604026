"use client";

import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { useState } from "react";

// export const metadata = {
//   title: "Schedule a Software Development Call | SevenUnique",
//   description: "Schedule a call with SevenUnique experts to discuss your web, mobile app, AI, SaaS, or custom software development requirements and for scalable growth.",
// };

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    comments: "",
  });

  const [success, setSuccess] = useState(false);

  const offices = [
    {
      city: "Jaipur",
      title: "Jaipur Head Office",
      address:
        "Plot No 97, Dakshinpuri - I Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan 302017",
      phone: "+91 141-4511098",
      email: "info@sevenunique.com",
    },
    {
      city: "Mumbai",
      title: "Mumbai Office",
      address:
        "No. 101/2, Vakratunda Corporate Park, Off Aarey Road, Goregaon East, Mumbai – 400063",
      phone: "+91 141-4511098",
      email: "info@sevenunique.com",
    },
    {
      city: "Dubai",
      title: "UAE Office",
      address:
        "Office Number 01-02, C-1 Building, Ajman Free Zone, Dubai, United Arab Emirates",
      phone: "+971 55 000 0000",
      email: "salesuae@sevenunique.com",
    },
    {
      city: "USA",
      title: "USA Office",
      address: "514 State Shelton Street Garden, Wisconsin, USA – 55309",
      phone: "+1 414 000 0000",
      email: "salesusa@sevenunique.com",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setSuccess(true);

  //   setForm({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     service: "",
  //     comments: "",
  //   });

  //   setTimeout(() => {
  //     setSuccess(false);
  //   }, 3000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          comments: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen bg-[#f6f7fb] px-4 py-10 md:py-16">
      <div className="max-w-[1180px] mx-auto">
        {/* HEADING */}
        <div className="text-center mb-10">
          <span className="text-[12px] tracking-[4px] uppercase text-[#f4622a] font-semibold">
            Contact Us
          </span>

          <h1 className="text-[34px] md:text-[54px] font-bold text-[#111] leading-[1.1] mt-4">
            Let’s build something amazing
          </h1>

          <p className="text-gray-500 text-[15px] md:text-[17px] leading-7 max-w-[700px] mx-auto mt-5">
            Connect with our team for web development, mobile apps, AI
            solutions, ERP systems, and custom software services.
          </p>
        </div>

        {/* SUCCESS */}
        {success && (
          <div className="fixed top-6 right-6 z-50 bg-white border border-green-200 rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 size={22} className="text-green-600" />
            </div>

            <div>
              <h3 className="font-semibold text-[#111]">Inquiry Submitted</h3>

              <p className="text-sm text-gray-500">
                Our team will contact you soon 🚀
              </p>
            </div>
          </div>
        )}

        {/* MAIN CARD */}
        <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
              {/* LOGO */}
              <img
                src="/sevenLogo.png"
                alt="Sevenunique"
                className="w-[140px]"
              />

              <div className="mt-8">
                <h2 className="text-[32px] md:text-[42px] leading-[1.15] font-bold text-[#111]">
                  Get in touch with our team
                </h2>

                <p className="text-gray-500 leading-7 mt-4 text-[15px]">
                  We help startups and enterprises create scalable digital
                  products with modern technologies.
                </p>
              </div>

              {/* OFFICES */}
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-gray-200 p-5 hover:border-[#f4622a] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-[#fff4ef] flex items-center justify-center">
                        <MapPin
                          size={18}
                          className="text-[#f4622a]"
                          strokeWidth={2.4}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#111] text-[15px]">
                          {office.city}
                        </h3>

                        <p className="text-[12px] text-gray-400">
                          {office.title}
                        </p>
                      </div>
                    </div>

                    <p className="text-[13px] leading-6 text-gray-600 mb-4">
                      {office.address}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[13px] text-[#111] font-medium">
                        <Phone
                          size={15}
                          className="text-[#f4622a]"
                          strokeWidth={2.5}
                        />
                        {office.phone}
                      </div>

                      <div className="flex items-center gap-2 text-[13px] text-[#111] font-medium break-all">
                        <Mail
                          size={15}
                          className="text-[#f4622a]"
                          strokeWidth={2.5}
                        />
                        {office.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MAP */}
              <div className="mt-8 overflow-hidden rounded-[28px] border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                  width="100%"
                  height="240"
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-6 md:p-10 bg-[#fcfcfc]">
              <div className="mb-8">
                <span className="text-[12px] uppercase tracking-[3px] text-[#f4622a] font-semibold">
                  Start a Project
                </span>

                <h2 className="text-[32px] md:text-[42px] font-bold text-[#111] leading-[1.15] mt-4">
                  Tell us about your idea
                </h2>

                <p className="text-gray-500 leading-7 mt-4 text-[15px]">
                  Fill out the form and our experts will connect with you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME */}
                <div>
                  <label className="text-sm font-medium text-[#111] block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    required
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^[a-zA-Z\s]*$/.test(value)) {
                        handleChange(e);
                      }
                    }}
                    placeholder="Enter your name"
                    className="w-full h-[56px] rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-[#f4622a] text-[#111] placeholder:text-gray-400 transition"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-[#111] block mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full h-[56px] rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-[#f4622a] text-[#111] placeholder:text-gray-400 transition"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm font-medium text-[#111] block mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    required
                    maxLength={10}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^[0-9]*$/.test(value)) {
                        handleChange(e);
                      }
                    }}
                    placeholder="Enter mobile number"
                    className="w-full h-[56px] rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-[#f4622a] text-[#111] placeholder:text-gray-400 transition"
                  />
                </div>

                {/* SERVICES */}
                <div>
                  <label className="text-sm font-medium text-[#111] block mb-3">
                    Select Service
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Web Development",
                      "Mobile App",
                      "AI Solutions",
                      "ERP Software",
                    ].map((item) => (
                      <label
                        key={item}
                        className={`h-[52px] rounded-2xl border flex items-center justify-center text-[13px] font-medium cursor-pointer transition ${
                          form.service === item
                            ? "bg-[#111] text-white border-[#111]"
                            : "bg-white border-gray-200 text-[#111] hover:border-[#111]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={item}
                          required
                          onChange={handleChange}
                          className="hidden"
                        />

                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium text-[#111] block mb-2">
                    Project Details
                  </label>

                  <textarea
                    rows={5}
                    name="comments"
                    value={form.comments}
                    required
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none resize-none focus:border-[#f4622a] text-[#111] placeholder:text-gray-400 transition"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full h-[58px] rounded-2xl bg-[#111] hover:bg-[#000] text-white font-medium flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Submit Inquiry
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* FOOTER */}
              <div className="flex gap-5 mt-8 text-sm text-gray-400">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
