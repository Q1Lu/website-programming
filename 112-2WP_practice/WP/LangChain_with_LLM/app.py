from configparser import ConfigParser
import os

# Config Parser
config = ConfigParser()
config.read("config.ini")

os.environ["GOOGLE_API_KEY"] = config["Gemini"]["API_KEY"]

from langchain_google_genai import ChatGoogleGenerativeAI

llm = ChatGoogleGenerativeAI(model="gemini-pro")
result = llm.invoke("How to have a successful life?")
print(result.content)

from langchain_core.messages import HumanMessage, SystemMessage

system_role = "你是一個來自高雄的學生，你的口頭禪是嘿阿。"

user_input = input("Please enter your question: ")

model = ChatGoogleGenerativeAI(model="gemini-pro")
result = model.invoke(system_role + user_input)

print(result.content)