"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const FORM_KEY = process.env.NEXT_PUBLIC_FORM_KEY;
  const [state, handleSubmit] = useForm(`${FORM_KEY}`);

  if (state.succeeded) {
    return (
      <p className="text-gray-200 text-center sm:text-left">
        Thanks for reaching out!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-center sm:text-left">
      <div className="mb-5">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-gray-200 border-0 rounded"
        />
      </div>
      <div className="mb-5">
        <input
          type="email"
          placeholder="Email"
          name="_replyto"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-gray-200 border-0 rounded"
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div className="mb-10">
        <textarea
          placeholder="Message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-gray-200 border-0 rounded"
        />
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="px-6 py-3 mb-5 text-sm font-bold text-gray-200 uppercase transition-all duration-150 ease-linear bg-red-800 hover:bg-red-700 rounded">
        Send
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default ContactForm;
