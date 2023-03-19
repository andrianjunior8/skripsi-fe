import React from "react";

const main = () => {
  return (
    <div className="w-screen h-screen bg-slate-200 grid place-content-center ">
      <div className="row-span-1">
        <div class="mx-auto max-w-2xl text-center float-right">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            GET IN TOUCH
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600 py-2">
            We will answer your questions and problems in 24/7.
          </p>
        </div>
        <label
          for="first-name"
          class="block text-sm font-semibold leading-6asdasd text-gray-900 py-2"
        >
          Fullname
        </label>

        <div class="mt-2.5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900 py-2"
          >
            Email
          </label>
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold leading-6 text-gray-900 py-2"
          >
            Phone number
          </label>
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center border-r-2">
              <label for="country" class="sr-only">
                Country
              </label>
              <label class="h-full rounded-md border-0 bg-transparent bg-none py-2 pl-4 pr-9 text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                +62
              </label>
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-gray-900 py-2"
          >
            Message
          </label>
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 py-2 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      <div class="mt-10">
          <button
            type="submit"
            class="block w-full rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default main;
