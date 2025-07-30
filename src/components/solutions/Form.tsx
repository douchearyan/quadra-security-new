import { useState } from "react";
import { toast } from "sonner";

interface MiniSiteVisitFormProps {
  solutionType?: string; // e.g., "home-security", "office-setup"
}

export default function SolutionsSiteVisitForm({
  solutionType,
}: MiniSiteVisitFormProps) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    // Name validation: Only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name.trim())) {
      toast.error("Name should contain only letters and spaces.");
      return;
    }

    // Phone validation: starts with 7/8/9 and exactly 10 digits
    const phoneRegex = /^[7-9][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must start with 7/8/9 and be 10 digits.");
      return;
    }


    const toastId = toast.loading("Submitting request...");
    

    try {
      const payload = {
        name,
        email,
        phone: `+91${phone}`,
      };
      const response = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Site visit scheduled successfully!", { id: toastId });
        setFormData({ name: "", phone: "", email: "" });
      } else {
        toast.error(result.error || "Something went wrong", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Submission failed", { id: toastId });
    }
  };
const getHeading = (type?: string) => {
  switch (type) {
    case "apartment-real-estate":
      return "Secure Your Apartment & Property";
    case "retail":
      return "Protect Your Retail Space";
    case "campus":
      return "Ensure Campus-Wide Security";
    case "hotels-resorts":
      return "Provide a Safe Guest Experience";
    case "bank":
      return "Safeguard Your Financial Institution";
    default:
      return "Book a Visit";
  }
};
  return (
    <div className="text-black p-4  max-w-md mx-auto shadow-md border">
      <h2 className="text-lg font-semibold text-center mb-4">
        {getHeading(solutionType)}
      </h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded border bg-[#e5e7eb] border-white text-sm placeholder:text-gray-600"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-[#e5e7eb] border border-white text-sm placeholder:text-gray-600"
          onChange={handleChange}
        />
       <div className="relative">
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm font-semibold pointer-events-none">
    +91
  </span>
  <input
    name="phone"
    type="tel"
    maxLength={10}
    pattern="[0-9]{10}"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={handleChange}
    className="pl-12 p-2 w-full rounded bg-[#e5e7eb] border border-white text-sm placeholder:text-gray-600"
    required
  />
</div>

        <button
          type="submit"
          className="bg-[#2b388f] hover:bg-[#2b388f]/80 transition text-white py-2 rounded mt-2 text-sm font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
