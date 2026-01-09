import React, { useState } from "react";

import bgVideo from "../src/assets/2025Framer.mp4";
import "./index.css";

type ButtonProps = {
  name: string;
  onClick: (event: React.FormEvent) => void;
  disabled?: boolean;
};

type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      className="group relative inline-flex h-14 items-center border-neutral-700 hover:border-neutral-200 border-2 border-dashed justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 text-neutral-50 hover:text-black duration-500 transition-colors hover:bg-neutral-800 focus:outline-none "
      onClick={onClick}
    >
      <span className="z-10 pr-2 font-Satoshi-Bold">{name}</span>
      <div className="absolute right-1 inline-flex h-11 w-12 items-center justify-end rounded-full bg-[#E8F0FE] transition-[width] group-hover:w-[calc(100%-8px)] duration-500 animate-pulse">
        <div className="mr-3.5 flex items-center justify-center">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
          >
            <path
              d="M7.5 2C7.77614 2 8 2.22386 8 2.5V11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929V2.5C7 2.22386 7.22386 2 7.5 2Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeWidth="0.5"
              stroke="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
};

const ButtonSecondary = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-6 text-neutral-200 duration-500 border-neutral-700 hover:border-neutral-200 border-2 border-dashed"
      onClick={onClick}
    >
      <div className="translate-x-0 opacity-100 transition md:group-hover:-translate-x-[150%] md:group-hover:opacity-0 font-Satoshi-Bold">
        {name}
      </div>
      <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 hidden md:block">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.357 20.1758C15.7129 19.6278 15.2374 19 14.584 19H9.41595C8.76251 19 8.28703 19.6278 8.64294 20.1758C9.35604 21.2738 10.5932 22 12 22C13.4067 22 14.6439 21.2738 15.357 20.1758Z"
            fill="white"
          />
          <path
            d="M20.5858 17H3.40408C2.62863 17 2 16.3714 2 15.5959C2 15.2151 2.15471 14.8506 2.42864 14.586L3.45736 13.5924C3.84919 13.2139 4.06969 12.692 4.06791 12.1473L4.06086 9.99568C4.04641 5.58403 7.61873 2 12.0304 2C16.4319 2 20 5.5681 20 9.96958L20 12.1716C20 12.702 20.2107 13.2107 20.5858 13.5858L21.5858 14.5858C21.851 14.851 22 15.2107 22 15.5858C22 16.3668 21.3668 17 20.5858 17Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
};

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  error,
  name,
  onBlur,
}: InputProps) => {
  return (
    <div className="w-full max-w-md">
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={`w-full px-4 py-3 rounded-[20px] bg-[#E8F0FE] text-black placeholder-neutral-400 focus:outline-none font-Satoshi-Medium ${
          error
            ? "focus:ring-2 focus:ring-red-500 border border-red-500"
            : "focus:ring-2 focus:ring-blue-500"
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 text-left font-Satoshi-Medium">
          {error}
        </p>
      )}
    </div>
  );
};

// Validation helper functions
const validateEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return "Email is required";
  }
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

const validateName = (name: string): string => {
  if (!name.trim()) {
    return "Name is required";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters long";
  }
  return "";
};

const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [touched, setTouched] = useState({ name: false, email: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate field on change
    if (touched[name as keyof typeof touched]) {
      if (name === "name") {
        setErrors((prev) => ({ ...prev, name: validateName(value) }));
      } else if (name === "email") {
        setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
      }
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate field on blur
    if (name === "name") {
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    } else if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const validateForm = (): boolean => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    setErrors({ name: nameError, email: emailError });
    return !nameError && !emailError;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setTouched({ name: true, email: true });

    if (validateForm()) {
      setIsSubmitting(true);

      // Submit to Formspree
      const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (!FORMSPREE_ENDPOINT) {
        console.error(
          "Form endpoint not configured. Please add VITE_FORMSPREE_ENDPOINT to your .env file."
        );
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted:", formData);
          setSubmitSuccess(true);
          setFormData({ name: "", email: "" });
          setTouched({ name: false, email: false });
          setErrors({ name: "", email: "" });
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Error submitting form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section - Full Screen Page 1 */}
      <section className="snap-start h-screen relative flex flex-col items-center justify-center">
        <div className="fixed inset-0 -z-10">
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="text-white text-center space-y-10 lg:space-y-15 px-4">
          <div>
            <h1 className="font-Satoshi-Bold text-7xl lg:text-9xl">
              builtelo.
            </h1>
            <p className="text-xl">We build technological innovation</p>
          </div>
          <div className="max-w-2xl text-xl font-Satoshi-Medium">
            <h1>
              Something is Cooking <span>👨‍🍳</span>
            </h1>
            <p>We're building something amazing together. Watch this space!</p>
          </div>

          <div>
            <Button
              name="Scroll Down"
              onClick={() =>
                document
                  .getElementById("form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </section>

      {/* Form Section - Full Screen Page 2 */}
      <section
        id="form"
        className="snap-start h-screen flex flex-col items-center justify-center text-white p-10 font-Satoshi space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-Satoshi-Bold">Stay Updated</h1>
          <p>Get notified on launch and future updates!</p>
        </div>
        <p className="text-center">
          Kindly leave us with your contact details, and we promise not to spam
          you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <Input
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            error={touched.name ? errors.name : ""}
          />
          <Input
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            error={touched.email ? errors.email : ""}
          />
          <div className="pt-4 items-center justify-center flex">
            <ButtonSecondary
              name={isSubmitting ? "Submitting" : "Notify Me"}
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
          </div>
        </form>

        {submitSuccess && (
          <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-lg">
            <p className="text-green-400 font-Satoshi-Medium">
              ✓ You're on the list! We'll notify you when we launch.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
