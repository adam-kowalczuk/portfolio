export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#1b1d1e]">
        <div className="pb-[100px] flex flex-col gap-5 max-w-[80%] xl:max-w-[60%] text-center sm:text-left">
          <h1 className="text-[48px] text-gray-200 font-semibold">Hello!</h1>
          <p className="text-gray-200 sm:block">
            I'm <span className="font-bold">Adam Kowalczuk</span>, a full-stack
            developer currently based in Alberta, Canada. I recently left the
            world of linguistic research to undertake a new adventure in
            information technology.
          </p>
          <p className="text-gray-200 sm:block">
            My experience thus far has been in building robust web applications
            primarily with Javascript. As of late I'm partial to working with
            React frameworks.
          </p>
          <p className="text-gray-200 sm:block">
            I'm currently looking for my next role, so have a look around and
            don't hesitate to reach out if you're interested in working
            together.
          </p>
        </div>
      </div>
    </main>
  );
}
