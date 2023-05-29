import React, { useCallback, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ErrorPage from "./routes/Error-page";
import Homepage from "./routes/Homepage";
import OwnPrompt from "./routes/OwnPrompt";
import RandomPrompt from "./routes/RandomPrompt";

const App = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const socketUrl = "ws://localhost:5001";
  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage messageHistory={messageHistory} />,
      errorElement: <ErrorPage />,
    },
    { path: "/random", element: <RandomPrompt /> },
    { path: "/own", element: <OwnPrompt /> },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
