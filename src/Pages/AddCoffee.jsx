import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const AddCoffee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCoffeeSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = { name, chef, supplier, taste, category, details, photo };
    console.log(coffee);
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: "Thank You!",
            text: "Product Uploaded successful",
            icon: "success",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto my-12">
        <Link
          to={"/"}
          className="text-2xl font-rancho text-[#374151] flex items-center gap-4"
        >
          <BsArrowLeft></BsArrowLeft> Back to home
        </Link>
      </div>
      <div className="mb-28 max-w-7xl mx-auto bg-[#F4F3F0] py-16 px-5 lg:px-28">
        <h1 className="text-4xl text-[#374151] font-rancho mb-4 text-center">
          Add New Coffee
        </h1>
        <p className="max-w-3xl mx-auto leading-relaxed text-[#374151] opacity-70 font-raleway mb-4 text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleCoffeeSubmit}>
          <div className="md:flex gap-6 justify-between">
            <div className="md:w-1/2 mb-6">
              <div>
                <label
                  className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                  htmlFor="name"
                >
                  Name:
                </label>
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter coffee name"
                  required
                />
              </div>
            </div>
            <div className="md:w-1/2 mb-6">
              <div>
                <label
                  className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                  htmlFor="chef"
                >
                  Chef:
                </label>
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                  type="text"
                  id="chef"
                  name="chef"
                  placeholder="Enter coffee chef"
                  required
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-6 justify-between">
            <div className="md:w-1/2 mb-6">
              <div>
                <label
                  className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                  htmlFor="supplier"
                >
                  Supplier:
                </label>
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                  type="text"
                  id="supplier"
                  name="supplier"
                  placeholder="Enter coffee Supplier"
                  required
                />
              </div>
            </div>
            <div className="md:w-1/2 mb-6">
              <div>
                <label
                  className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                  htmlFor="taste"
                >
                  Taste:
                </label>
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                  type="text"
                  id="taste"
                  name="taste"
                  placeholder="Enter coffee taste"
                  required
                />
              </div>
            </div>
          </div>
          <div className="md:flex gap-6 justify-between">
            <div className="md:w-1/2 mb-6">
              <div>
                <label
                  className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                  htmlFor="category"
                >
                  Category:
                </label>
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Enter coffee category"
                  required
                />
              </div>
            </div>
            <div className="md:w-1/2 mb-6">
              <div>
                <label
                  className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                  htmlFor="details"
                >
                  Details:
                </label>
              </div>
              <div>
                <input
                  className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                  type="text"
                  id="details"
                  name="details"
                  placeholder="Enter coffee details"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div>
              <label
                className="text-lg font-semibold text-[#374151] opacity-80 mb-3 block"
                htmlFor="photo"
              >
                Photo:
              </label>
            </div>
            <div>
              <input
                className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                type="text"
                id="photo"
                name="photo"
                placeholder="Enter photo url"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <button className="w-full btn rounded bg-[#E3B577] hover:bg-[#daa35c] text-[#222] border-2 hover:border-[#331A15] border-[#331A15] font-rancho text-lg ">
              Add Coffee
              <img src="https://i.ibb.co/8YnGMsx/Vector-1.png" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
