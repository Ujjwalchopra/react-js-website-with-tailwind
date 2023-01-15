import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";

import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportimg from "../assets/support.jpg";

const Support = () => {
  return (
    <div  name= "support" className="w-full mt-32">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportimg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative ">
        <div className="px-4 py-12">
          <h3 className="text-3xl uppercase text-center">Support</h3>
          <h2 className="text-5xl font-bold text-center my-4">
            Finding the right team
          </h2>
          <p className="text-2xl text-center ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly the
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-4 gap-y-16 px-4 pt-12 sm:pt-20 text-black  ">
        <div className="bg-white relative px-5 rounded-xl shadow-2xl ">
          <div className="p-8">
            <PhoneIcon className="w-16 bg-blue-500 text-white p-4 rounded-lg mt-[-4rem]" />
            <h1 className="font-bold text-3xl py-3">Sales</h1>
            <p className="pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected
            </p>
          </div>
          <div>
            <p className="flex  items-center text-indigo-600 pl-8 py-4">
              contact Us <ArrowSmRightIcon className="w-5 ml-2 text-blue-600" />
            </p>
          </div>
        </div>
        <div className="bg-white relative px-5 rounded-xl shadow-2xl ">
          <div className="p-8">
            <SupportIcon className="w-16 bg-blue-500 text-white p-4 rounded-lg mt-[-4rem]" />
            <h1 className="font-bold text-3xl py-3">Technical Support</h1>
            <p className="pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected
            </p>
          </div>
          <div>
            <p className="flex  items-center text-indigo-600 pl-8 py-4">
              contact Us <ArrowSmRightIcon className="w-5 ml-2 text-blue-600" />
            </p>
          </div>
        </div>
        <div className="bg-white relative px-5 rounded-xl shadow-2xl ">
          <div className="p-8">
            <ChipIcon className="w-16 bg-blue-500 text-white p-4 rounded-lg mt-[-4rem]" />
            <h1 className="font-bold text-3xl py-3">Media Inquiries</h1>
            <p className="pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected
            </p>
          </div>
          <div>
            <p className="flex  items-center text-indigo-600 pl-8 py-4">
              contact Us <ArrowSmRightIcon className="w-5 ml-2 text-blue-600" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
