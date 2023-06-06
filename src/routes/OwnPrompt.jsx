import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket";
import spirale_img from "../assets/spirale.png";

const OwnPrompt = () => {
  const [inputValue, setInputValue] = useState("");
  const socketUrl = "ws://localhost:5001";
  const navigate = useNavigate();
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const handleClickSendMessage = useCallback((input) => {
    sendMessage(input.formData);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = JSON.stringify(inputValue);
    console.log({ formData });
    handleClickSendMessage({ formData });
    setInputValue("");
    navigate("/strampeln");
  }

  return (
    <div className="h-screen w-full bg-black overflow-y-hidden">
      <div className="relative h-full w-full flex">
        <div className="absolute top-16 left-32 z-10">
          <Link to={"/"}>
            <button className="text-green-800 text-2xl font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200">
              Zurück
            </button>
          </Link>
        </div>
        <div className="relative h-full w-[60%] bg-gradient-to-r from-gray-900 from-85% to-black to-100% justify-center items-start flex flex-col pl-44 pr-12 gap-8">
          <div className="right-28 absolute flex justify-start items-start h-full w-full">
            <img
              src={spirale_img}
              alt="spirale"
              className="w-full h-full rotate-90 opacity-30"
            />
          </div>
          <h1 className="w-full text-gray-50 font-bold text-8xl z-10">
            VISUALISIERE <br /> DEINE IDEEN
          </h1>
          <p className="w-full text-gray-50 font-medium text-md max-w-3xl z-10">
            Lass deiner Vorstellungskraft freien Lauf und beschreibe, wie das
            Bild aussehen soll, das von der KI generiert werden soll. Beschreibe
            die Farben, Formen, Texturen oder andere Merkmale, die du
            bevorzugst, damit die KI dein ideales Bild erstellen kann.
          </p>
        </div>
        <div className="flex justify-start items-center w-[40%] mt-80">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center"
          >
            <label className="">
              <input
                className="w-96 h-16 text-xl font-medium border-green-200 border-2 focus:outline-none focus-border-emerald-700 focus:outline-green-800 text-green-800 pl-8 bg-green-200 rounded-tl-full rounded-bl-full"
                name="input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Schreib dein Idee hier rein..."
              />
            </label>
            <button
              className="disabled:opacity-30 hover:bg-emerald-500 text-white text-xl font-medium h-16 p-2 flex justify-center items-center rounded-tr-full rounded-br-full border-2 border-emerald-700 bg-emerald-700"
              type="submit"
              disabled={
                inputValue === "" || readyState !== ReadyState.OPEN
                  ? true
                  : false
              }
            >
              Generieren
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OwnPrompt;
