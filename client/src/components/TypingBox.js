import {useEffect, useState} from "react";

const Cursor = () => {
    return (
        <span className={"animate-flicker"}>▌</span>
    );
}

const TypingBox = ({sender, text}) => {
    const [content, setContent] = useState("");
    const [index, setIndex] = useState(0);
    const [cursor, setCursor] = useState(true);

    useEffect(() => {
        if (sender === "bot") {
            setTimeout(() => {
                if (index < text.length) {
                    setContent(content + text.charAt(index));
                    setIndex(index + 1);
                } else {
                    setCursor(false);
                }
            }, 50)
        } else {
            setContent(text);
        }
    }, [index]);

    return (
        sender === "bot" ?
        <div className="rounded-xl text-justify bg-blue-400 text-white p-2 md:w-5/12">
            <p>{content}{cursor && <Cursor/>}</p>
        </div> :
        <div className="rounded-xl text-justify bg-gray-500 text-white p-2 md:w-5/12 md:self-end">
            <p>{content}</p>
        </div>
    );
}

export default TypingBox;
