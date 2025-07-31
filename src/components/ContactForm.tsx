"use client";

import { useState } from "react";
import { toast } from "sonner";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type FormDataType = {
  name: string;
  mobile: string;
  email: string;
  service: string;
  address: string;
  city: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    mobile: "",
    email: "",
    service: "CCTV Installation",
    address: "",
    city: "Gurgaon",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          city: "Gurgaon",
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
  const ContactLink = ({
  icon,
  text,
  href,
}: {
  icon: JSX.Element;
  text: string;
  href?: string;
}) => (
  <div className="flex items-center gap-3">
    {icon}
    {href ? (
      <a href={href} target="_blank" className="hover:underline">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

const services = [
  "CCTV Installation",
  "biometric-systems",
  "anpr",
  "epabx-systems",
  "interactive-display-panels",
  "video-door-phones",
  "baggage-scanners",
  "alarm-systems",
  "metal-detectors",
  "access-control-systems",
  "boom-barriers-toll-solutions",
  "electronic-door-locks",
  "Maintenance",
  "Other",
];

const cities = ["Gurgaon", "Delhi", "Noida", "DelhiNCR", "Others"];

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  isPhone = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  placeholder: string;
  isPhone?: boolean;
}) => (
  <div>
    <label className="text-white text-sm font-semibold">{label}</label>
    <div className="relative">
      {isPhone && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-semibold pointer-events-none">
          +91
        </span>
      )}
      <input
        type={isPhone ? "tel" : "text"}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={isPhone ? 10 : undefined}
        pattern={isPhone ? "[0-9]{10}" : undefined}
        placeholder={placeholder}
        className={`w-full border px-4 py-2 ${isPhone ? "pl-12" : ""} rounded-[0.5rem] bg-[#D9D9D9] text-black  focus:outline-none placeholder-gray-800`}
      />
    </div>
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  options: string[];
}) => (
  <div>
    <label className="text-white text-sm font-semibold">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-10 px-3 py-2 rounded-[0.5rem] border border-slate-300 bg-[#D9D9D9] focus:outline-none text-gray-800 placeholder-gray-500"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const SubmitButton = ({ loading }: { loading: boolean }) => (
  <div className="flex justify-center pt-4">
    <button
      type="submit"
      className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
      disabled={loading}
    >
      {loading ? "Submitting..." : "Submit"}
    </button>
  </div>
);

  return (
    <div className="pt-30">
      {/* Desktop Layout */}
      <div className="hidden md:flex border-dotted border-6 border-white border-[#4f4f4f] bg-[#08156B] h-[500px] w-[1000px] mx-auto   rounded-[5rem] overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 px-14 py-10 text-white flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-orange-400 leading-tight">
            Book Your <br /> Service <br /> Today!
          </h1>

          <div className="space-y-4 text-sm mt-3">
            <div className="flex items-center gap-3">
              <MdEmail className="text-lg" />
              <a href="mailto:quadrasecurity@gmail.com" target="_blank" className="hover:underline">
                quadrasecurity@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="text-lg" />
              <a href="https://www.instagram.com/quadra_security" target="_blank" className="hover:underline">
                quadrasecurity Instagram
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-lg" />
              <a href="https://www.facebook.com/profile.php?id=61577161615068" target="_blank" className="hover:underline">
                quadrasecurity Facebook
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-lg" />
              <span>quadrasecurity address</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-[#08156B] p-8">
          <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
            <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
            <InputField label="Contact" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone number" isPhone />
            <SelectField label="Service" name="service" value={formData.service} onChange={handleChange} options={services} />
            <SelectField label="Area" name="city" value={formData.city} onChange={handleChange} options={cities} />
            <SubmitButton loading={loading} />
          </form>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden bg-[#08156B] border-white border-4 border-dashed  px-6 py-8 text-white rounded-[3rem] mt-6 mx-4">
        <h1 className="text-3xl font-bold text-orange-400 text-center">Book Your Service</h1>

        <div className="grid grid-cols-2  space-y-2 mt-6 text-sm">
          <ContactLink icon={<MdEmail />} text="quadrasecurity@gmail.com" href="mailto:quadrasecurity@gmail.com" />
          <ContactLink icon={<FaInstagram />} text="Instagram" href="https://www.instagram.com/quadra_security" />
          <ContactLink icon={<FaFacebookF />} text="Facebook" href="https://www.facebook.com/profile.php?id=61577161615068" />
          <ContactLink icon={<FaLocationDot />} text="quadrasecurity address" />
        </div>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
          <InputField label="Contact" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone number" isPhone />
          <SelectField label="Service" name="service" value={formData.service} onChange={handleChange} options={services} />
          <SelectField label="Area" name="city" value={formData.city} onChange={handleChange} options={cities} />
          <SubmitButton loading={loading} />
        </form>
      </div>

    </div>
      
  
  );
};
export default ContactForm;
