import { useState } from "react";
import { toast } from "sonner";

const ContactFormm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting request...");

    try {
      const response = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Site visit scheduled successfully!", { id: toastId });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error(result.error || "Something went wrong", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Submission failed", { id: toastId });
    }
  };

  return (
    <form className="w-full max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="NAME"
          required
          className="w-full px-4 py-3 border text-white border-gray-300 rounded focus:outline-none focus:border-yellow-400 text-base transition-colors"
        />
      </div>

      <div className="mb-5">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="EMAIL ADDRESS"
          required
          className="w-full px-4 py-3 text-white border border-gray-300 rounded focus:outline-none focus:border-yellow-400 text-base transition-colors"
        />
      </div>

      <div className="mb-5">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="PHONE NUMBER"
          required
          className="w-full px-4 py-3 text-white border border-gray-300 rounded focus:outline-none focus:border-yellow-400 text-base transition-colors"
        />
      </div>

      <div className="mb-5">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="MESSAGE (OPTIONAL)"
          className="w-full px-4 py-3 text-white border border-gray-300 rounded focus:outline-none focus:border-yellow-400 text-base transition-colors resize-y min-h-[120px]"
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3  bg-blue-800 text-white font-bold rounded cursor-pointer transition-colors hover:bg-blue-900 tracking-wider"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactFormm;
