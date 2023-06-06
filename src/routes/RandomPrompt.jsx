import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket";
import spirale_img from "../assets/spirale.png";

const RandomPrompt = () => {
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

  const mockData = [
    "Lass deiner Vorstellungskraft freien Lauf und beschreibe, wie das Bild aussehen soll, das von der KI generiert werden soll. Beschreibe die Farben, Formen, Texturen oder andere Merkmale, die du",
    "prompt2",
    "prompt3",
  ];

  return (
    <div
      className={`h-screen w-full bg-black overflow-y-hidden ${
        readyState !== ReadyState.OPEN ? "bg-red-500" : ""
      }`}
    >
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
            TREFFE <br /> DEINE WAHL
          </h1>
          <p className="w-full text-gray-50 font-medium text-md max-w-2xl z-10">
            Hier haben wir bereits eine paar Ideen von uns vorbereitet. Du
            brauchst nur noch eine auswählen und kannst direkt durch starten!
            Wie schnell kriegst du ein Bild generiert?
          </p>
        </div>
        <div className="flex justify-start items-center w-[40%]">
          <form
            onSubmit={handleSubmit}
            className="w-full flex-col flex justify-center items-center gap-6"
          >
            <h2 className="w-full text-gray-50 font-bold text-3xl z-10 max-w-lg">
              {" "}
              Wähle einen der drei Vorschläge aus und beginne die Generierung!
            </h2>
            <div className="flex w-[80%] flex-col gap-2">
              <label
                className="text-green-200 text-2xl font-bold"
                htmlFor="prompt1"
              >
                Vorschlag 1:
              </label>
              <p
                onClick={() => setInputValue(mockData[0])}
                id="prompt1"
                className={`pl-8 w-full text-green-800 text-lg font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200 ${
                  inputValue === mockData[0]
                    ? "border-green-800 bg-green-100"
                    : ""
                }`}
              >
                {[mockData[0]]}
              </p>
            </div>
            <div className="flex w-[80%] flex-col gap-2">
              <label
                className="text-green-200 text-2xl font-bold"
                htmlFor="prompt2"
              >
                Vorschlag 2:
              </label>
              <p
                onClick={() => setInputValue(mockData[1])}
                id="prompt2"
                className={`pl-8 w-full text-green-800 text-lg font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200 ${
                  inputValue === mockData[1]
                    ? "border-green-800 bg-green-100"
                    : ""
                }`}
              >
                {[mockData[1]]}
              </p>
            </div>
            <div className="flex w-[80%] flex-col gap-2">
              <label
                className="text-green-200 text-2xl font-bold"
                htmlFor="prompt3"
              >
                Vorschlag 3:
              </label>
              <p
                onClick={() => setInputValue(mockData[2])}
                id="prompt3"
                className={`pl-8 w-full text-green-800 text-lg font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200 ${
                  inputValue === mockData[2]
                    ? "border-green-800 bg-green-100"
                    : ""
                }`}
              >
                {[mockData[2]]}
              </p>
            </div>
            <button
              className="disabled:opacity-30 hover:bg-emerald-500 text-white text-xl font-medium h-16 p-2 flex justify-center items-center rounded-full border-2 border-emerald-700 bg-emerald-700 w-[40%]"
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

export default RandomPrompt;
