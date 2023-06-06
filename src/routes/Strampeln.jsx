import { Link } from "react-router-dom";
import homepage_img2 from "../assets/homepage_img2.jpg";

const Strampeln = () => {
  return (
    <div className="h-screen w-full bg-black">
      <div className="h-full w-full flex">
        <div className="h-full w-[60%] bg-gradient-to-r from-gray-900 from-85% to-black to-100% justify-center items-start flex flex-col pl-44 pr-12 gap-8">
          <h1 className="w-full text-gray-50 font-bold text-8xl">
            Jetzt geht´s ans Strampeln!
          </h1>
          <p className="w-full text-gray-50 font-medium text-md max-w-lg">
            Nun wird mit der Energie, die mit den drei Stationen generiert wird,
            ein Bild über eine KI generiert. Also viel Spaß.
          </p>
          <div className="w-full flex gap-12">
            <Link to="/">
              <button className="text-green-800 text-2xl font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200">
                Neues Bild generieren
              </button>
            </Link>
          </div>
        </div>
        <div className="h-full w-[40%]">
          <img
            className="h-full w-full object-cover"
            src={homepage_img2}
            alt="technology"
          />
        </div>
      </div>
    </div>
  );
};

export default Strampeln;
