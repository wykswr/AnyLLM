import useChat from "../hooks/useChat";
import {useRef} from "react";
import TypingBox from "./TypingBox";
import {PaperAirplaneIcon} from "@heroicons/react/24/solid";

const Chat = () => {
    const [messages, sendMessage] = useChat();
    const inputRef = useRef();
    const handleSend = () => {
        sendMessage(inputRef.current.value);
        inputRef.current.value = '';
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    }


    return (
        <div className={"mt-8 mb-8"}>
            <div className={"flex flex-col gap-3 mb-16"}>
                {messages.map((message, index) => <TypingBox key={index} sender={message.sender} text={message.text}/>)}
            </div>
            <div className={"flex w-full fixed bottom-0 left-0 z-10 border bg-pink-400 rounded-sm mx-auto justify-center py-3 gap-3"}>
                <input type="text" ref={inputRef} className={"w-1/2 rounded-md caret-pink-500"} onKeyDown={handleKeyDown}/>
                <button
                    className={"bg-blue-300 rounded-md hover:bg-blue-400 w-14 text-white"}
                    onClick={handleSend}>
                    <PaperAirplaneIcon className={"h-6 w-6 mx-auto"}/>
                </button>
            </div>
        </div>
    );

}

export default Chat;