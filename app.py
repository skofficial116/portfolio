import streamlit as st
from streamlit_timeline import timeline
from PIL import Image
image=Image.open("Untitled design.png")
st.set_page_config(page_title='Vighnesh Singhal\'s portfolio', layout='wide',page_icon='👨‍🔬')
c1,c2=st.columns(2)
with c1:
    st.title('Hi there,')
    st.header('I am :blue[ Vighnesh Singhal ]')
    st.markdown('A Computer Science Engineering student with a passion for coding and AI. I am always eager to tackle new challenges and contribute to innovative projects. 💻✨')
    st.subheader("Skills",divider="rainbow")
    s1,s2,s3=st.columns(3)
    with s1:
        st.button("python")
        st.write('Streamlit, Langchain, Tkinter')
    with s2:
        st.button("Java")
        st.write("Jdbc, JVM")
    with s3:
        st.button("C++")
    st.button("Operating System")
    st.write(" Windows, Linux")
    st.button("Platforms")
    st.write("Dev C++, VS Code, CodeBlocks, Pycharm, Git Bash, GitHub, VirtualBox, Google Colab")
with c2:
    st.image(image)
st.subheader("Projects",divider="rainbow")
with st.spinner(text="Building line"):
    with open('timeline.json', "r") as f:
        data = f.read()
        timeline(data, height=500)
st.subheader("Certifications",divider="rainbow")
st.write('• Python Programming Course :blue[(Blaze Forge)]')
st.write('• Python Basics :blue[(HackerRank)]')
st.write('• NSS B Certificate :blue[(National Service Scheme)]')

