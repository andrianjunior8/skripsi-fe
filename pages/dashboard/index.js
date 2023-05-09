import React from "react";

const main = () => {
  return (
    <div className="w-screen h-auto absolute bg-white">
      <div className="ml-10  mt-28 w-screen">
        <img
          src={`/basketball.jpg`}
          className="w-auto h-screen object-fit:fill"
          width="500px"
          height="500px"
          alt="Banner"
        ></img>
      </div>
      <div className="m-10">
        <div className="p-10">
          <p className="text-5xl font-bold font-mono text-center ">Category</p>
        </div>
        <div className="p-16 rounded-lg bg-[#FFF6C3]">
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

        <div class="bg-[#FFF6C3] m-14">
          <div class="bg-[#FFF6C3] mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div class="group relative p-10 border border-gray-400">
                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                  <img
                    src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1380&t=st=1682410359~exp=1682410959~hmac=a6cb737b977fd94202ed3fbbe330a28a665a0aefdb40c3716cfdf1b3d064e5e2"
                    className="w-full h-full rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Lapangan Futsal Elang
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Kemanggisan Raya</p>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
              </div>

              <div class="group relative p-10 border border-gray-400">
                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                  <img
                    src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1380&t=st=1682410359~exp=1682410959~hmac=a6cb737b977fd94202ed3fbbe330a28a665a0aefdb40c3716cfdf1b3d064e5e2"
                    className="w-full h-full rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Lapangan Futsal Elang
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Kemanggisan Raya</p>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
              </div>

              <div class="group relative p-10 border border-gray-400">
                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                  <img
                    src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1380&t=st=1682410359~exp=1682410959~hmac=a6cb737b977fd94202ed3fbbe330a28a665a0aefdb40c3716cfdf1b3d064e5e2"
                    className="w-full h-full rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Lapangan Futsal Elang
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Kemanggisan Raya</p>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
              </div>

              <div class="group relative p-10 border border-gray-400">
                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                  <img
                    src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1380&t=st=1682410359~exp=1682410959~hmac=a6cb737b977fd94202ed3fbbe330a28a665a0aefdb40c3716cfdf1b3d064e5e2"
                    className="w-full h-full rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Lapangan Futsal Elang
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Kemanggisan Raya</p>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;