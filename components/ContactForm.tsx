import React from "react";

const ContactForm = () => {
  return (
    <form className="text-center sm:text-left">
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
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-gray-200 border-0 rounded"
        />
      </div>
      <div className="mb-10">
        <textarea
          placeholder="Message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-gray-200 border-0 rounded"
        />
      </div>
      <button className="px-6 py-3 mb-5 text-sm font-bold text-gray-200 uppercase transition-all duration-150 ease-linear bg-red-800 hover:bg-red-700 rounded">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
