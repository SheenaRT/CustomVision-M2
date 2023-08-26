import styles from '../components/NavbarST.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';


export default function NavbarST() {
  
    // $(document).ready(function () {
    //     // Select the hamburger icon by its ID
    //     const $barIcon = $('#bar_icon');
        
    //     // Select the menu by its class
    //     const $menu = $('.nav_menu');
    
    //     // Add a click event handler to the hamburger icon
    //     $barIcon.on('click', function () {
    //       // Toggle the 'show' class on the menu
    //       $menu.toggleClass('show');
    //     });
    //   });
    
  return (
    <div className={styles.nav_bar}>
      <nav>
        <label className={styles.logo}>Turners - Find Your Car</label>

        <ul className={styles.nav_menu}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Feedback</a>
          </li>
        </ul>
        <label id={styles.bar_icon}>
        <FontAwesomeIcon icon={faBars} />
        </label>
      </nav>
    </div>
  );
}