import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { Button } from "../ui/button";
import { auth, signIn } from "@/auth";
import UserButton from "./UserButton";
import MobileNav from "./MobileNav";


const Header = async() => {
     const session = await auth()
     const user = session?.user

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-b flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="flex w-32 justify-end gap-3">
          {/* <Button className="rounded-full w-24">
            <Link href="api/auth/signin">Login</Link>
          </Button> */}
          {user ? <UserButton user={user} /> : <SignInButton />}
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

    function SignInButton(){
      return(
        <form action={async () =>{
          'use server'
          await signIn()
        }}>
          <Button className="rounded-full w-24" type='submit'>Sign in</Button>
        </form>
      )
    }

export default Header;
