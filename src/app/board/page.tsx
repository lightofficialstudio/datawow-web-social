export default function Page() {
  return (
    <div className="flex h-screen flex-col md:flex-row bg-[#BBC2C0]">
      {/* Menu Section */}
      <div className="flex flex-col justify-start item-center w-full w-1/2">
        {/* Home */}
        <button type="button">Home</button>
        {/* Our Blog */}
        <button type="button">Our Blog</button>
      </div>
      {/* Content Section */}
      <div className="flex flex-col justify-center item-center w-full w-1/2">
        {/* Search */}
        <input type="text" className="w/24" />
      </div>
    </div>
  );
}
