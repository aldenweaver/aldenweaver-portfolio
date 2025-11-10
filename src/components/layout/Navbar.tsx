import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt={`${config.html.title} logo`} className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } cursor-pointer text-[18px] font-medium hover:text-white`}
                aria-current={active === nav.id ? "page" : undefined}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            aria-controls="mobile-menu"
            className="h-[44px] w-[44px] p-2 border-0 bg-transparent cursor-pointer flex items-center justify-center"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              aria-hidden="true"
              className="h-[28px] w-[28px] object-contain"
            />
          </button>

          <div
            id="mobile-menu"
            role="menu"
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`font-poppins cursor-pointer text-[16px] font-medium ${
                      active === nav.id ? "text-white" : "text-secondary"
                    }`}
                    aria-current={active === nav.id ? "page" : undefined}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
