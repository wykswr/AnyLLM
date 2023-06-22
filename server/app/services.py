from langchain.chains import LLMChain
from langchain.llms.ai21 import AI21
from langchain.memory import ConversationBufferMemory
from langchain.prompts.prompt import PromptTemplate


class AI21ChatBot:
    def __init__(self, api_key):
        template = """
        You are a Chatbot.
        Your goal is to chat with a human.

        {chat_history}
        Human: {human_input}
        Chatbot:"""

        prompt = PromptTemplate(
            input_variables=["chat_history", "human_input"],
            template=template
        )

        memory = ConversationBufferMemory(memory_key="chat_history", ai_prefix="Chatbot")

        llm_chain = LLMChain(
            llm=AI21(ai21_api_key=api_key),
            prompt=prompt,
            memory=memory
        )
        self.llm_chain = llm_chain

    def chat(self, human_input):
        return self.llm_chain.predict(human_input=human_input)
