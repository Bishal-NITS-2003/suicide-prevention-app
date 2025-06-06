import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] gap-1">
      <h1 className="text-2xl">Welcome To My App</h1>
      <Link className="text-blue-400" href="/signIn">
        Sign In
      </Link>
      <Link className="text-blue-400" href="/signUp">
        Sign Up
      </Link>
      <Link className="text-blue-400" href="/dashboard">
        Dashboard
      </Link>
    </div>
  );
}
