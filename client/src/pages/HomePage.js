import ModelSelect from "../components/ModelSelect";
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/20/solid";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import TypingBox from "../components/TypingBox";

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
        <div className={"container mx-auto h-screen grid grid-rows-4 items-start mt-8 justify-items-center"}>
            <h1 className={"text-2xl uppercase font-bold text-indigo-500"}>Chat with any LLM</h1>
            <div className={"bg-gray-100 row-span-2 w-full md:w-1/2 p-8 mx-auto rounded-xl shadow h-64 relative"}>
                <div className={"w-full grid grid-cols-5 gap-3"}>
                    <label htmlFor="key-input" className={"text-start text-pink-400 font-semibold"}>API key:</label>
                    <input type="text" id="key-input" className={"col-span-4 py-0.5 px-2 rounded-lg border-gray-400"}
                           placeholder="The API key from your language model provider" ref={apiKeyRef}/>
                    <h3 className={"text-start text-pink-400 font-semibold"}>Model provider:</h3>
                    <ModelSelect ref={modelRef} className={"col-span-4"}/>
                </div>

                <button onClick={handleClick} className={"bg-blue-400 rounded-full p-1 text-white hover:bg-blue-600 absolute bottom-0 right-0 m-7"}>
                   <ChatBubbleOvalLeftEllipsisIcon className={"h-6 w-6"}/>
                </button>
            </div>
            <TypingBox className={"bg-pink-400 text-white w-1/2 p-3 rounded-lg text-lg font-semibold text-start"}
                       text={"AnyLLM a web based AI assistant system, it can be powered by a variety of large language models (LLM).\n" +
                "AnyLLM has memory, even if the LLM you use doesn't support that."}/>
        </div>
    );
}

export default HomePage;