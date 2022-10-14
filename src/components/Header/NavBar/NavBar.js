import {Link} from 'react-router-dom'
import style from './NavBar.module.css'

function NavBar(){
    return(
        <>
        <nav className={style.NavBar}>
            <Link to="/">Home</Link>
            <Link to="/ContactPage">About me</Link>
            <Link to="/AboutMePage">News</Link>
        </nav>
      </>
    )
}

export default NavBar