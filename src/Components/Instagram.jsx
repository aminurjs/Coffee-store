const Instagram = () => {
  const imagesArray = [
    { id: 1, img: "https://i.ibb.co/10WtPwJ/Rectangle-9.png" },
    { id: 2, img: "https://i.ibb.co/BjH8Hqc/Rectangle-10.png" },
    { id: 3, img: "https://i.ibb.co/m8zsLwc/Rectangle-11.png" },
    { id: 4, img: "https://i.ibb.co/n6C89xk/Rectangle-12.png" },
    { id: 5, img: "https://i.ibb.co/LSFr3KG/Rectangle-13.png" },
    { id: 6, img: "https://i.ibb.co/9Z3L88h/Rectangle-14.png" },
    { id: 7, img: "https://i.ibb.co/XLfm3pL/Rectangle-15.png" },
    { id: 8, img: "https://i.ibb.co/yfJRqKP/Rectangle-16.png" },
  ];

  return (
    <div className="my-28 max-w-7xl mx-auto px-5">
      <p className="text-lg leading-relaxed text-[#1b1a1a] font-raleway mb-4 text-center">
        Follow Us Now
      </p>
      <h1 className="text-4xl text-[#331a15] font-rancho mb-12 text-center">
        Follow on Instagram
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {imagesArray.map((image) => (
          <img key={image.id} src={image.img} />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
