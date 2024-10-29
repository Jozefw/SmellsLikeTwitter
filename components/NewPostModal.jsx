import styles from './NewPostModal.module.css';

export default function NewPostModal(props){
    return(
        <>
            <div className={styles.backdrop} onSubmit={props.handleModalChange}>
                <dialog open className={styles.modal}>
                    {props.children}
                </dialog>
            </div>
        </>
    )
}