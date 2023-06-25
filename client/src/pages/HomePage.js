import ModelSelect from "../components/ModelSelect";
import {ChatBubbleOvalLeftIcon} from "@heroicons/react/20/solid";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";

const HomePage = () => {
    const navigate = useNavigate();
    const apiKeyRef = useRef("");
    const modelRef = useRef("");


    const handleClick = () => {
        Cookies.set("api_key", apiKeyRef.current.value, {expires: 7});
        Cookies.set("model", modelRef.current.innerText, {expires: 7});
        navigate("/chat");
    }

    return (
        <div className={"container mx-auto h-screen grid grid-rows-4 items-start"}>
            <h1>Chat with any LLM</h1>
            <div className={"bg-gray-100 row-span-2 w-full md:w-1/2 p-3 mx-auto flex flex-col items-center gap-8 mt-8 rounded-xl shadow"}>
                <div className={"w-full grid grid-cols-5 gap-3"}>
                    <label htmlFor="key-input" className={"text-start"}>API key</label>
                    <input type="text" id="key-input" className={"col-span-4 py-0.5 px-2 rounded-lg border-gray-400"}
                    ref={apiKeyRef}/>
                    <h3 className={"text-start"}>Model</h3>
                    <ModelSelect ref={modelRef} className={"col-span-4"}/>
                </div>

                <button onClick={handleClick} className={"bg-blue-400 rounded-md w-24 p-1 text-white hover:bg-blue-600 flex gap-2.5"}>
                   <ChatBubbleOvalLeftIcon className={"h-6 w-6"}/> <span>Start</span>
                </button>
            </div>
            <div className={"bg-blue-400 h-20"} ></div>
        </div>
    );
}

export default HomePage;