import styles from "./ContactPage.module.scss";

function ContactPage() {
  return (
    <>
    <div className={styles.Layout_Container}>
        <div className={styles.Contact_Container}>
            <h1 className={styles.Text}>
              Feel free to have some chit chat if you have something to share
            </h1>
            <br />
            <div className={styles.Contact_Entry}>
              <div className={styles.SN_container}>
                <h1 className={styles.SN_Text}>Social network</h1>
                <div className={styles.SN_info}>
                  <a href="https://www.facebook.com/khoadole21/" target="_blank" rel="noreferrer" className={styles.SN_Text}>Facebook</a> 
                  <div className={styles.SN_Text}>Discord: Nap#7154</div> 
                  <a href="https://github.com/NapXDD" target="_blank" rel="noreferrer" className={styles.SN_Text}>Github</a>
                </div>
              </div>
              <div className={styles.Email_container}>
                <h1 className={styles.Contact_Text}>Email:</h1>
                <div className={styles.Email_info}>
                  <div className={styles.Contact_Text}>khoadole21@gmail.com</div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default ContactPage;
