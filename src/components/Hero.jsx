import { useEffect, useState } from "react";
import "../index.css";
import { fetchHero } from "../services/api";

const Hero = () => {
  const [hero, setHero] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const hero = await fetchHero();
      setHero(hero);
    };

    fetchData();
  }, []);

  console.log(hero);

  return (
    <section
      className="flex h-[100vh] bg-[url('https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg')] bg-cover bg-center"
      style={{ boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.5)" }}
    >
      <div className="mx-auto mt-48 flex w-full max-w-[1200px] flex-col items-center text-center text-white">
        <h1 className="px-3 text-6xl font-bold capitalize text-[#00df9a] md:text-7xl lg:text-8xl">
          {hero?.title}
        </h1>
        <p className="mx-2 my-4 max-w-[650px] px-2 text-2xl tracking-widest md:text-3xl">
          {hero?.description}
        </p>
        {/* <button className="py-3 px-6 bg-purple-500 text-white rounded-md">
          Get Started
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
