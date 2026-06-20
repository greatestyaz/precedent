export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Starway Vision. All rights reserved.
      </p>
    </div>
  );
}
