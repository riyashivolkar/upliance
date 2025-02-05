import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique ID generation
import { DataFormProps } from "../types";

export default function DataForm({ formData }: DataFormProps) {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(uuidv4());
  }, []);
  return (
    <form className="w-full max-w-2xl p-5 py-6  bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="space-y-12">
        <div className=" border-gray-900/10 pb-4 ">
          <div className=" grid grid-cols-1  gap-y-8 sm:grid-cols-1">
            <div className="sm:col-span-4">
              <label
                htmlFor="json"
                className="block text-sm text-start font-medium text-gray-900"
              >
                Value (JSON)
              </label>
              <div className="mt-2">
                <textarea
                  id="json"
                  name="json"
                  value={JSON.stringify(
                    {
                      Address: formData.address,
                      Email: formData.email,
                      Contact: `${formData.countryCode} ${formData.contactNumber}`,
                    },
                    null,
                    2 // Indentation for better readability
                  )}
                  readOnly
                  className="block w-full rounded-md  bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm font-mono resize-none"
                  rows={5} // Adjust the height as needed
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm text-start font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="user-id"
                className="block text-sm text-start font-medium text-gray-900"
              >
                User ID
              </label>
              <div className="mt-2">
                <input
                  id="user-id"
                  name="user-id"
                  type="text"
                  value={userId} // Set input value as generated ID
                  readOnly // Make it non-editable
                  className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
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
