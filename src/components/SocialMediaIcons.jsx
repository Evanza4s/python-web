import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/evanza-agusta-setiawan-63540621b/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedin} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/evanzaagusta.setiawan?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={facebook} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/_vanzasetiawan_"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instagram} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;