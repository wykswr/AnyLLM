from fastapi import FastAPI, WebSocket, WebSocketDisconnect

from .services import AI21ChatBot

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.websocket("/chat")
async def chat_endpoint(websocket: WebSocket, api_key: str):
    await websocket.accept()
    chatbot = AI21ChatBot(api_key=api_key)
    await websocket.send_json({"bot": "Hello World"})
    while True:
        try:
            data = await websocket.receive_json()
            bot_response = chatbot.chat(human_input=data["human"])
            await websocket.send_json({"bot": bot_response})
        except WebSocketDisconnect:
            break
