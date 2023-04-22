import React from "react";

const main = () => {
  return (
    <div className="w-auto h-auto absolute bg-[#E1EEDD]">
      <div className="mt-20 ">
        <img
          src={`/basketball.jpg`}
          className="h-auto w-auto "
          width="500"
          height="500"
          alt="dashboard"
        ></img>
      </div>
      <div className="m-10">
        <div className="p-10">
          <p className="text-5xl font-bold font-mono text-center ">Sports</p>
        </div>
        <div className="p-16 rounded-lg bg-[#F3EFE0]">
          <div className="grid grid-cols-3 text-center">
            <div className="flex justify-center">
              <div className="">
                <div>
                  <img
                    src={`/futsal.jpeg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                </div>
                <div>
                  <p className="text-2xl font-mono mb-5 mt-2">Futsal</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/basket.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mb-5 mt-2">Basket</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mb-5 mt-2">Sepak Bola</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono  mt-2">Voli</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mt-2">Badminton</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mt-2">Mini Soccer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 p-10">
          <p className="text-5xl font-bold font-mono text-center">Popular</p>
        </div>
        {/* <div className="h-96 w-60 bg-slate-800 absolute left-44 rounded-xl"></div> */}
        <div className="overflow-x-scroll h-auto">
          <div className="max-w-sm rounded shadow-2xl border-t-black overflow-hidden">
            <img
              src={`/soccer.jpg`}
              className="w-full rounded-md"
              width="500"
              height="500"
              alt="futsal"
            ></img>
            <p className="text-center p-2 text-lg font-bold">Title</p>
            <p className="p-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="p-96"></div>
    </div>
  );
};

export default main;
