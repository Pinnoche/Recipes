import Image from "next/image";
import stew from "./stew.jpg";
import noodles from "./noodles.jpg";
import beans from "./beans-stew.jpg";

export default function Home() {
  return (
    <main className="px-16 py-6 bg-gray-100 md:col-span-2">
      <div className="flex justify-center md:justify-end">
        <a
          href="#"
          className=" btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Log in
        </a>
        <a
          href="#"
          className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-700"
        >
          Sign Up
        </a>
      </div>

      <header>
        <h2 className="text-gray-500 text-3xl tracking-wider my-3">Recipes</h2>
        <h3 className="text-gray-500">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>

        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {/* cards creation  */}
          <div className="card hover:shadow-2xl">
            {/* card 1 */}
            <Image
              src={beans}
              alt="Beans Stew"
              quality={100}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">5 Bean Chilli Stew</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Tanwa
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          {/* card 2 */}
          <div className="card hover:shadow-2xl">
            <Image
              src={stew}
              alt="Stew"
              quality={100}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Fine Stew</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Dimeji
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span> 1 hr</span>
            </div>
          </div>
          {/* card 3 */}
          <div className="card hover:shadow-2xl">
            <Image
              src={noodles}
              alt="Noodles"
              quality={100}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Hot Indomie</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Ratio
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>10 mins</span>
            </div>
          </div>
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
        <div className="mt-8">
          <div></div>
        </div>
        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200 transform hover:shadow-inner hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
            Load More
          </div>
        </div>
      </div>
    </main>
  );
}
