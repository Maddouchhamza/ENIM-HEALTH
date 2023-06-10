import { useRef, useEffect, useState } from "react";
// import ReactTimeAgo from "react-time-ago";
import axios from "axios";

function Forum() {
  const [listeMessages, setListeMessages] = useState([]);
  const [inputListeReplies, setInputListeReplies] = useState([
    { reply: "", messagesId: null },
  ]);
  const [listeReplies, setListeReplies] = useState([]);
  const [message, setMessage] = useState({ message: "" });
  const inputElement = useRef(null);
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function handleMessages() {
      try {
        const response = await axios.get("http://localhost:3001/messages");
        const messages = response.data;
        setListeMessages(messages);
        console.log(messages);
        const response1 = await axios.get("http://localhost:3001/replies");
        const replies = response1.data;
        setListeReplies(replies);
        console.log(replies);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
    handleMessages();
  }, [render]);

  const handleMessage = (Event) => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      message: Event.target.value,
    }));
  };

  const handleReply = (e, idMessage) => {
    setInputListeReplies((prevInputListeReplies) => {
      const updatedArray = [...prevInputListeReplies];
      updatedArray[idMessage] = {
        ...updatedArray[idMessage],
        messagesId: idMessage,
        reply: e.target.value,
      };
      return updatedArray;
    });
  };

  const handleClickReply = (reply) => {
    axios
      .post("http://localhost:3001/replies", reply, {
        headers: { accessToken: sessionStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          console.log("Le commentaire est sauvegardé dans la base de données");
          setRender((render) => render + 1);
        }
      });
  };

  const handleClickMessage = (message) => {
    axios.post("http://localhost:3001/messages", message).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log("Le message est sauvegardé dans la base de données");
        setRender((render) => render + 1);
        setMessage("");
      }
    });
  };

  return (
    <div className="contain flex flex-row ml-56 pr-24 space-x-5 h-screen">
      <div className="form flex flex-col space-y-4 w-2/4">
        <div
          className="messages border-2 border-transparent border-b-stone-200 flex flex-col overflow-y-auto pb-10  p-2 resize-none space-y-5 h-full"
          id="nv_message"
        >
          {listeMessages.map(({ idMessage, message }) => (
            <div key={idMessage} className="space-y-2">
              <div className="shadow-md rounded-md pr-2 pt-3">
                <div className="identifiants ml-5">
                  <div className="name"></div>
                  <div className="text-xs text-gray-400 font-['Roboto']">
                    {/* <ReactTimeAgo date={Date.now()} locale="fr-FR" /> */}
                  </div>
                </div>
                <div className="nv_message font-bold  ml-5 font-['Roboto'] text-lg">
                  {message}
                </div>
                <div className="Comment grid grid-cols-5 rounded-full shadow-md m-2 h-10">
                  <textarea
                    onChange={(e) => handleReply(e, idMessage)}
                    value={
                      inputListeReplies[idMessage]
                        ? inputListeReplies[idMessage].reply
                        : ""
                    }
                    placeholder="Ecrire votre commentaire ..."
                    ref={inputElement}
                    className="col-span-4 bg-transparent border-none rounded-full resize-none hover:border-none p-2"
                  ></textarea>
                  <button
                    className="flex flex-row space-x-1 self-end rounded-full bg-blue-500 p-2"
                    onClick={() =>
                      handleClickReply(inputListeReplies[idMessage])
                    }
                  >
                    <img
                      src="client\assets\forum\corner-down-right.svg"
                      alt="Répondre"
                      className="mt-1"
                    />
                    <p className="font-['Roboto'] text-white font-thin">
                      Répondre
                    </p>
                  </button>
                </div>
              </div>
              <div id="Reply">
                {listeReplies.map(({ idReply, reply, messagesId }) => {
                  if (messagesId === idMessage) {
                    return (
                      <div
                        key={idReply}
                        className="px-4 py-3 space-y-1 border shadow-md rounded-md"
                      >
                        <div className="border-2 border-b-stone-200 p">
                          {reply}
                        </div>
                        <div className="text-gray-400 font-['Roboto']">
                          by @
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="nv_message space-y-4">
          <p className="Nouveau_message font-['Roboto'] text-gray-600 font-extrabold">
            Nouveau Message
          </p>
          <textarea
            className="message bg-transparent border border-gray-400 rounded resize-none"
            name="message"
            id="message"
            cols="80"
            rows="5"
            placeholder="Ecrire votre message..."
            value={message.message}
            onChange={handleMessage}
            ref={inputElement}
          ></textarea>
        </div>
        <div className="button flex justify-end">
          <button
            className="Publier bg-gradient-to-b from-Linear1 to-Linear2  rounded flex flex-row py-1.5 pr-7 pl-6 space-x-3"
            onClick={() => handleClickMessage(message)}
          >
            <img
              src="client\assets\forum\send.svg"
              alt="send_icone"
              className="pt-1.5"
            />
            <p className="text-white font-black font-['Roboto']">Publier</p>
          </button>
        </div>
      </div>
      <div className="img flex justify-end w-2/4">
        <img
          src="client\assets\forum\image_forum.png"
          alt="image_forum"
          className="h-3/4"
        />
      </div>
    </div>
  );
}

export default Forum;
