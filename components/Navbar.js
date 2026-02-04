import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const scrollableRoutes = [
      "/about",
      "/music",
      "/video",
      "/live-shows",
      "/workshops",
      "/contact",
    ];
    
    const currentPath = router.asPath.split("?") [0];
    const shouldScroll = scrollableRoutes.includes(currentPath);
  
    document.body.style.overflow = shouldScroll ? "auto" : "hidden";
    document.documentElement.style.overflow = shouldScroll ? "auto" : "hidden";
  
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [router.asPath]);

  const links = [
    { label: "Rita Silva", href: "/" }, // logo/home
    { label: "About", href: "/about" },
    { label: "Music", href: "/music" },
    { label: "Video", href: "/video" },
    { label: "Live Shows", href: "/live-shows" },
    { label: "Workshops", href: "/workshops" },
    // { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  // router.pathname is clean for static pages; router.asPath also works.
  const isActive = (href) => router.pathname === href;

  // Close mobile menu on route change 
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <nav className="text-brand text-xl fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Home */}
        <Link
          href="/"
          aria-current={isActive("/") ? "page" : undefined}
          className={`hover:text-[#949492] ${isActive("/") ? "font-bold" : ""}`}
        >
          Rita Silva
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-brand font-medium">
          {links.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`hover:text-[#949492] ${
                  isActive(item.href) ? "font-bold" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger menu*/}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen((v) => !v)}
          className="text-brand focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/90 space-y-4 py-4">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-brand text-lg hover:text-[#949492] ${
                  isActive(item.href) ? "font-bold" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

