import styles from './Newa.module.css';
import Button from './Button.jsx';

const Newa = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>Create your account</h1>
                    <div>
                        <input type="FName" placeholder="First Name"></input>
                        <input type="LName" placeholder="Last Name"></input>
                    </div>
                    <div>
                        <input type="Text" placeholder="Email"></input>
                    </div>
                    <div>
                        <input type="Text" placeholder="Password"></input>
                    </div>
                    <div>
                        <input type="Text" placeholder="Confirm Password"></input>
                    </div>
                    <div>
                        <input type="Text" placeholder="Search"></input>
                    </div>
                    <div>
                        <input type="Date" placeholder="Birthday 00/00/0000"></input>
                    </div>
                    <div>
                        <ul>
                            <a href='/Log'><Button variant='primary'>Log In instead</Button></a>
                            <Button variant='primary'>Submit</Button>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="/images/Newa.png"></img>
                </div>
            </div>
        </div>
    );
};

export default Newa;
