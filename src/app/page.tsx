import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] gap-1">
      <Link href="/signIn">Sign In</Link>
      <Link href="/signUp">Sign Up</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
