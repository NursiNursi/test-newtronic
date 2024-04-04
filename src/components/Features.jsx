import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { fetchFeatures } from "../services/api";
import "react-photo-view/dist/react-photo-view.css";

const Features = () => {
  const [features, setFeatures] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const features = await fetchFeatures();
      setFeatures(features);
    };

    fetchData();
  }, []);

  return (
    <div className="-mt-36 mb-14 flex flex-wrap">
      <PhotoProvider>
        {features?.map(({ id, title, description, url }) => (
          <div
            className="mx-auto my-2 flex h-[400px] cursor-pointer rounded-md bg-white text-center shadow-2xl transition-all duration-300 hover:-translate-y-5 hover:border-b-4 hover:border-[#00df9a]"
            key={id}
          >
            <div className="mx-auto mb-4 flex flex-col items-start rounded-br-3xl rounded-tl-3xl p-4">
              <PhotoView src={url}>
                <img
                  src={url}
                  loading="lazy"
                  alt="Features"
                  className="mx-auto mb-2 h-72 w-96 rounded-lg "
                />
              </PhotoView>
              <h4 className="mb-2 text-2xl font-bold text-slate-600">
                {title}
              </h4>
              <p className="text-md max-w-96 text-start text-slate-500">
                {description}
              </p>
            </div>
          </div>
        ))}
      </PhotoProvider>
    </div>
  );
};

export default Features;
