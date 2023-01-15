import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black  text-white px-10 w-full">
      <div className=" grid grid-cols-2 md:grid-cols-6 max-w-[1240px] mx-auto py-10 px-16">
        <div className="px-3">
          <h1 className="font-bold">SOLUTION</h1>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div className="px-3">
          <h1 className="font-bold">SUPPORT</h1>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
          </ul>
        </div>
        <div className="px-3">
          <h1 className="font-bold">COMPANY</h1>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div className="px-3">
          <h1 className="font-bold">LEGAL</h1>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
          </ul>
        </div>

        <div className="ml-16 col-span-2 pt-8 md:pt-2">
          <h1 className="font-bold text-2xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p className="mt-4 text-left">
            The latest news, articles, and resource sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row py-3">
          <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
          <button className="ml-3 px-2 border rounded-xl">
            Subscribe
          </button>
          </form>
        </div>
      </div>

      <div className="py-[1px] bg-slate-500"></div>
      <div className="flex flex-col sm:flex-row max-w-[1240px] mx-auto justify-between">
        <div className="py-5 text-slate-500">
          <p>2022 Workflow,LLC All right reserved.</p>
        </div>
        <div className="flex  py-8">
          <FaFacebook className=" mx-4 text-white" />
          <FaInstagram className="text-white mx-4" />
          <FaTwitter className="mx-4" />
          <FaGithub className="mx-4" />
          <FaTwitch className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
