import { useCallback } from "react";
import { Link } from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket";

const OwnPrompt = () => {
  const socketUrl = "ws://localhost:5001";
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const handleClickSendMessage = useCallback(
    () => sendMessage("Eigener Prompt"),
    []
  );

  return (
    <div className="h-screen w-full bg-black">
      <div className="relative h-full w-full flex">
        <div className="absolute top-16 left-32">
          <Link to={"/"}>
            <button className="text-green-800 text-2xl font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200">
              Zurück
            </button>
          </Link>
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
            <button
              onClick={handleClickSendMessage}
              disabled={readyState !== ReadyState.OPEN}
              className="text-green-800 text-2xl font-medium p-4 hover:bg-green-100 hover:border-green-800 border-green-200 border-2 hover:text-green-900 rounded-full bg-green-200"
            >
              Eigenen Prompt schreiben
            </button>
          </div>
        </div>
        <div className="h-full w-[40%] bg-blue-400"></div>
      </div>
    </div>
  );
};

export default OwnPrompt;
