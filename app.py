import streamlit as st
from streamlit_timeline import timeline
from PIL import Image
# Set page config
st.set_page_config(page_title="Vighnesh Singhal's Portfolio", layout="wide", page_icon="👨‍🔬")
# Load image
image = Image.open("Untitled design.png")
# Custom CSS for better styling
st.markdown("""
    <style>
        .main-title {
            font-size: 3em;
            color: #1E90FF;
        }
        .sub-title {
            font-size: 1.5em;
            color: #4B0082;
        }
        .section-title {
            font-size: 2em;
            color: #FF4500;
        }
        .skills-button {
            background-color: #FF6347;
            color: white;
            border: none;
            padding: 10px;
            font-size: 1em;
            cursor: pointer;
        }
        .skills-button:hover {
            background-color: #FF4500;
        }
        .project {
            background-color: #F0F8FF;
            padding: 15px;
            margin: 10px 0;
            border-radius: 10px;
        }
        .certification {
            background-color: #F5FFFA;
            padding: 10px;
            margin: 5px 0;
            border-radius: 10px;
        }
    </style>
""", unsafe_allow_html=True)

c1,c2=st.columns(2)
with c1:
    st.markdown('<div class="main-title">Hi there,</div>', unsafe_allow_html=True)
    st.markdown('<div class="sub-title">I am <span style="color:blue;">Vighnesh Singhal</span></div>', unsafe_allow_html=True)
    st.markdown('A Computer Science Engineering student with a passion for coding and AI. I am always eager to tackle new challenges and contribute to innovative projects. 💻✨')
    st.markdown('<div class="section-title">Skills</div>', unsafe_allow_html=True)
    st.subheader("",divider="rainbow")

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
# Projects
st.markdown('<div class="section-title">Projects</div>', unsafe_allow_html=True)
st.subheader("",divider="rainbow")
with st.spinner(text="Building project timeline..."):
    with open('timeline.json', "r") as f:
        data = f.read()
        timeline(data, height=500)

# Certifications
st.markdown('<div class="section-title">Certifications</div>', unsafe_allow_html=True)
st.subheader("",divider="rainbow")
certifications = [
    "Python Programming Course (Blaze Forge)",
    "Python Basics (HackerRank)",
    "NSS B Certificate (National Service Scheme)"
]

for cert in certifications:
    st.markdown(f'<div class="certification">{cert}</div>', unsafe_allow_html=True)

# Footer
st.markdown("<hr>", unsafe_allow_html=True)
st.write("Let's connect and create something amazing together! 🚀")

