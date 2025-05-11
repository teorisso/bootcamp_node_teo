import Image from "next/image";
import Link from "next/link";
import SearchInput from "../search-input";
import RightNav from "./right-nav";
import { auth } from "@/auth";
import { IUser } from "@/types";

interface Category {
  name: string;
}

export default async function Navigation() {
  const result = await fetch(`${process.env.API_HOST}/categories`);
  const categories = (await result.json()) as Category[];
  const session = await auth();
  const user = (session?.user as IUser) ?? null;

  return (
    <nav className="w-full flex flex-col items-center">
      <div className="w-[1200px] flex items-center justify-between py-6">
        <Link href="/" className="w-1/3">
          <Image src="/logo.png" alt="company logo" width={200} height={10} />
        </Link>
        <div className="w-1/3 flex justify-center">
          <SearchInput onChange={() => {}} />
        </div>
        <RightNav user={user} />
      </div>
      <div className="bg-red-400 w-full flex justify-center">
        <ul className="flex justify-center gap-6 text-sm p-2 text-white">
          {categories.map(({ name }) => (
            <li
              className="cursor-pointer hover:text-red-200 capitalize"
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
