"use client";

import { LockIcon } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";

export default function SiteVisitForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

   
      const fullPhone = `+91${formData.phone.trim()}`;
      const isValidPhone = /^\+91[6-9][0-9]{9}$/.test(fullPhone);

  if (!isValidPhone) {
    toast.error("Please enter a valid 10-digit Indian mobile number");
    setSubmitting(false);
    return;
  }
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(formData.name.trim())) {
           toast.error("Please enter a valid name (letters and spaces only)");
           setSubmitting(false);
           return;
  }


    try {
      const response = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone: fullPhone }),
      });

      const result = await response.json();
      
      if (response.ok) {
        toast.success("We will contact you soon!");
        setFormData({ name: "", phone: "", service: "", area: "" });
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="block w-5/7 bg-white/10 md:p-6 p-4 md:rounded-3xl rounded-2xl shadow-2xl text-center md:w-[400px]  h-[300px] md:h-auto text-white relative backdrop-blur-xl"
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
        <LockIcon className="text-black" />
      </div>

      <h2 className="font-urbanist font-semibold md:text-xl md:mb-6 mb-3 md:mt-8 mt-2">
        Schedule a Free <br /> Site Visit
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:gap-4 gap-3">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleChange}
          className="px-4 md:py-3 py-1 text-sm rounded-md bg-transparent border border-white placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
 <div className="relative w-full">
  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-sm font-semibold pointer-events-none">
    +91
  </span>
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type="tel"
    name="phone"
    maxLength={10}
    pattern="[0-9]{10}"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={handleChange}
    className="pl-12 md:py-3 py-1 text-sm rounded-md bg-transparent border border-white placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all w-full"
    required
  />
</div>


        <motion.select
          whileFocus={{ scale: 1.02 }}
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="px-4 md:py-3 py-1 text-sm rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          
        >
          <option value="" className="bg-white" disabled>
            SELECT SERVICE
          </option>
          <option value="cctv-surveillance" className="text-black">
            CCTV & Surveillance
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
        </motion.select>
        <motion.select
          whileFocus={{ scale: 1.02 }}
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="px-4 md:py-3 py-1 rounded-md text-sm bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          
        >
          <option value="" disabled>
            SELECT LOCATION
          </option>
          <option value="Gurugram" className="text-black">
              Gurugram
          </option>
           <option value="Delhi" className="text-black">
              Delhi
          </option>
          <option value="Noida" className="text-black">
              Noida
          </option>
          <option value="DelhiNCR" className="text-black">
              Delhi-NCR
          </option>
          <option value="Others" className="text-black">
              Others
          </option>
         
          
          
          
          {/* <optgroup label="North Gurgaon" className="text-black">
            <option value="palam-vihar" className="text-black">
              Palam Vihar
            </option>
            <option value="dlf-phase-1" className="text-black">
              DLF Phase 1
            </option>
            <option value="dlf-phase-2" className="text-black">
              DLF Phase 2
            </option>
            <option value="mg-road" className="text-black">
              MG Road
            </option>
          </optgroup>
          <optgroup label="South Gurugram" className="text-black">
            <option value="sohna" className="text-black">
              Sohna
            </option>
            <option value="badshahpur" className="text-black">
              Badshahpur
            </option>
            <option value="sector-67" className="text-black">
              Sector 67
            </option>
            <option value="vatika" className="text-black">
              Vatika City
            </option>
          </optgroup>
          <optgroup label="East Gurugram" className="text-black">
            <option value="sector-56" className="text-black">
              Sector 56
            </option>
            <option value="golf-course-road" className="text-black">
              Golf Course Road
            </option>
            <option value="gwalpahari" className="text-black">
              Gwalpahari
            </option>
            <option value="ghata" className="text-black">
              Ghata Village
            </option>
          </optgroup>
          <optgroup label="West Gurugram" className="text-black">
            <option value="sector-9" className="text-black">
              Sector 9
            </option>
            <option value="sector-10" className="text-black">
              Sector 10
            </option>
            <option value="hero-honda-chowk" className="text-black">
              Hero Honda Chowk
            </option>
            <option value="iffco-chowk" className="text-black">
              IFFCO Chowk
            </option>
          </optgroup>
          <optgroup label="Central Gurugram" className="text-black">
            <option value="civil-lines" className="text-black">
              Civil Lines
            </option>
            <option value="rajiv-chowk" className="text-black">
              Rajiv Chowk
            </option>
            <option value="sector-14" className="text-black">
              Sector 14
            </option>
            <option value="sector-15" className="text-black">
              Sector 15
            </option>
          </optgroup> */}
          
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={submitting}
          className={`md:mt-4 ${
            submitting ? "bg-gray-500 cursor-not-allowed" : "bg-[#01024E] hover:bg-[#01013a]"
          } text-sm transition-all text-white font-semibold md:py-3 py-2 rounded-md tracking-widest shadow-md`}
        >
          {submitting ? "Submitting..." : "SUBMIT"}
        </motion.button>
      </form>
    </motion.div>
  );
}
