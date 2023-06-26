from typing import Callable

from langchain.chains import LLMChain
from langchain.llms.ai21 import AI21
from langchain.llms.base import BaseLLM
from langchain.llms.openai import OpenAI
from langchain.memory import ConversationBufferWindowMemory
from langchain.prompts.prompt import PromptTemplate


class ChatBot:
    def __init__(self, llm: BaseLLM):
        self.instruction = """
        Your name is Alice.
        Your creator's name is Yukai.
        The following is a friendly conversation between a human and you.
        You is talkative and provides lots of specific details from its context.
        And this is not a task to generate the similar conversation examples between Alice and Human.
        you just need to answer the latest question from Human.
        """

        template = """
        {instruction}

        {chat_history}

        Human: {human_input}
        Alice:"""

        prompt = PromptTemplate(
            input_variables=["chat_history", "human_input", "instruction"],
            template=template
        )

        memory = ConversationBufferWindowMemory(memory_key="chat_history", ai_prefix="Alice", input_key="human_input",
                                                k=6)

        llm_chain = LLMChain(
            llm=llm,
            prompt=prompt,
            memory=memory,
        )
        self.llm_chain = llm_chain

    def chat(self, human_input):
        return self.llm_chain.predict(human_input=human_input, instruction=self.instruction)


def make_ai21_chatbot(api_key: str) -> ChatBot:
    llm = AI21(ai21_api_key=api_key)
    return ChatBot(llm=llm)


def make_openai_chatbot(api_key: str) -> ChatBot:
    llm = OpenAI(openai_api_key=api_key)
    return ChatBot(llm=llm)


def get_chatbot_maker() -> dict[str, Callable]:
    return {"AI21": make_ai21_chatbot,
            "openAI": make_openai_chatbot}
