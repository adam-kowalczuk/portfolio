export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="pb-[100px] flex flex-col gap-5 max-w-[80%] xl:max-w-[60%] text-center sm:text-left">
          <h1 className="text-[36px] sm:text-[48px] text-gray-200 font-semibold">
            Hello!
          </h1>
          <p className="text-gray-200 sm:block">
            I'm <span className="font-bold">Adam Kowalczuk</span>, a full-stack
            developer currently based in{" "}
            <span className="font-bold">Alberta, Canada</span>. I recently left
            the world of linguistic research to undertake a new adventure in
            information technology.
          </p>
          <p className="text-gray-200 hidden sm:block">
            My experience thus far has been in building robust web applications
            primarily with <span className="font-bold">JavaScript</span>. As of
            late I&apos;m partial to working with{" "}
            <span className="font-bold">React</span> frameworks.
          </p>
          <p className="text-gray-200 sm:block">
            I&apos;m currently looking for my next role (you can check out my
            resume{" "}
            <a href="https://flowcv.com/resume/n8b7s7ksk0" target="_blank">
              <span className="font-bold hover:text-red-800">here</span>
            </a>
            ), so please don&apos;t hesitate to reach out if you&apos;re
            interested in working together.
          </p>
        </div>
      </div>
    </main>
  );
}
