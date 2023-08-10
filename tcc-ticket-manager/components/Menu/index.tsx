import styles from './style.module.css'


interface MenuProps {
    id: string,
    placeholder: string
}

export default function TextBox(props:MenuProps) {
    return (
        <div className={styles.}>
            <label>{props.id}:</label>
            <input placeholder={props.placeholder}></input>
        </div>
    );
}