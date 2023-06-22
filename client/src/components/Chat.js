import useChat from "../hooks/useChat";
import {useRef} from "react";
import TypingBox from "./TypingBox";

const Chat = ({api_key}) => {
    const [messages, sendMessage] = useChat(api_key);
    const inputRef = useRef();
    const handleSend = () => {
        sendMessage(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <div className={"mt-8 mb-8"}>
            <div className={"flex flex-col gap-3"}>
                {messages.map((message, index) => <TypingBox key={index} sender={message.sender} text={message.text}/>)}
            </div>
            <div className={"flex w-full fixed bottom-0 left-0 z-10 border bg-pink-400 mx-auto justify-center py-0.5 gap-3"}>
                <input type="text" ref={inputRef} className={"w-1/2 rounded-md"}/>
                <button
                    className={"bg-blue-300 rounded-md hover:bg-blue-400 w-20"}
                    onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );

}

export default Chat;