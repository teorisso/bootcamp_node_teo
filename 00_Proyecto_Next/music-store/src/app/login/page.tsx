import Image from "next/image";
import LoginForm from "./login-form";

export default async function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="h-full w-1/2 bg-gray-200 flex items-center justify-center">
        <Image
          src="/logo-login.png"
          alt="logo"
          height={150}
          width={150}
          objectFit="contain"
        />
      </div>
      <div className="w-1/2 h-full bg-gray-100 flex items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
