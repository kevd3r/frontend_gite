"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import profilePic from "../public/images/logo/logo.svg";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");

  // useEffect hook to update currentPath once the router is ready and pathname is available.
  useEffect(() => {
    // Check if the router is fully ready before accessing its properties.
    // This is crucial to prevent the "NextRouter was not mounted" error.
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const menu = [
    {
      title: "Accueil",
      url: "/",
    },
    {
      title: "Hébergement",
      url: "/housing",
    },
    {
      title: "Réservations",
      url: "/booking",
    },
    {
      title: "Soins bien-être",
      url: "/wellness",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  const headerBgClass = currentPath === "/" ? "bg-transparent" : "bg-[#0C1824]";
  // Determine the text color for the menu links based on the background
  const textColorClass = "text-gray-300";
  const hoverTextColorClass = "hover:text-white";

  return (
    <header
      className={`w-full h-[10vh] flex justify-between items-center px-[5vw] z-10 transition-colors duration-300 ${headerBgClass}`}
    >
      <Link href={"/"}>
        <Image src={profilePic} alt="Logo" width={60} height={60} />
      </Link>
      
      <ul className="flex gap-4">
        {menu.map((item) => (
          <Link href={item.url} key={item.title}>
            <li
              className={`${textColorClass} ${hoverTextColorClass} font-bold transition-colors duration-200`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
