"use client";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    comments: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    // reset form
    setForm({
      name: "",
      email: "",
      service: "",
      comments: "",
    });

    // hide alert after 3 sec
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] px-4 py-10">
      <div className="max-w-[1180px] mx-auto">
        {/* TOP HEADING */}
        <div className="text-center mb-14">
          <span className="text-sm text-gray-500 uppercase tracking-[3px]">
            Contact Us
          </span>

          <h1 className="text-[38px] md:text-[52px] leading-[1.1] font-semibold text-[#111] mt-4">
            Let’s discuss your next project
          </h1>

          <p className="text-gray-500 text-[17px] leading-8 mt-5 max-w-[700px] mx-auto">
            Share your requirements with us and our team will connect
            with you to build the perfect solution for your business.
          </p>
        </div>

        {/* SUCCESS ALERT */}
        {success && (
          <div className="fixed top-6 right-6 z-50 bg-white border border-green-200 shadow-lg rounded-2xl px-5 py-4 flex items-center gap-3 animate-bounce">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2
                size={22}
                className="text-green-600"
              />
            </div>

            <div>
              <h3 className="font-semibold text-[#111]">
                Success
              </h3>

              <p className="text-sm text-gray-500">
                Inquiry submitted successfully 🚀
              </p>
            </div>
          </div>
        )}

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT CONTACT CARD */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 flex flex-col justify-between">
            {/* LOGO */}
            <div>
              <img
                src="/sevenLogo.png"
                alt="logo"
                className="w-[140px]"
              />

              <div className="mt-10">
                <h2 className="text-[34px] font-semibold text-[#111] leading-[46px]">
                  Get in touch with us
                </h2>

                <p className="text-gray-500 leading-7 mt-4">
                  We help startups and businesses create scalable
                  web, mobile, and software solutions.
                </p>
              </div>

              {/* CONTACT ITEMS */}
              <div className="space-y-7 mt-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      Office Location
                    </p>

                    <h3 className="font-medium text-[#111] leading-7">
                      Plot No 97, Dakshinpuri - I Shrikishan,
                      Sanganer, Jagatpura, Jaipur, Rajasthan
                      302017
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      Email Address
                    </p>

                    <h3 className="font-medium text-[#111]">
                      info@sevenunique.com
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      Phone Number
                    </p>

                    <h3 className="font-medium text-[#111]">
                      +91 141-4511098
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                width="100%"
                height="250"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <h2 className="text-[34px] font-semibold text-[#111]">
                  Start a Project
                </h2>

                <p className="text-gray-500 mt-4 leading-7">
                  Fill out the form below and our team will get
                  back to you within 24 hours.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                {/* NAME */}
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Your Name
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
                    className="w-full h-[58px] px-5 rounded-2xl border border-gray-200 outline-none focus:border-black transition text-[#111] placeholder:text-gray-400"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Work Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full h-[58px] px-5 rounded-2xl border border-gray-200 outline-none focus:border-black transition text-[#111] placeholder:text-gray-400"
                  />
                </div>

                {/* SERVICES */}
                <div>
                  <label className="text-sm text-gray-600 block mb-3">
                    Select Service
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Web Development",
                      "Mobile App",
                      "UI/UX Design",
                      "Software Development",
                    ].map((item) => (
                      <label
                        key={item}
                        className={`px-5 py-3 rounded-2xl border cursor-pointer text-sm font-medium transition ${
                          form.service === item
                            ? "bg-black text-white border-black"
                            : "border-gray-200 text-gray-700 hover:border-black"
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
                  <label className="text-sm text-gray-600 block mb-2">
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    name="comments"
                    value={form.comments}
                    required
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none resize-none focus:border-black transition text-[#111] placeholder:text-gray-400"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full h-[58px] rounded-2xl bg-black text-white font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition cursor-pointer"
                >
                  Submit Inquiry
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* FOOTER */}
            <div className="flex gap-6 mt-10 text-sm text-gray-400">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}