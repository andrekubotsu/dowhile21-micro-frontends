import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex flex-row bg-white w-screen h-screen">
      <section className="flex-1 justify-center items-center bg-gray-100 p-14 h-screen">
        <div className="w-full h-max">
          <h5 className="text-base font-semibold mb-2">WORK SMARTER</h5>
          <h1 className="text-5xl font-bold mb-5">
            Features to help you work smarter
          </h1>
          <p className="text-lg">
            We´ve created a simple formula to follow in order to gain more out
            of your business and your application.
          </p>
        </div>
      </section>
      <section className="w-2/5 p-14 bg-white h-screen">
        <div className="w-full h-full">
          <h3 className="text-3xl font-bold">Signup</h3>
          <p className="text-sm mb-4">
            or, if you have an account you can{" "}
            <a href="" className="text-blue-500 underline">
              sign in
            </a>
          </p>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-sm mb-2">Name</label>
            <input
              className="border rounded-lg bg-gray-200 p-3"
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-sm mb-2">Email</label>
            <input
              className="border rounded-lg bg-gray-200 p-3"
              type="text"
              name="email"
              id=""
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-sm mb-2">Password</label>
            <input
              className="border rounded-lg bg-gray-200 p-3"
              type="text"
              name="password"
              id=""
              placeholder="Password"
            />
          </div>
          {children}
        </div>
      </section>
    </main>
  );
};

export default Main;
