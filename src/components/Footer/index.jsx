import React from "react";
import Button from "../common/Button";

export default function Footer() {
  const listMenu = ["Home", "Blog", "About Us", "Contact Us", "Privacy Policy"];
  return (
    <div className="container-xl w-full">
      <header>
        <section className="flex px-[80px] py-[59px] flex-wrap text-white items-center bg-slate-800 justify-between">
          <div className="pl-10 ">
            <h1 className="text-3xl font-mono">Finesweet</h1>
          </div>
          <div className="hidden w-full md:flex md:items-center md:w-auto">
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
            </ul>
          </div>
          <div className="grid grid-cols-12 bg-slate-600">
            <div className="col-span-6 p-14">
              <h1 className="font-bold text-3xl">
                Subscribe to our news letter to get latest updates and news
              </h1>
            </div>
            <div className="col-span-6 self-center">
              <div className="justify-center  text-center">
                <input
                  className="mr-3 border-slate-400 bg-slate-600 appearance-none border w-72 py-2 px-3"
                  id="email"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <Button variant="warning" className="px-10 py-3">
                  Subcribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full pt-8">
            <div className="text-slate-400">
              <p>Finstreet 118 2561 Fintown</p>
              <p>Hello@finsweet.com 020 7993 2905</p>
            </div>
            <div className="text-slate-500">
              <h3>tested</h3>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
