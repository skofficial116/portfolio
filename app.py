import streamlit as st
from streamlit_timeline import timeline
from PIL import Image

# Set page config
st.set_page_config(page_title="Vighnesh Singhal's Portfolio", layout="wide", page_icon="👨‍🔬")

# Load image
image = Image.open("Untitled design.png")
nss=Image.open("nss.jpg")
tbi=Image.open("tbi.png")
cont=Image.open("cont.png")
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
    s1, s2 = st.columns(2)
    with s1:
        st.link_button("Linked IN","https://www.linkedin.com/in/vighnesh-singhal-33b792244/",type="primary")
    with s2:
        st.link_button("Git Hub","https://github.com/Vig7037",type="primary")
# Experience Section
st.markdown('<div class="section-title">Experience</div>', unsafe_allow_html=True)
st.image(nss)
st.markdown('''<div class="experience">
    <h3>NSS Volunteer, Graphic Era Deemed to be University (Oct 2022 - Feb 2024)</h3>
    <p>Coordinated numerous campus events during tenure as NSS Volunteer, achieving a 30% rise in event attendance and earning accolades for exceptional organizational skills and community engagement.</p>
</div>''', unsafe_allow_html=True)
st.image(tbi)
st.markdown('''<div class="experience">
    <h3>Research Intern, Technology Business Incubator (TBI), Graphic Era Deemed to be University (July 2024 - October 2024)</h3>
    <p>Engaged in research tasks with a focus on innovation and technology development, contributing to various projects within a hybrid working environment. Potential for extension based on performance.</p>
</div>''', unsafe_allow_html=True)
st.image("innofusion_winning.jpg", use_column_width=True)
st.markdown('''
<div class="experience">
    <h3>🏔️ Uttarakhand Trip Planner (April 2024 - August 2024)</h3>
    <p>
        Developed an interactive web application to assist users in planning personalized trips to Uttarakhand. 
        The app features itinerary generation, local attractions, and adventure recommendations using cutting-edge AI technologies.
    </p>
    <ul>
        <li>Built with <strong>Python</strong> and <strong>Streamlit</strong>, offering a user-friendly experience.</li>
        <li>Integrated <strong>NVIDIA AI</strong> for intelligent recommendations and chatbot functionalities.</li>
        <li>Implemented <strong>custom CSS</strong> for visually engaging cards displaying local attractions, cuisines, and activities.</li>
        <li>Leveraged <strong>LangChain</strong> and <strong>FAISS</strong> for document loading and vector embedding.</li>
    </ul>
    <p><strong>Achievement:</strong> Delivered a fully functional travel planning tool that garnered positive feedback for its innovative approach.</p>
</div>
''', unsafe_allow_html=True)

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
    "Azure AI Fundamentals",
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

with c2:
    st.image(cont)
# Resume Download Button
st.markdown('<div class="section-title">Resume</div>', unsafe_allow_html=True)

with open("Vighnesh_resume.pdf", "rb") as file:
    st.download_button(
        label="📄 Download Resume",
        data=file,
        file_name="Vighnesh_resume.pdf",
        mime="application/pdf",
    )

# Footer
st.markdown("<hr>", unsafe_allow_html=True)
st.markdown('<div class="footer">Let\'s connect and create something amazing together! 🚀</div>', unsafe_allow_html=True)
