import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-[#1b1d1e] flex items-center justify-center">
      <div className="w-[80%] xl:w-[60%] flex flex-col items-center sm:items-start">
        <div className="flex flex-col gap-4 w-[100%] text-center sm:text-left">
          <h1 className="font-semibold text-gray-200 text-[48px]">Contact</h1>
        </div>
        <div className="w-[70%] sm:w-[40%] mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
