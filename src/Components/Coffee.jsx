import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Coffee = ({ coffee, handleCoffeeDelete }) => {
  const { _id, name, chef, photo } = coffee;

  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleCoffeeDelete(_id);
      } else {
        swal("Cancel deletion!");
      }
    });
  };

  return (
    <div className="flex items-center gap-5 p-8 bg-[#F5F4F1]">
      <img src={photo} alt="" />
      <div className="flex-grow">
        <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
          Name: <span className="text-[#5c5b5b] font-normal">{name}</span>
        </h3>
        <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
          Chef: <span className="text-[#5c5b5b] font-normal">{chef}</span>
        </h3>
        <h3 className="text-lg text-[#1b1a1a] font-bold font-raleway mb-3">
          Price: <span className="text-[#5c5b5b] font-normal">500 Taka</span>
        </h3>
      </div>
      <div>
        <div className="mb-4">
          <Link to={`coffee/details/${_id}`}>
            <button className="text-xl p-2.5 text-white bg-[#D2B48C] rounded-md">
              <AiFillEye></AiFillEye>
            </button>
          </Link>
        </div>
        <div className="mb-4">
          <Link to={`coffee/update/${_id}`}>
            <button className="text-xl p-2.5 text-white bg-[#3C393B] rounded-md">
              <BsFillPencilFill></BsFillPencilFill>
            </button>
          </Link>
        </div>
        <div className="mb-4">
          <button
            onClick={handleDelete}
            className="text-xl p-2.5 text-white bg-[#EA4744] rounded-md"
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;

Coffee.propTypes = {
  coffee: PropTypes.object,
  handleCoffeeDelete: PropTypes.func,
};
