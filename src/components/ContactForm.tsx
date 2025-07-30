"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";;
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  // FaYoutube,
} from "react-icons/fa";
import HeroBanner from "./ui/hero-banner";

import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "CCTV Installation",
    address: "",
    city: "Gurugram",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     // Validate required fields and mobile format
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(formData.name.trim())) {
      toast.error("Please enter a valid name (letters and spaces only)");
      return;
  }
  const fullMobile = `+91${formData.mobile.trim()}`;
  const mobileRegex = /^\+91[7-9][0-9]{9}$/;
  if (!mobileRegex.test(fullMobile)) {
    toast.error("Please enter a valid 10-digit Indian mobile number.");
    return;
  }
  
  const payload = { ...formData, mobile: fullMobile };
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }
    if (!formData.mobile.trim()) {
      toast.error("Mobile number is required");
      return;
    }
   
    setLoading(true);
    
    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Your request has been submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          service: "CCTV Installation",
          address: "",
          city: "Gurugram",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <HeroBanner title="Contact Us" />
      </div>

      <div className="min-h-screen bg-inherit flex flex-col justify-center items-center p-6 font-[family-name:var(--font-urbanist)]">
        <div className="max-w-4xl mt-8 mx-auto px-4 md:px-0 prose prose-lg prose-blue prose-headings:text-[#00246C] prose-headings:font-extrabold prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6">
          <p>
            Get in Touch with Quadra Security We’re here to help you secure what
            matters most. Whether you have a question about our products,
            services or need expert advice, our team is ready to assist you.
            Reach out to us today
          </p>
        </div>
        <div className="max-w-7xl w-full mt-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden border border-gray-100">
          {/* Left Panel: Contact Info */}
          <div className="bg-gradient-to-b from-[#292BA1] to-[#0D0544] text-white w-full md:w-1/3 p-8 space-y-6">
            <div className="text-white text-sm space-y-6">
              {/* GET IN TOUCH */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  GET IN TOUCH
                </h2>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-xl text-white" />
                    <span className="text-white">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=accounts@quadrasecurity.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         accounts@quadrasecurity.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLocationDot className="text-xl text-white" />
                    <span className="text-white">Gurugram, Delhi NCR, Noida</span>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  SOCIAL LINKS
                </h2>
                <div className="flex flex-col gap-5 text-white text-sm">
                  <a
                    href="https://www.facebook.com/profile.php?id=61577161615068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-gray-300 transition"
                  >
                    <FaFacebookF className="text-xl text-white" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/quadra_security?igsh=MWlvb3Q5bTFja2ZmaQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-gray-300 transition"
                  >
                    <FaInstagram className="text-xl text-white" />
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/quadra-security/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-gray-300 transition"
                  >
                    <FaLinkedinIn className="text-xl text-white" />
                    LinkedIn
                  </a>
                  {/* <a
                    href="https://www.youtube.com/@QuadraSecurity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-gray-300 transition"
                  >
                    <FaYoutube className="text-xl text-white" />
                    YouTube
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="w-full md:w-2/3 p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
               <div className="relative w-full">
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-semibold pointer-events-none">
    +91
  </span>
  <Input
    type="tel"
    name="mobile"
    maxLength={10}
    pattern="[0-9]{10}"
    value={formData.mobile}
    onChange={handleChange}
    placeholder="Phone number"
    required
    className="pl-12"
  />
</div>


              </div>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none"
                required
              >
                <option value="CCTV Installation" className="text-black">
                  CCTV Installation
                  </option>
                <option value="biometric-systems" className="text-black">
                  Biometric Systems
                </option>
                <option value="anpr" className="text-black">
                  ANPR (Automatic Number Plate Recognition)
                </option>
                <option value="epabx-systems" className="text-black">
                  EPABX Systems
                </option>
                <option value="interactive-display-panels" className="text-black">
                  Interactive Display Panels
                </option>
                <option value="video-door-phones" className="text-black">
                  Video Door Phones
                </option>
                <option value="baggage-scanners" className="text-black">
                  Baggage Scanners
                </option>
                <option value="alarm-systems" className="text-black">
                  Alarm Systems
                </option>
                <option value="metal-detectors" className="text-black">
                  Metal Detectors
                </option>
                <option value="access-control-systems" className="text-black">
                  Access Control Systems
                </option>
                <option value="boom-barriers-toll-solutions" className="text-black">
                  Boom Barriers & Toll Solutions
                </option>
                <option value="electronic-door-locks" className="text-black">
                  Electronic Door Locks
                </option>
                <option value="Maintenance" className="text-black">
                  Maintenance
                </option>
                <option value="Other" className="text-black">
                  Other
                </option>
              </select>
              <Textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter street address and locality"
                className="min-h-[100px]"
                
              />
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none"
                
              >
                <option value="Gurugram">Gurugram</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="DelhiNCR">Delhi-NCR</option>
                <option value="Others">Others</option>
                </select>
               
                <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2B388F] hover:bg-[#232743]"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
