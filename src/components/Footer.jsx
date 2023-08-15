import React from "react";
import { footerLinks } from "../constants";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const FooterLinks = ({ links, title }) => {
  console.log(title);
  console.log(links);
  return (
    <div className="mr-5">
      <h2 className="my-4 text-white text-[2rem] sm:text-[2.5rem] whitespace-nowrap">
        {title}
      </h2>
      <div className="flex flex-col">
        {links.map((link) => {
          return (
            <a
              href={link.link}
              className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px]"
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <section className="flex flex-col xs:flex-row sm:flex-wrap sm:justify-center sm:items-center items-start border-b-2 pb-8 border-slate-500">
        <div className="mr-[3rem] sm:mb-6 flex flex-col items-start justify-center flex-[0.5] ">
          <img src={logo} alt="bankyEasy" className="w-[120px] h-[30px]" />
          <p className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[240px] mt-5">
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-col xs:flex-row  justify-between items-start flex-1">
          {footerLinks.map((link) => {
            console.log(link);
            return <FooterLinks key={link.title} {...link} />;
          })}
        </div>
      </section>
      <section className="flex flex-col sm:flex-row items-start justify-center sm:justify-between sm:items-center gap-6 py-6">
        <p className="text-slate-400">
          copy &copy; <span>2021 HooBank. All Rights Reserved.</span>
        </p>
        <div className="flex gap-3 ">
          {socialMedia.map((social) => {
            return (
              <a href={social.link}>
                <img src={social.icon} alt={social.link} />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Footer;
