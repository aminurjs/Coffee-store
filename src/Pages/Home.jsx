import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Instagram from "../Components/Instagram";
import PopularProducts from "../Components/PopularProducts";
import Quality from "../Components/Quality";

const Home = () => {
  const coffees = useLoaderData();

  console.log(coffees);
  return (
    <>
      <Banner />
      <Quality />
      <PopularProducts coffees={coffees} />
      <Instagram />
    </>
  );
};

export default Home;
