import styles from './Start.module.css';
import Navbar from './Navbar.jsx';
import Button from './Button.jsx';

const Start = () =>{
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <ul>
                        <li className={styles.con1}>
                            <ul>
                                <h3>Attendance</h3>
                                <Button variant='primary'>Date: 11-9-22</Button>
                            </ul>
                        </li>
                    </ul>
                    <div>
                            <img src='/images/attendance.png'/>
                    </div>
                    <div className={styles.save}>
                        <Button variant='primary'>Save</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start;