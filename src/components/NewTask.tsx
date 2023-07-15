import styles from './NewTask.module.css'
import teste from '../../public/images/plus.svg'

export function NewTask() {
    return(
        <div className={styles.container}>
            <div className={styles.newTask}>
                <input type="text" />
                <button>
                    Criar 
                    <img src={teste} />
                </button>
            </div>
        </div>
        
    )
}