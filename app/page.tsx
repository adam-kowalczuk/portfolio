export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-[#1b1d1e]">
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[1000px]">
          <h1 className=" text-[50px] text-white font-semibold">
            Adam Kowalczuk
          </h1>
          <p className="text-gray-200 sm:block">
            I'm a software developer based in Alberta, with a background
            building Javascipt-centric web applications.
          </p>
        </div>
      </div>
    </main>
  );
}
