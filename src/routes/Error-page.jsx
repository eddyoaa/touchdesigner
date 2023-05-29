import { Link } from "react-router-dom";
import homepage_img2 from "../assets/homepage_img2.jpg";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full bg-black">
      <div className="h-full w-full flex">
        <div className="h-full w-[60%] bg-gradient-to-r from-gray-900 from-85% to-black to-100% justify-center items-start flex flex-col pl-44 pr-12 gap-8">
          <h1 className="w-full text-gray-50 font-bold text-8xl">Oooops!</h1>
          <p className="w-full text-gray-50 font-medium text-md max-w-lg">
            Sorry, es ist ein kleiner Fehler aufgetreten, aber mach dir keine
            Sorgen! Hier kommst du zurück zum Anfang:
          </p>
          <div className="w-full flex gap-12">
            <Link to="/">
              <button className="text-green-800 text-2xl font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200">
                Zurück zum Anfang
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

export default ErrorPage;
