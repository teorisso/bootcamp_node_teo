import { auth } from "@/auth";

export default async function Admin() {
  const session = await auth();
  const user = session?.user ?? null;
  if (!user || user.role !== "comprador") {
    return <div>Unauthorized</div>;
  }

  return <div>This is the Admin route</div>;
}
