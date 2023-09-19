import Link from "next/link";

// import "./Navigation.css";

export function Navigation() {
  return (
    <nav className="flex gap-2 absolute top-2 right-4 ">
      <Link className="text-to-highlight" href="/">
        Home
      </Link>
      <Link className="text-to-highlight" href="/">
        Shop
      </Link>
      <Link className="text-to-highlight" href="/">
        Find Us
      </Link>
    </nav>
  );
}
