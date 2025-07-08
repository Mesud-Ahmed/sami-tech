// app/components/Navbar.jsx
import { cookies } from "next/headers";
import { decrypt } from "../lib/session";
import NavbarClient from './navbarClient'

export default async function Navbar() {

  const cookieStore = await cookies(); 
  const session = cookieStore.get("session")?.value;
 
  let loggedIn = false;

  if (session) {
    const data = await decrypt(session);
    loggedIn = !!data?.userId;
  }

  return <NavbarClient loggedIn={loggedIn} />;
}
