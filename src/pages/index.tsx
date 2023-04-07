import Image from "next/image";
import { Inter } from "next/font/google";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <main className="text-black bg-cyan-50 flex min-h-screen flex-col items-center p-24 justify-between">
      <div className="justify-self-center text-cyan-900	text-xl font-medium flex flex-col items-center">
        <Image
          src="/construction.gif"
          alt="construction gif"
          width={200}
          height={200}
        />
        <p>making something new</p>
      </div>
      <div className="flex flex-row justify-between w-20">
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
