import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Coffee from "./Coffee";
import { useState } from "react";
import swal from "sweetalert";

const PopularProducts = ({ loadedCoffee }) => {
  const [coffees, setCoffees] = useState(loadedCoffee);

  const handleCoffeeDelete = (id) => {
    fetch(`http://localhost:5000/coffee/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          const filterCoffees = coffees.filter((coffee) => coffee._id !== id);
          setCoffees(filterCoffees);
        }
      });
  };
  return (
    <div className="bg-[url(https://i.ibb.co/sF4yN3L/Group-73.png)] bg-cover bg-center py-20">
      <div className="my-28 max-w-7xl mx-auto">
        <p className="text-lg leading-relaxed text-[#1b1a1a] font-raleway mb-4 text-center">
          --- Sip & Savor ---
        </p>
        <h1 className="text-4xl text-[#331a15] font-rancho mb-4 text-center">
          Our Popular Products
        </h1>
        <div className="text-center mb-12">
          <Link to={"/addcoffee"}>
            <button className="btn rounded-sm bg-[#E3B577] hover:bg-[#daa35c] text-[#222] border-2 hover:border-[#331A15] border-[#331A15] font-rancho text-lg ">
              Add Coffee
              <img src="https://i.ibb.co/8YnGMsx/Vector-1.png" alt="" />
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <Coffee
              key={coffee._id}
              coffee={coffee}
              handleCoffeeDelete={handleCoffeeDelete}
            ></Coffee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;

PopularProducts.propTypes = {
  loadedCoffee: PropTypes.array,
};
