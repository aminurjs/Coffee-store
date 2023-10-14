import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-5 text-center">
        <Link
          to={"/"}
          className="text-2xl font-rancho text-[#374151] inline-flex items-center gap-4"
        >
          <BsArrowLeft></BsArrowLeft> Back to home
        </Link>
        <img
          className=" w-full max-w-3xl mx-auto"
          src="https://i.ibb.co/gJ6MCKq/404.gif"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
