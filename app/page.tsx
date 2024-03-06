export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#1b1d1e]">
        <div className="pb-[100px] flex flex-col gap-5 max-w-[60%]">
          <h1 className="text-[45px] text-gray-200 font-semibold">Hello!</h1>
          <p className="text-gray-200 sm:block">
            I'm <span className="font-bold">Adam Kowalczuk</span>, a full-stack
            developer currently based in Alberta, Canada. I recently left the
            world of linguistic research to undertake a new adventure in
            information technology. My experience thus far has been in building
            robust web applications with Javascript. As of late I am partial to
            working with React-based frameworks.
          </p>
          <p className="text-gray-200 sm:block">
            I am currently looking for my next role, so have a look around and
            please reach out if you're interested in working with me.
          </p>
        </div>
      </div>
    </main>
  );
}
