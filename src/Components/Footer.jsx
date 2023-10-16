import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[url(https://i.ibb.co/t4hSS9n/13.jpg)] bg-cover pt-28">
      <div className="max-w-7xl mx-auto md:flex gap-32 pb-12 px-5">
        <div className="md:w-1/2">
          <div className="flex gap-5 items-center">
            <img
              className="w-14"
              src="https://i.ibb.co/McRH69r/logo1.png"
              alt=""
            />
            <h2 className="font-rancho text-[#331A15] text-3xl">
              Espresso Emporium
            </h2>
          </div>
          <p className="leading-relaxed text-[#1b1a1a] font-raleway my-4">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="text-[#331A15] text-3xl flex gap-4">
            <Link>
              <BsFacebook></BsFacebook>
            </Link>
            <Link>
              <AiOutlineInstagram></AiOutlineInstagram>
            </Link>
            <Link>
              <AiOutlineTwitter></AiOutlineTwitter>
            </Link>
            <Link>
              <AiFillLinkedin></AiFillLinkedin>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="font-rancho text-[#331A15] text-3xl mb-8">
            Connect with Us
          </h2>
          <form>
            <div className="mb-5">
              <input
                className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-5">
              <input
                className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-5">
              <textarea
                className="w-full px-4 py-3 bg-white rounded text-[#1B1A1A] placeholder:text-[#1B1A1A99] border border-gray-200"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>
            <button
              className="btn px-8 rounded-full bg-transparent hover:bg-transparent text-[#222] border hover:border-[#331A15] border-[#331A15] font-rancho text-lg"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[url(https://i.ibb.co/0Vpdyh0/24.jpg)] bg-cover py-3">
        <p className="text-xl text-white font-rancho text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
