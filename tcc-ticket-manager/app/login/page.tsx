import styles from './style.module.css'
import TextBox from '@/components/TextBox/index'


export default function login() {
    return (
        <div className={styles.loginBackground}>
            <TextBox id="Login" placeholder='Digite seu login'/>
            <TextBox id="Password" placeholder='Digite sua senha'/>
        </div>
    );
}