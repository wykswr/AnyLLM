import Cookies from "js-cookie";
import Chat from "../components/Chat";
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

const ChatPage = () => {
    const api_key = Cookies.get("api_key");
    const model = Cookies.get("model");

    return (
        <div className={"container mx-auto mt-8  relative"}>
            <Link to={"/"} className={"fixed top-0 left-0 m-4 rounded-full bg-pink-400 text-white p-1.5"}>
                <ArrowLeftOnRectangleIcon className={"h-7 w-7"}/>
            </Link>
            <div className={"flex justify-center"}>
                <h1 className={"text-2xl font-bold bg-purple-500 text-white rounded-xl px-2"}>Model: {model}</h1>
            </div>
            {api_key &&
                <Chat />
            }
        </div>

    )
}

export default ChatPage;