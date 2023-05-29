import { useCallback } from "react";
import { Link } from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket";
import homepage_img2 from "../assets/homepage_img2.jpg";
import logoMitText from "../assets/logoMitText.png";

const Homepage = ({ messageHistory }) => {
  const socketUrl = "ws://localhost:5001";
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const handleClickSendMessage = useCallback(() => sendMessage("Hello"), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="h-screen w-full bg-black">
      <div className="relative h-full w-full flex">
        <div className="w-48 bg-gray-700 top-12 left-20 absolute rounded-full py-8 pr-9 pl-7 flex justify-center items-center">
          <img
            src={logoMitText}
            alt="pixelAi logo with text"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-full w-[60%] bg-gradient-to-r from-gray-900 from-85% to-black to-100% justify-center items-start flex flex-col pl-44 pr-12 gap-8">
          <h1 className="w-full text-gray-50 font-bold text-8xl">
            RESSOURCEN <br /> UND KI?
          </h1>
          <p className="w-full text-gray-50 font-medium text-md max-w-3xl">
            Das Ziel des Projekts ist es, dir ein besseres Verständnis für den
            Stromverbrauch bei der Anwendungvon Künstlicher Intelligenz zu
            vermitteln. Du hast die Möglichkeit, entweder aus einer eigenen Idee
            ein Bild zu generieren oder aus einer vorgegebenen Auswahl
            auszuwählen. Sobald du dich für eine Option entschieden hast, kannst
            du das gewünschte Gerät auswählen, um Energie zu erzeugen.
          </p>
          <div className="w-full flex gap-12">
            <Link to={"/random"}>
              <button className="text-green-800 text-2xl font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200">
                Zufälligen Prompt auswählen
              </button>
            </Link>
            <Link to={"/own"}>
              <button className="text-green-800 text-2xl font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200">
                Eigenen Prompt schreiben
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
      <div className="">
        <button
          className="text-black bg-green-900"
          onClick={handleClickSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        >
          Click Me to send 'Hello'
        </button>
        <span className="text-black">
          The WebSocket is currently {connectionStatus}
        </span>
        {lastMessage ? (
          <span className="text-black">Last message: {lastMessage.data}</span>
        ) : null}
        <ul>
          {messageHistory.map((message, idx) => (
            <span className="text-black" key={idx}>
              {message ? message.data : null}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
