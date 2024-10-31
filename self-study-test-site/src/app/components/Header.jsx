import Link from "next/link";
import "./header.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="headerContainer">
      <nav className="navBar">
        <Link href="/firstpage">First page</Link> |
        <Link href="/buttonPage"> Mixies Page</Link>
      </nav>
    </div>
  );
}
