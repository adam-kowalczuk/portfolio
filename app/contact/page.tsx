import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-[#1b1d1e] flex items-center justify-center ">
      <div className="h-[60%] w-[80%] xl:w-[60%] relative rounded-lg border border-white ">
        <div className="flex flex-col gap-4 w-[100%] text-center sm:text-left">
          <h1 className="font-semibold text-gray-200 text-[48px]">Contact</h1>
          <p className="text-gray-200">
            This site was created using NextJS, TypeScript, and Tailwind CSS. It
            is currently deployed via Vercel.
          </p>
        </div>
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
