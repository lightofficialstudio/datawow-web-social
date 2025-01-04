import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full w-1/2 bg-[#243831]">
        <h1 className="text-white text-[28px] font-semibold mb-6 text-left mr-[21rem]">
          Sign in
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-2/4 p-3 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 text-black"
        />
        <button
          type="button"
          className="bg-[#49A569] text-white rounded-md w-2/4 p-3 transition font-bold"
        >
          Sign In
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full w-1/2 bg-[#2B5F44]">
        {/* Image : Pen */}
        <Image
          src="/image/login/pen.png"
          width={0}
          height={0}
          className="w-1/3 mb-4"
          alt="logo"
          sizes="100vw"
        />
        {/* Image : a Board */}
        <Image
          src="/image/login/logo.png"
          width={0}
          height={0}
          className="w-1/6 mb-4"
          alt="logo"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
