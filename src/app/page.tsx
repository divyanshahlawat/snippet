"use client";
import { useAuth } from "@clerk/nextjs";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Link from "next/link";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
    </div>
  );
}
function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}
function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-[#8338ec] p-[6px] rounded-md`}>
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-[#8338ec]`}>Snippet</span>
        <span className="text-slate-600">Saver</span>
      </div>
    </div>
  );
}
function Buttons() {
  const { userId } = useAuth();
  return (
    <div className="max-sm:w-full">
      {userId ? (
        <Link href="/my-notes">
          <button className="max-sm:w-full bg-[#8338ec] p-[8px] px-6 text-sm text-white">
            Access To The App
          </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
          <button
            className={`max-sm:w-full bg-[#8338ec] p-[8px] px-6 text-sm text-white rounded-md`}
          >
            <Link href="/sign-in">Sign In</Link>
          </button>
          <button
            className={`text-sm border border-[#8338ec] text-[#8338ec] rounded-md hover:bg-[#8338ec] hover:text-white p-[8px] px-6`}
          >
            <Link href="/sign-up">Sign Up</Link>
          </button>
        </div>
      )}
    </div>
  );
}
function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center text-black">
        Organize Your Code Snippets
        <span className={`text-[#8338ec]`}> Efficiently!</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and search features, you can quickly find the
        snippet you need, right when you need it. Spend less time searching for
        code and more time writing it.
      </p>
      <button
        className={`block px-9 py-3 text-sm font-medium text-white transition focus:outline-none`}
        type="button"
      >
        {"Let's get started"}
      </button>
    </div>
  );
}