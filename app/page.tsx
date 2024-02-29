import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className=" text-[50px] text-white font-semibold">
            Make anything possible with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            eaque voluptas minima reiciendis quia obcaecati expedita, aperiam
            maxime aliquam error nobis odit laudantium. Maiores dicta delectus
            esse odit fugiat! Provident.
          </p>
        </div>
      </div>
    </main>
  );
}
