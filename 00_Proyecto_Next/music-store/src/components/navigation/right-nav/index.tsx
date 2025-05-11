"use client";
import { IconAvatar, IconCart } from "@/assets/icons";
import { useSharedState } from "@/context/useSharedState";
import { logOut } from "@/actions/authActions";
import Link from "next/link";
import type { IUser } from "@/types";

import { useSession } from "next-auth/react";
import { londrinaSketch, alatsi } from "@/app/fonts";

export default function RightNav({ user }: { user: IUser }) {
  const { setLanguage, language } = useSharedState();

  const session = useSession();

  console.log("session", session);

  return (
    <div className={`w-1/3 ${alatsi.className}`}>
      <div className="w-full flex justify-end items-center gap-8">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center uppercase">
            {user ? (
              user.username[0]
            ) : (
              <IconAvatar className="w-5 h-5 text-gray-600" />
            )}
          </div>
          {user ? (
            <button
              className="text-gray-500 hover:text-gray-700 text-sm"
              onClick={async () => await logOut()}
            >
              Logout
            </button>
          ) : (
            <Link
              className="text-gray-500 hover:text-gray-700 text-sm"
              href="/login"
            >
              Login
            </Link>
          )}
        </div>
        <IconCart className="w-6 h-6 text-gray-600" />
        <div
          className={`${
            language === "en" ? "text-red-500" : "text-gray-400 cursor-pointer"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </div>
        <div
          className={`${
            language === "es" ? "text-red-500" : "text-gray-400 cursor-pointer"
          } `}
          onClick={() => setLanguage("es")}
        >
          ES
        </div>
      </div>
    </div>
  );
}
