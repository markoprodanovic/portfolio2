import Image from "next/image";
import { Inter } from "next/font/google";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <main className="text-black bg-white flex min-h-screen flex-col items-center p-15 justify-between">
      <div className="text-slate-800	text-lg text-center font-normal flex flex-col items-center mt-40">
        <Image
          src="/construction-2.gif"
          alt="construction gif"
          width={80}
          height={80}
        />
        <p>making something new</p>
      </div>
      <div className="flex flex-row justify-between w-20 mb-5">
        <a
          href="https://github.com/markoprodanovic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/mprodanovic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>
      </div>
    </main>
  );
}
