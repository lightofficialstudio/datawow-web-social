import Image from "next/image";

export default function BoardImage() {
  return (
    <div className="flex flex-col justify-center items-center w-1/2 bg-[#245436]">
      <Image
        src="/image/login/pen.png"
        alt="Board illustration"
        className="w-1/2 mb-4"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Image
        src="/image/login/logo.png"
        alt="Board illustration"
        className="w-1/6 mb-4"
        width={0}
        height={0}
        sizes="100vw"
      />
    </div>
  );
}
