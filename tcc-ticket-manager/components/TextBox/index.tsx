import styles from './style.module.css'

/*
interface TextBoxProps {
    id: string,
    placeholder: string
}*/

export default function TextBox(props:any) {
    return (
        <div className={styles.text_box}>
            <label>{props.label}:</label>
            <input id="email" placeholder={props.placeholder}></input>

            <script src='./script.js'></script>
        </div>
    );
}