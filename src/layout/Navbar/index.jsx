import Button from "@/components/common/Button";
import React from "react";
export default function Navbar() {
  const listMenu = ["Home", "Blog", "About Us", "Contact Us"];
  return (
    <div className="container-xl">
      <header>
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-4 text-lg text-white bg-slate-800">
          <div className="pl-10">
            <h1 className="text-3xl font-mono">Finsweet</h1>
          </div>
          <div className="hidden w-full md:flex md:items-center md:w-auto pr-10">
            <ul className="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
              {listMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="md:p-4 py-2 block hover:text-slate-200"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
              <li>
                <Button variant="white" className="py-3 px-7 mt-1">
                  Subscribe
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
