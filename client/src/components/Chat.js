import useChat from "../hooks/useChat";
import {useRef} from "react";

const Chat = ({api_key}) => {
    const [messages, sendMessage] = useChat(api_key);
    const inputRef = useRef();
    const handleSend = () => {
        sendMessage(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <div className={"rounded-xl"}>
            <div className={"border bg-blue-200 flex flex-col gap-3"}>
                {messages.map(message => <div>{message?.bot}</div>)}
            </div>
            <div>
                <input type="text" ref={inputRef} className={"bg-gray-200"}/>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );

}

export default Chat;