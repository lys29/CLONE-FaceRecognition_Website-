import styles from './Aboutus.module.css';
import Navbar from './Navbar.jsx';
import Title2 from './Title2';

const Aboutus  = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div>
                    <h1>About Us</h1>
                    <p>Welcome To face recognition attendance checker.
Face recognition attendance checker is a Professional staticPlatform. Here we will provide you only interesting content, which you will like very much.
 We're dedicated to providing you the best of, with a focus on dependability and facial recognition. We're working to turn our passion for static into a booming online website. We hope you enjoy our static as much as we enjoy offering them to you.
We will keep posting more important posts on my Website for all of you. Please give your support and love. Thanks For Visiting Our Site Have a nice day!</p>
                </div>
                <div>
                    <img src='/images/aboutus.png'></img>
                </div>
            </div>
            <div>
                <Title2 />
            </div>
        </div>
    )
}

export default Aboutus;