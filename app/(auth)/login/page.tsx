import React from "react";

const Page = () => {
    return (
        <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-3xl bg-[#111827] border border-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.75)] px-6 py-8 sm:px-8 sm:py-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-white text-xl sm:text-2xl font-semibold">
                        Sign in to Learning Management
                    </h1>
                    <h2 className="mt-2 text-sm text-slate-400">
                        Welcome back! Please sign in to continue
                    </h2>
                </div>

                {/* Social buttons */}
                <div className="flex gap-3 mb-6">
                    <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#111827] px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/5 transition">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-xs">
              {/* GitHub icon placeholder */}
                G
            </span>
                        <span>GitHub</span>
                    </button>

                    <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#111827] px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/5 transition">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-xs">
              {/* Google icon placeholder */}
                G
            </span>
                        <span>Google</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="flex-1 h-px bg-white/10" />
                    <span className="text-xs text-slate-500">or</span>
                    <span className="flex-1 h-px bg-white/10" />
                </div>

                {/* Email + button */}
                <form className="space-y-4">
                    <div className="space-y-1">
                        <label
                            htmlFor="email"
                            className="block text-sm text-slate-200"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full rounded-md border border-white/10 bg-[#020617] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/60 transition"
                            placeholder="you@example.com"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 py-2.5 text-sm font-medium text-white shadow-[0_16px_45px_rgba(99,102,241,0.7)] hover:bg-indigo-600 transition"
                    >
                        <span>Continue</span>
                        <span className="text-xs">▸</span>
                    </button>
                </form>

                {/* Sign up text */}
                <p className="mt-5 text-sm text-center text-slate-400">
                    Don’t have an account?
                    <button
                        type="button"
                        className="ml-1 font-medium text-indigo-400 hover:text-indigo-300"
                    >
                        Sign up
                    </button>
                </p>

                {/* Bottom section */}
                <div className="mt-8 pt-4 border-t border-white/10 text-center space-y-1">
                    <p className="text-xs text-slate-500">
                        Secured by{" "}
                        <span className="font-semibold text-slate-200">clerk</span>
                    </p>
                    <p className="text-xs font-medium text-orange-400">
                        Development mode
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
