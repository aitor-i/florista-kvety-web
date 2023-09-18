import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex gap-2 absolute top-2 right-4 ">
      <Link href="/">Home</Link>
      <Link href="/">Shop</Link>
      <Link href="/">Find Us</Link>
    </nav>
  );
}
