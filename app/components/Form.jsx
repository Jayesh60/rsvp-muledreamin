const Form = () => {
  return (
    <div className="max-width py-10 flex flex-col items-center justify-center">
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
            Terms & Conditions:{" "}
          </span>{" "}
          Once bought, no monetary refunds will be given. You can only transfer
          the ticket to another person. You must inform the recipient of details
          to the organizing team by writing an email to the organizing team.
        </div>
      </div>

      <div className="w-[800px] py-6 px-8 rounded-b-xl flex flex-col gap-5 border pb-10">
        <div className="flex w-full gap-5">
          <div className=" flex flex-col w-1/2 gap-2">
            <label htmlFor="fname" className="label">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="outline-none border px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
          <div className=" flex flex-col w-1/2  gap-2">
            <label htmlFor="lname" className="label">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className=" flex flex-col w-1/2  gap-2 ">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="outline-none border px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
          <div className=" flex flex-col w-1/2  gap-2">
            <label htmlFor="number" className="label">
              Mobile No
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="flex flex-col w-1/2  gap-2 ">
            <label htmlFor="company" className="label">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
          <div className=" flex flex-col w-1/2  gap-2">
            <label htmlFor="designation" className="label">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="flex flex-col w-1/2  gap-2 ">
            <label htmlFor="pincode" className="label">
              PIN Code
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
          <div className=" flex flex-col w-1/2  gap-2">
            <label htmlFor="state" className="label">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="outline-none border  px-4 py-1.5 rounded bg-light-white focus:bg-gray-100 duration-300 transition-all ease-in "
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-end w-full px-10">
        <button className="w-fit bg-pink text-white px-8 text-xl font-medium py-3 rounded">Buy Passes</button>
      </div>
    </div>
  );
};

export default Form;
