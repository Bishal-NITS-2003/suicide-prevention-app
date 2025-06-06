export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
