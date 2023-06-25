from langchain.chains import LLMChain
from langchain.llms.ai21 import AI21
from langchain.memory import ConversationBufferMemory
from langchain.prompts.prompt import PromptTemplate


class AI21ChatBot:
    LLM = "AI21"

    def __init__(self, api_key):
        template = """
        Your name is Alice. You are a assistant to provide helpful information to human.
        Your gender is female.

        {chat_history}
        Human: {human_input}
        Alex:"""

        prompt = PromptTemplate(
            input_variables=["chat_history", "human_input"],
            template=template
        )

        memory = ConversationBufferMemory(memory_key="chat_history", ai_prefix="Alice")

        llm_chain = LLMChain(
            llm=AI21(ai21_api_key=api_key),
            prompt=prompt,
            memory=memory
        )
        self.llm_chain = llm_chain

    def chat(self, human_input):
        return self.llm_chain.predict(human_input=human_input)
