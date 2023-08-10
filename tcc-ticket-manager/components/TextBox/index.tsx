import styles from './style.module.css'


interface TextBoxProps {
    id: string,
    placeholder: string
}

export default function TextBox(props:TextBoxProps) {
    return (
        <div className="text-box">
            <label>{props.id}:</label>
            <input placeholder={props.placeholder}></input>
        </div>
    );
}