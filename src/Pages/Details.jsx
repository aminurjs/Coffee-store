import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const coffee = useLoaderData();

  console.log(coffee);
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <>
      <div className="max-w-5xl mx-auto my-12">
        <Link
          to={"/"}
          className="text-2xl font-rancho text-[#374151] flex items-center gap-4"
        >
          <BsArrowLeft></BsArrowLeft> Back to home
        </Link>
      </div>
      <div className="max-w-5xl mx-auto pb-16">
        <div className="flex items-center gap-10 py-16 px-5 md:px-10 lg:px-40 bg-[#F5F4F1]">
          <img className="w-2/5" src={photo} alt="" />
          <div>
            <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
              Name: <span className="text-[#5c5b5b] font-normal">{name}</span>
            </h3>
            <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
              Chef: <span className="text-[#5c5b5b] font-normal">{chef}</span>
            </h3>
            <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
              Chef:{" "}
              <span className="text-[#5c5b5b] font-normal">{supplier}</span>
            </h3>
            <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
              Chef: <span className="text-[#5c5b5b] font-normal">{taste}</span>
            </h3>
            <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
              Chef:{" "}
              <span className="text-[#5c5b5b] font-normal">{category}</span>
            </h3>
            <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
              Chef:{" "}
              <span className="text-[#5c5b5b] font-normal">{details}</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
