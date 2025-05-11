"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full h-32 bg-red-400">
      <div className="w-[1200px] flex justify-between items-center">
        <Image
          src="/logo-footer.png"
          alt="footer logo"
          width={160}
          height={10}
        />

        <div className="text-sm text-white flex flex-col gap-1">
          <p>CopyRight 2024</p>
          <p
            className="cursor-pointer hover:text-red-200"
            onClick={() => {
              window.open("https://devlights.com", "_blank");
            }}
          >
            Devlights.com
          </p>
        </div>
      </div>
    </footer>
  );
}
