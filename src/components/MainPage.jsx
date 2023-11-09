import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="text-gray-600 font-primaryFont">
      
      <main className="px-6 py-16" data-theme="aqua">
        <div className="flex justify-center md:justify-end">
          <a className="btn btn-warning" href="#">
            Log in
          </a>
          <a className="ml-3 btn btn-primary" href="#">
            Sign up
          </a>
        </div>

        <header>
          <h2 className="font-semibold text-gray-700 text-6xl pb-3 ">
            Recipes
          </h2>
          <h3 className="text-2xl">For Ninjas</h3>
        </header>

        <div>
          <h4 className="mt-12 pb-3 font-bold border-b">Latest Recipes</h4>

          <div className="flex mt-8 border border-red-200 justify-evenly md:flex-row sm:flex-col mobile">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/images/stew.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="./images/curry.jpg"
                alt="curry"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Todo Curry</span>
                <span className="block text-gray-500">Recipe by Mario</span>
              </div>
            </div>
            <div className="card">
              <img
                src="./images/noodles.jpg"
                alt="noodles"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Noodles</span>
                <span className="block text-gray-500">Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-3 border-b border-gray-200">
            Most Popular
          </h4>

          <div className="mt-8"></div>
        </div>

        <div className="flex justify-center">
          <div className="btn btn-secondary text-black-200">Load more</div>
        </div>
        <h2 className="">Contact Us</h2>
        <form className="flex justify-around">
          <div className="border border-secondary flex">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              name="vehicle1"
              id="vehicle1"
              value="vehicle1"
            />
            <label className="border border-primary" htmlFor="vehicle1">
              I have a bike
            </label>
          </div>
          <div className="border border-secondary flex">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              name="vehicle2"
              id="vehicle2"
              value="vehicle2"
            />
            <label className="border border-primary" htmlFor="vehicle2">
              I have a car
            </label>
          </div>
          <div className="border border-secondary flex">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              name="vehicle3"
              id="vehicle3"
              value="vehicle3"
            />
            <label className="border border-primary" htmlFor="vehicle3">
              I have a boat
            </label>
          </div>
          <div className="border border-secondary flex">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              name="vehicle4"
              id="vehicle4"
              value="vehicle4"
            />
            <label className="border border-primary" htmlFor="vehicle4">
              I have a lorry
            </label>
          </div>
        </form>
      </main>
    </div>
  );
}
export default MainPage;
