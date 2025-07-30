/* eslint-disable @typescript-eslint/no-unused-vars */
 "use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.error || "Submission failed");
      } else {
        toast.success("Submitted successfully!");
        setFormData({ name: "", phone: "", service: "", area: "" });
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 rounded-lg border-2 bg-[#0F0644] w-full max-w-md">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Book Your Free Consultation Today
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone No"
          value={formData.phone}
          onChange={handleInputChange}
          className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        >
          <option value="" className="bg-white" disabled>
            Select Service
          </option>
          <option value="cctv-surveillance" >
            CCTV & Surveillance
          </option>
          <option value="biometric-systems" >
            Biometric Systems
          </option>
          <option value="anpr" >
            ANPR (Automatic Number Plate Recognition)
          </option>
          <option value="epabx-systems" >
            EPABX Systems
          </option>
          <option value="interactive-display-panels" >
            Interactive Display Panels
          </option>
          <option value="video-door-phones" >
            Video Door Phones
          </option>
          <option value="baggage-scanners" >
            Baggage Scanners
          </option>
          <option value="alarm-systems" >
            Alarm Systems
          </option>
          <option value="metal-detectors" >
            Metal Detectors
          </option>
          <option value="access-control-systems" >
            Access Control Systems
          </option>
          <option value="boom-barriers-toll-solutions" >
            Boom Barriers & Toll Solutions
          </option>
          <option value="electronic-door-locks" >
            Electronic Door Locks
          </option>
        </select>
        <select
          name="area"
          value={formData.area}
          onChange={handleInputChange}
          className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        >
          <option value="">Select Area</option>
          <option value="Gurugram">Gurugram</option>
          <option value="Delhi">Delhi NCR</option>
        </select>
        <button
          type="submit"
          className="w-full bg-[#FFC43C] text-black font-medium py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
