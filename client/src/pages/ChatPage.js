import Cookies from "js-cookie";
import Chat from "../components/Chat";

const ChatPage = () => {
    const api_key = Cookies.get("api_key");
    const model = Cookies.get("model");

    return (
        <div className={"container mx-auto mt-8"}>
            <h1 className={"text-2xl font-bold text-indigo-500"}>Model: {model}</h1>
            {api_key &&
                <Chat />
            }
        </div>

    )
}

export default ChatPage;