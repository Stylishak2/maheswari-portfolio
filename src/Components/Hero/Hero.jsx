import './Hero.css';
import mahi from "../../assets/mahi.png";
const Hero = () => {

  const openResume = () => {
  window.open("/Mahi77_resume.pdf", "_blank", "noopener,noreferrer");
};
  return (
    <div className='hero' id='home'>
     <img src= {mahi}/>

      <h1>I am Maheswari, Frontend Developer</h1>``

      <p>
        I am a React&Nextjs developer with experience building modern web applications
      </p>

      <div className='hero-action'>
        <div
  className="hero-connect"
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Contact Me
</div>

        <div className='hero-resume' onClick={openResume}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
