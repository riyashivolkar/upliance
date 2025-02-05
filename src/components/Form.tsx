import { useEffect, useState } from "react";
import { FormProps } from "../types";

export default function Form({ formData, setFormData }: FormProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [setFormData]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    setShowPopup(true);
  }, [formData]);

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (showPopup) {
      event.preventDefault();
      event.returnValue = "You have unsaved changes.";
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [showPopup]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setShowPopup(false); // Reset popup state after saving
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl p-5 py-6 bg-white rounded-lg shadow-lg border border-gray-200"
    >
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-4">
          <div className="grid grid-cols-1 gap-y-8 sm:gap-y-[58px] sm:grid-cols-1">
            <div className="sm:col-span-4">
              <label
                htmlFor="street-address"
                className="block text-sm/6 text-start font-medium text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  id="street-address"
                  name="street-address"
                  type="text"
                  placeholder="Enter your address"
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 text-start font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your Email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="contact-number"
                className="block text-sm text-start font-medium text-gray-900"
              >
                Contact Number
              </label>
              <div className="mt-2 flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData({ ...formData, countryCode: e.target.value })
                  }
                  name="country-code"
                  className="w-20 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 focus:outline-indigo-600"
                >
                  <option value="+91">+91</option>
                </select>
                <input
                  id="contact-number"
                  name="contact-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="px-8 cursor-pointer py-2 mx-1 bg-gray-800 text-white hover:bg-gray-700 rounded-lg shadow transition-all text-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
}
