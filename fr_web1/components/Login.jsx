import styles from './Login.module.css';
import Button from './Button.jsx';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Log in</h1>
                <div>
                    <input type="Text" placeholder="Email or Username"></input>
                </div>
                <div>
                    <input type="Text" placeholder="Password"></input>
                </div>
                <a href='/Start1'><Button variant='primary'>Log in</Button></a>
            </div>
            <div className={styles.right}>
                <img src='/images/Newa.png'/>
            </div>
        </div>
    );
};

export default Login;