/* eslint-disable @next/next/no-img-element */
import React from "react";

const Venue = () => {
  return (
    <div className="h-auto w-screen bg-gradient-to-r from-cyan-500 to-blue-500 grid">
      <div className="mt-20">
        <div className="absolute left-11 mt-12">
          <div className=" w-80 h-auto rounded-lg bg-white">
            <div className="p-3">
              <div>
                <p className="font-bold text-2xl text-[#1d1d1c]">Sport</p>
              </div>
              <div class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
              <div className="flow-root">
                <p className="float-left text-lg text-[#1d1d1c]">Sepak Bola</p>
                <p className="float-right text-lg text-[#1d1d1c]">2</p>
              </div>
              <div className="flow-root">
                <div className="float-left text-lg text-[#1d1d1c]">Futsal</div>
                <div className="float-right text-lg text-[#1d1d1c]">5</div>
              </div>
              <div className="flow-root">
                <div className="float-left text-lg text-[#1d1d1c]">
                  Bulu Tangkis
                </div>
                <div className="float-right text-lg text-[#1d1d1c]">1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 ml-[26rem]">
          <div className="mb-7">
            <p className="text-lg font-bold">Home/Venue</p>
          </div>
          <div className="w-auto mb-7 flex">
            <div class="flex justify-center">
              <div class="relative mb-3 xl:w-96">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full bg-white rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Nama Venue"
                />
                <label class="pointer-events-none text-black absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-black">
                  Name Venue
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-0 gap-y-4">
            <div className="max-w-lg rounded hover:shadow-2xl border-t-black overflow-hidden bg-white p-3">
              <img
                src={`/rama.jpeg`}
                alt="futsal"
                className="overflow-hidden w-auto h-96-"
                width={500}
                height={500}
              ></img>
              <p className="text-left mt-1 mb-3 text-lg font-bold">
                Bintang Rama Futsal
              </p>
              <p
                className="bg-green-500 w-auto leading-none text-sm font-medium text-gray-50 p-2
                rounded-full uppercase mb-2"
              >
                Futsal
              </p>
              <p className="font-bold">Location</p>
              <p className="p-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default Venue;
