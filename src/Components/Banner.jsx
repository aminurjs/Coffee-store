const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/8cCNjLJ/3.png)] bg-cover bg-center py-72 lg:flex">
      <div className=" lg:w-2/5"></div>
      <div className="lg:w-3/5">
        <h1 className="text-6xl text-white font-rancho mb-4">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="max-w-2xl leading-relaxed text-white font-raleway mb-4">
          {"It's"} coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn rounded-sm bg-[#E3B577] hover:bg-[#daa35c] text-[#222] border-none font-rancho text-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
