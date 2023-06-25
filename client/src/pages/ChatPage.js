import Cookies from "js-cookie";
import Chat from "../components/Chat";

const ChatPage = () => {
    const api_key = Cookies.get("api_key");
    const model = Cookies.get("model");

    return (
        <div className={"container mx-auto mt-8"}>
            <h1 className={"text-xl font-semibold"}>Model: {model}</h1>
            {api_key &&
                <Chat api_key={api_key}/>
            }
        </div>

    )
}

export default ChatPage;