import {useEffect, useState} from "react";


const TypingBox = ({sender, text, className}) => {
    const [content, setContent] = useState("");
    const [index, setIndex] = useState(0);
    const [cursor, setCursor] = useState(true);

    useEffect(() => {
        if (sender !=="human") {
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
    }, [content, index, sender, text]);

    return (
        sender === "bot" ?
            <div className="rounded-xl text-justify bg-blue-400 text-white p-2 md:w-5/12">
                <p>{content}{cursor && <span className={"animate-flicker"}>▌</span>}</p>
            </div> :
            sender === "human" ?
                <div className="rounded-xl text-justify bg-gray-500 text-white p-2 md:w-5/12 md:self-end">
                    <p>{content}</p>
                </div> :
                <div className={className}>
                    <p>{content}{cursor && <span className={"animate-flicker"}>▌</span>}</p>
                </div>
    );
}

export default TypingBox;
