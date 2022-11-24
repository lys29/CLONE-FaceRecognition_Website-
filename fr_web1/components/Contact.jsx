import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h5>Contact Information</h5>
                <p>Fill up the form and out team will get back to you within 24 hours.</p>
                <h6>+9220505743</h6>
                <h6>JCRED@gmail.com</h6>
                <h6>8XW8+2CH, Carlos Trinidad Ave, <br></br>Salawag, Dasmarinas, Cavite</h6>
                <a href='/Home'><img src='/images/Logo.png'/></a>
            </div>
            <div className={styles.right}>
                <div>
                    <h5>First Name</h5>
                    <input type="Name"></input>
                    <h5>Email</h5>
                    <input type="Email"></input>
                    <h5>Message</h5>
                    <input type="Text" placeholder="Write your message"></input>
                </div>
                <div>
                    <h5>Last Name</h5>
                    <input type="Name"></input>
                    <h5>Phone</h5>
                    <input type="Num"></input>
                </div>
            </div>
        </div>
    )
}

export default Contact;