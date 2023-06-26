from typing import Annotated

from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, Cookie

from .services import AI21ChatBot

app = FastAPI()


class ModelApiExtractor:
    def __init__(self, api_key: Annotated[str, Cookie()], model: Annotated[str, Cookie()]):
        self.api_key = api_key
        self.model = model


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/models")
async def models() -> list[str]:
    return ["AI21", "GPT3", "GPT4"]


@app.websocket("/chat")
async def chat_endpoint(websocket: WebSocket, config: Annotated[ModelApiExtractor, Depends()]):
    await websocket.accept()
    chatbot = AI21ChatBot(api_key=config.api_key)
    await websocket.send_json({"sender": "bot", "text": "Hello, Alice here, how can I help you?"})
    while True:
        try:
            data = await websocket.receive_json()
            bot_response = chatbot.chat(human_input=data["text"])
            await websocket.send_json({"sender": "bot", "text": bot_response})
        except WebSocketDisconnect:
            break
