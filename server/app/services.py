from langchain.chains import LLMChain
from langchain.llms.ai21 import AI21
from langchain.memory import ConversationBufferMemory
from langchain.prompts.prompt import PromptTemplate


class AI21ChatBot:
    LLM = "AI21"

    def __init__(self, api_key):
        instruction = """
        Your name is Alice, an assistant to provide helpful information to a human user.
        You should reply based on the chat history and the latest human input, but you can't expose the chat history to the human.
        """

        template = instruction + """
        {chat_history}
        
        Human: {human_input}
        Alice:"""

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
