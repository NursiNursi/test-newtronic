import { useEffect, useState } from "react";
import { fetchLogo } from "../services/api";

const Logo = () => {
  const [img, setImg] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const img = await fetchLogo();
      setImg(img);
      console.log(img);
    };

    fetchData();
  }, []);

  return (
    <div>
      {img && (
        <img
          className="w-56 rounded-lg object-contain pl-2 pt-2 shadow-md"
          src={img}
          loading="lazy"
          alt="logo"
        />
      )}
    </div>
  );
};

export default Logo;
