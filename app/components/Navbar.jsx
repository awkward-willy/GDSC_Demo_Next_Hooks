import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" h-[12vh] flex justify-center items-center pt-10">
      <Link
        href="/"
        className="m-4 transition duration-500 hover:underline underline-offset-4"
      >
        Home
      </Link>
      <Link href="/about" className="m-4">
        About
      </Link>
      <Link href="/experience" className="m-4">
        Experience
      </Link>
      <Link href="/colorgame" className="m-4">
        Color Game
      </Link>
      <Link href="/todo" className="m-4">
        Todo List
      </Link>
    </div>
  );
};

export default Navbar;
