"use client";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const animatedComponents = makeAnimated();
const Form = () => {
  const SizeOptions = [
    { value: "M", label: "M" },
    { value: "S", label: "S" },
    { value: "XL", label: "XL" },
  ];

  const Price = 999;
  const [totalPrice, setPrice] = useState(Price);
  const [totalTicket, setTotalTicket] = useState(1);

  const handleMinusTicket = () => {
    setTotalTicket((p) => (p > 1 ? p - 1 : p));
  };
  const handlePlusTicket = () => {
    setTotalTicket((p) => p + 1);
  };

  return (
    <div className="max-w-[800px] mx-auto py-10 flex flex-col items-center justify-center">
      <div className="bg-light-yellow border rounded-t-xl w-[800px] py-10 px-8 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-medium pb-1">
            Book tickets for <span className="text-pink"> Mule Dreamin</span>
          </h1>
          <h3 className="text-gray-600">
            Fuel your knowledge, synergy, and social impact in the MuleSoft &
            Salesforce realm
          </h3>
        </div>

        <div>
          <h2 className="text-2xl text-black">About Mule Dreamin</h2>
          <p className="text-gray-600">
            Mule Dreamin strives to cultivate a culture of learning,
            collaboration, and community involvement within the MuleSoft and
            Salesforce ecosystem. It empowers attendees to deepen their
            comprehension of MuleSoft and Salesforce technologies, exchange
            innovative ideas, and forge connections with like-minded
            professionals.
          </p>
        </div>

        <div className="text-gray-600">
          <span className="text-lg font-medium text-black">
            Terms & Conditions: 
          </span>
           {' '}Once bought, no monetary refunds will be given. You can only transfer
          the ticket to another person. You must inform the recipient of details
          to the organizing team by writing an email to the organizing team.
        </div>
      </div>

      <div className="px-8 py-8 border w-full flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-black">General Registration</h1>
          <p className="text-gray-600 w-[90%]">
            Breakfast, Keynote, Panel Discussion, Insightful sessions on
            different tracks, Lunch, Networking & many more.
          </p>
        </div>

        <div className="flex justify-between">
          <span className="text-2xl font-medium">
            Rs. {totalTicket * Price}
          </span>
          <div className="flex gap-3 items-center">
            <span className=" cursor-pointer" onClick={handleMinusTicket}>
              <CiCircleMinus size={"2.8em"} />
            </span>
            <span className="text-xl font-medium">{totalTicket}</span>
            <span className=" cursor-pointer" onClick={handlePlusTicket}>
              <CiCirclePlus size={"2.8em"} />
            </span>
          </div>
        </div>
      </div>

      <div className="w-[800px] py-6 px-8 rounded-b-xl flex flex-col gap-5 border pb-10">
        <div className="flex w-full gap-5">
          <div className=" flex flex-col w-1/2 gap-2">
            <label htmlFor="name" className="label">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="outline-none border px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
          <div className=" flex flex-col w-1/2  gap-2">
            <label htmlFor="email" className="label">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className=" flex flex-col w-1/2  gap-2">
            <label htmlFor="number" className="label">
              Mobile Number*
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
          <div className=" flex flex-col w-1/2  gap-2 ">
            <label htmlFor="city" className="label">
              City & State*
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="outline-none border px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="flex flex-col w-1/2  gap-2 ">
            <label htmlFor="organization" className="label">
              Organization*
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
          <div className=" flex flex-col w-1/2  gap-2">
            <label htmlFor="designation" className="label">
              T-shirt Size*
            </label>
            <Select options={SizeOptions} components={animatedComponents} />
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-end w-full px-10">
        <button className="w-fit bg-pink text-white px-8 text-xl font-medium py-3 rounded">
          Buy Passes
        </button>
      </div>
    </div>
  );
};

export default Form;
