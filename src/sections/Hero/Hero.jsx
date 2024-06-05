import styles from './HeroStyles.module.css';
import heroImg from '../../assets/me.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkdinLight from '../../assets/linkedin-light.svg';
import linkdinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'
import Nav from '../Nav/Nav';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const linkdinIcon = theme === 'light' ? linkdinLight : linkdinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

  return ( 
  <section id='hero'className= {styles.container}>
    <div className={styles.colorModeContainer}> 
        <img className= {styles.hero} src={heroImg} alt="" /> 
        <img className= {styles.colorMode} src={themeIcon} alt='Color mode icon' onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
        <h1>
            Justin Ramos
        </h1>
        <h2>
            Full Stack Developer
        </h2>
        <span>
            <a href='https://x.com/Alejandro_Tech2' target="_blank">
                 <img src={twitterIcon} alt="twitter Icon" />
            </a>
            <a href='https://github.com/Jramos20022' target="_blank">
                 <img src={githubIcon} alt="github Icon" />
            </a>
            <a href='https://linkedin.com/in/justin-ramos-841123217' target="_blank">
                 <img src={linkdinIcon} alt="Linkden Icon" />
            </a>
        </span>
            <p className={styles.description}> Hello! I am a Disney World cast member who is a captain of the ferry boats at Magic Kingdom purssuing coding and down below you will find examples of my work! </p>
        <a href={CV} download>
            <button className='hover'>
                RESUME
            </button>
        </a>
    </div>
  </section>
  )
}

export default Hero;
