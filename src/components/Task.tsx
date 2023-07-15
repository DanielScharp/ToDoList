import styles from './Task.module.css'

export interface Task {
    id: number;
    content: string;
}

export function Comment(props:Task){
    return (
        <div className={styles.container}>
            <div className={styles.task}>
                {props.content}
            </div>
        </div>
    )
}