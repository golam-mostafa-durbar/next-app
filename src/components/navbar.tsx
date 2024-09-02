import Link from "next/link";

const navlinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Posts",
    path: "/posts",
  },
  {
    label: "Images",
    path: "/images",
  },
  {
    label: "Videos",
    path: "/videos",
  },
  {
    label: "File Upload",
    path: "/file-upload",
  },
  {
    label: "Login",
    path: "/login",
  },
];

const Navbar = () => {
  return (
    <div className="w-full bg-slate-500 text-white py-5">
      <ul className="flex justify-center gap-x-10">
        {navlinks.map((nav, index) => (
          <li key={index + 1} className="hover:underline">
            <Link href={nav.path}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;