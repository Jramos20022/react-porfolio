import styles from './ProjectsStyles.module.css';
import Grammy from '../../assets/awards.png';
import Boat from '../../assets/boat.png'
import Nav from '../Nav/Nav';


function projects() {
  return <section id='projects' className={styles.container}> 
  <h1 className='sectionTitle'>Projects </h1>
  <div className={styles.projectsContainer}>
    <a href='https://brandondell.github.io/Actor-Query/' target='_blank'> 
    <img className='hover' src={Grammy} alt='Grammy Awards Trio' />
    <h3> Actor Query </h3>
    <p> Find your favorite actor and all their awards ever won!</p>
    </a>
    </div>
    <div className={styles.projectsContainer}>
    <a href='https://jramos20022.github.io/Justins-new-portfolio/' target='_blank'> 
    <img className='hover' src={Boat} alt='Boat' />
    <h3> Original Portfolio</h3>
    <p> My original basic porfolio.</p>
    </a>
    </div>
  </section>;
  
}

export default projects;
