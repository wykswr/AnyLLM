from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from .services import AI21ChatBot

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/models")
async def models() -> list[str]:
    return ["AI21", "GPT3", "GPT4"]


@app.websocket("/chat")
async def chat_endpoint(websocket: WebSocket, api_key: str):
    await websocket.accept()
    chatbot = AI21ChatBot(api_key=api_key)
    await websocket.send_json({"sender": "bot", "text": "Hello, Alice here, how can I help you?"})
    while True:
        try:
            data = await websocket.receive_json()
            bot_response = chatbot.chat(human_input=data["text"])
            await websocket.send_json({"sender": "bot", "text": bot_response})
        except WebSocketDisconnect:
            break
