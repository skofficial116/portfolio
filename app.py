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
        /* General styles */
        body {
            background-color: #f7f9fc;
        }
        .main-title {
            font-size: 3em;
            color: #1E90FF;
            font-weight: bold;
        }
        .sub-title {
            font-size: 1.8em;
            color: #4B0082;
            margin-bottom: 20px;
        }
        .section-title {
            font-size: 2em;
            color: #FF4500;
            margin-top: 40px;
            margin-bottom: 20px;
            border-bottom: 3px solid #FF4500;
            padding-bottom: 10px;
        }
        .skills-button {
            background-color: #FF6347;
            color: white;
            border: none;
            padding: 10px;
            font-size: 1em;
            cursor: pointer;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        .skills-button:hover {
            background-color: #FF4500;
        }
        .project, .certification {
            background-color: #F0F8FF;
            padding: 15px;
            margin: 10px 0;
            border-radius: 10px;
        }
        .project {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .certification {
            background-color: #F5FFFA;
            border-left: 5px solid #32CD32;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            color: #808080;
        }
    </style>
""", unsafe_allow_html=True)

# Layout
c1, c2 = st.columns([1, 1.2])

with c1:
    st.markdown('<div class="main-title">Hi there,</div>', unsafe_allow_html=True)
    st.markdown('<div class="sub-title">I am <span style="color:blue;">Vighnesh Singhal</span></div>', unsafe_allow_html=True)
    st.markdown('A Computer Science Engineering student with a passion for coding and AI. I am always eager to tackle new challenges and contribute to innovative projects. 💻✨')
    
    st.markdown('<div class="section-title">Skills</div>', unsafe_allow_html=True)
    
    s1, s2, s3 = st.columns(3)
    with s1:
        st.button("Python", key='python_button')
        st.write('Streamlit, Langchain, Tkinter')
    with s2:
        st.button("Java", key='java_button')
        st.write("JDBC, JVM")
    with s3:
        st.button("C++", key='cpp_button')
    
    st.button("Operating Systems", key='os_button')
    st.write("Windows, Linux")
    st.button("Platforms", key='platform_button')
    st.write("Dev C++, VS Code, CodeBlocks, PyCharm, Git Bash, GitHub, VirtualBox, Google Colab")

with c2:
    st.image(image)

# Projects Section
st.markdown('<div class="section-title">Projects</div>', unsafe_allow_html=True)
with st.spinner(text="Building project timeline..."):
    with open('time.json', "r") as f:
        data = f.read()
        timeline(data, height=500)

# Certifications Section
st.markdown('<div class="section-title">Certifications</div>', unsafe_allow_html=True)
certifications = [
    "Python Programming Course (Blaze Forge)",
    "Python Basics (HackerRank)",
    "NSS B Certificate (National Service Scheme)"
]
for cert in certifications:
    st.markdown(f'<div class="certification">{cert}</div>', unsafe_allow_html=True)




st.markdown('<div class="section-title">Contact</div>', unsafe_allow_html=True)

contact_form = '''
<form action="https://formsubmit.co/vighneshsinghal@gmail.com" method="POST" style="display:flex; flex-direction:column; gap:10px; max-width:400px; margin:auto;">
    <input type="text" name="name" placeholder="Your Name" required style="padding:10px; font-size:16px; border:1px solid #ccc; border-radius:5px;">
    <input type="email" name="email" placeholder="Your Email" required style="padding:10px; font-size:16px; border:1px solid #ccc; border-radius:5px;">
    <textarea name="message" placeholder="Your Message" rows="4" style="padding:10px; font-size:16px; border:1px solid #ccc; border-radius:5px;"></textarea>
    <button type="submit" style="padding:10px; font-size:16px; color:white; background-color:#1E90FF; border:none; border-radius:5px; cursor:pointer;">
        Send
    </button>
</form>
'''
c1, c2 = st.columns(2)
with c1:
    st.markdown(contact_form, unsafe_allow_html=True)

# Resume Download Button
st.markdown('<div class="section-title">Resume</div>', unsafe_allow_html=True)

with open("vighnesh_resume.pdf", "rb") as file:
    st.download_button(
        label="📄 Download Resume",
        data=file,
        file_name="vighnesh_resume.pdf",
        mime="application/pdf",
    )

# Footer
st.markdown("<hr>", unsafe_allow_html=True)
st.markdown('<div class="footer">Let\'s connect and create something amazing together! 🚀</div>', unsafe_allow_html=True)
