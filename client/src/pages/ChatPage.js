import {useRef, useState} from "react";
import Chat from "../components/Chat";

const ChatPage = () => {
    const apiRef = useRef();
    const [api_key, setApi_key] = useState('');
    return (
        <>
            <div className={"bg-pink-400 fixed top-0 z-10 w-full mx-auto grid grid-cols-4 gap-3 py-0.5 justify-items-stretch"}>
                <h1 className={"text-xl font-semibold text-end text-blue-300"}>AI21 API: </h1>
                <input type="text" ref={apiRef} className={"bg-gray-200 col-span-2 rounded-md"}/>
                <button
                    className={"bg-blue-300 rounded-md hover:bg-blue-400 w-20 justify-self-start"}
                    onClick={() => setApi_key(apiRef.current.value)}>Connect
                </button>
            </div>
            <div className={"container mx-auto"}>

                {api_key &&
                    <Chat api_key={api_key}/>
                }
            </div>
        </>
    )
}

export default ChatPage;