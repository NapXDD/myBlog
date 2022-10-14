import styles from './HomePage.module.scss'

function HomePage(){
    return(
        <div className={styles.layout_container}>
            <div className={styles.introduction_container}>
                <div className={styles.introduction_entry}>
                    <div className={styles.introduction_detail}>
                        <p className={styles.introduction_info}>
                            Hi there, just a blog to practice my web coding skill
                            <br/>
                            I'm <strong>Khoa "Nap" Do Le Anh </strong>, currently studying at UIT
                        </p>
                        <p className={styles.introduction_info}>
                            A child that never touch a line of code somehow 
                            end up wanted to be a developer
                        </p>
                    </div>   
                    <span className={styles.Circle}>
                        <img alt='ElyNambaOne' className={styles.CircleImage} src={'/assets/images/HomePage/ElyNambaOne.jpg'}/>
                    </span>
                </div>
            </div>
        </div> 
    )
}

export default HomePage