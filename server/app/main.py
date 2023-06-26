from typing import Annotated

from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, Cookie
from fastapi.middleware.cors import CORSMiddleware

from .services import get_chatbot_maker

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ModelApiExtractor:
    def __init__(self, api_key: Annotated[str, Cookie()], model: Annotated[str, Cookie()]):
        self.api_key = api_key
        self.model = model


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/models")
async def models() -> list[dict]:
    return [{"id": idx, "name": value} for idx, value in enumerate(get_chatbot_maker().keys())]


@app.websocket("/chat")
async def chat_endpoint(websocket: WebSocket, config: Annotated[ModelApiExtractor, Depends()]):
    await websocket.accept()
    chatbot = get_chatbot_maker()[config.model](config.api_key)
    await websocket.send_json({"sender": "bot", "text": "Hello, Alice here, how can I help you?"})
    while True:
        try:
            data = await websocket.receive_json()
            bot_response = chatbot.chat(human_input=data["text"])
            await websocket.send_json({"sender": "bot", "text": bot_response})
        except WebSocketDisconnect:
            break
