import styles from './NavStyles.module.css';
import Helm from '../../../public/helm.png'

function Nav() {
  return <section id='nav' className={styles.navBar}>
    <div className='links'>
        <a href='/'><ul>About Me</ul></a>
        <a href='/'><ul>Projects</ul></a>
        <a href='/'><ul>Contact Me</ul></a>
    </div>

  </section>
  
}

export default Nav
