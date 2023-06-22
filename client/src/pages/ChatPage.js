import {useRef, useState} from "react";
import Chat from "../components/Chat";

const ChatPage = () => {
    const apiRef = useRef();
    const [api_key, setApi_key] = useState('');
    return (
        <div className={"container mx-auto"}>
            <div className={"border border-gray-200"}>
                <input type="text" ref={apiRef} className={"bg-gray-200"}/>
                <button onClick={() => setApi_key(apiRef.current.value)}>Connect</button>
            </div>
            {api_key &&
                <Chat api_key={api_key}/>
            }
        </div>
    )
}

export default ChatPage;