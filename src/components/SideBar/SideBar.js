import clsx from 'clsx'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import styles from './SideBar.module.scss'

function SideBar(){

    const [show, setShow] = useState(styles.hide)

    const handleCloseMenu = () => {
        setShow(styles.hide)
    }

    const handleOpenMenu = () => {
        setShow(styles.show)
    }

    return(
        <>
        <img 
            src='/assets/images/MenuButton/OpenMenuButton.png'
            alt='OpenMenuButton' 
            className={styles.menuIcon}
            onClick = {handleOpenMenu}
        />
        <nav className={clsx(styles.menu, show)}>
            <img 
                src='/assets/images/MenuButton/CloseMenuButton.png' 
                alt='CloseMenuButton' 
                className={styles.menu_Close}
                onClick = {handleCloseMenu}
            />
            <div className={styles.menu_List}>
                <Link 
                    to = '/'
                    className={clsx(styles.menu_List_Card, styles.Home)}
                    onClick = {handleCloseMenu}
                >
                    <div className={clsx(styles.menu_List_Card, styles.Cover)}></div>
                    <div className={styles.menu_List_Card_Text}>
                        Home &gt;
                    </div>
                </Link>
                
                <Link 
                    to = '/ContactPage'
                    className={clsx(styles.menu_List_Card, styles.Contact)}
                    onClick = {handleCloseMenu}
                >
                    <div className={clsx(styles.menu_List_Card, styles.Cover)}></div>
                    <div className={styles.menu_List_Card_Text}>
                        Contact &gt;
                    </div>
                </Link>

                <Link 
                    to = '/SlapKyarunPage'
                    className={clsx(styles.menu_List_Card, styles.SlapKyarun)}
                    onClick = {handleCloseMenu}
                >
                    <div className={clsx(styles.menu_List_Card, styles.Cover)}></div>
                    <div className={styles.menu_List_Card_Text}>
                        Slap Kyarun &gt;
                    </div>
                </Link>

                <Link 
                    to = '/BlogPage'
                    className={clsx(styles.menu_List_Card, styles.Blog)}
                    onClick = {handleCloseMenu}
                >
                    <div className={clsx(styles.menu_List_Card, styles.Cover)}></div>
                    <div className={styles.menu_List_Card_Text}>
                        Blog &gt;
                    </div>
                </Link>
                
            </div>   
        </nav>
        </>
    )
}

export default SideBar