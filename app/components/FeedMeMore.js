import Image from "next/image";
import React from "react";

const FeedMeMore = () => {
  return (
    <div className="shape min-h-screen bg-white flex justify-center z-10">
      <div className="z-10 mt-12">
        <Image
          className="z-20"
          src="/feedmemore.svg"
          alt="feed me more"
          width={1500}
          height={500}
        />

        <div className="z-10 w-full py-12 flex justify-evenly gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="uppercase rounded-md px-4 w-full h-14"
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="uppercase rounded-md px-4 w-full h-14"
          />
          <button className="font-anton uppercase w-40 h-14 bg-green text-white text-xl py-2 px-4 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeedMeMore;
