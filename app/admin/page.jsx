
import { cookies } from "next/headers";
import { decrypt } from "../lib/session";
import { redirect } from "next/navigation";
import ClientAdminPanel from "../components/ClientAdminPanel";

export default async function AdminPanel() {
  const cookie = cookies().get("session")?.value;
  if (!cookie) redirect("/login");

  const session = await decrypt(cookie);
  if (!session || !session.userId) {
    redirect("/login");
  }

  return (
    <ClientAdminPanel />
  );
}
