"use client";

import Image from "next/image";
import Link from "next/link";

import { isActiveLink } from "@/utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { removeToken } from "@/utils/cookies";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle logout
  const handleLogout = () => {
    console.log("Removing token...");
    removeToken(); // Remove token from cookies
    router.push("/login"); // Redirect to login
  };

  const sidebarContent = [
    {
      id: 1,
      icon: "/img/dashboard/sidebar/compass.svg",
      name: "Dashboard",
      routePath: "/dashboard/db-dashboard",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: " Booking History",
      routePath: "/dashboard/db-booking",
    },
    {
      id: 3,
      icon: "/img/dashboard/sidebar/bookmark.svg",
      name: "Wishlist",
      routePath: "/dashboard/db-wishlist",
    },
    {
      id: 4,
      icon: "/img/dashboard/sidebar/gear.svg",
      name: " Settings",
      routePath: "/dashboard/db-settings",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/log-out.svg",
      name: "Logout",
      routePath: "/login",
      onClick: handleLogout, // Correctly assign the function
    },
  ];

  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${
              isActiveLink(item.routePath, pathname) ? "-is-active" : ""
            } sidebar__button `}
          >
            {item.name === "Logout" ? (
              <button
                onClick={item.onClick} // Use the assigned function
                className="d-flex items-center text-15 lh-1 fw-500"
              >
                <Image
                  width={20}
                  height={20}
                  src={item.icon}
                  alt="Logout icon"
                  className="mr-15"
                />
                {item.name}
              </button>
            ) : (
              <Link
                href={item.routePath}
                className="d-flex items-center text-15 lh-1 fw-500"
              >
                <Image
                  width={20}
                  height={20}
                  src={item.icon}
                  alt="icon"
                  className="mr-15"
                />
                {item.name}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
