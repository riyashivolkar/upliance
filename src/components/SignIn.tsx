import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function SignIn({ onClose }: { onClose: () => void }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  return (
    <section className="fixed inset-0 z-20 overflow-hidden bg-white flex justify-center items-center p-5 sm:p-8">
      <div className="w-full max-w-md sm:mb-0 mb-20">
        <button
          onClick={onClose}
          className=" absolute top-8   right-8 cursor-pointer sm:right-68 p-2 text-gray-600 hover:text-gray-900"
        >
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        </button>
        <h3 className="mb-2 text-center text-2xl font-bold text-blue-gray-700">
          Sign In
        </h3>
        <p className="mb-8 text-center text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </p>
        <form className="w-full text-left">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:opacity-100"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="mb-2 block font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              type={passwordShown ? "text" : "password"}
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:opacity-100"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3"
            >
              {passwordShown ? (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg mt-6"
          >
            Sign In
          </button>
          <div className="mt-4 flex justify-end">
            <a
              href="#"
              className="text-blue-gray-700 font-medium hover:text-blue-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg mt-6 flex items-center justify-center gap-2"
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6"
            />
            Sign in with Google
          </button>
          <p className="mt-4 text-gray-600 font-normal text-center">
            Not registered?{" "}
            <a
              href="#"
              className="font-medium text-gray-900 hover:text-blue-500"
            >
              Create account
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
