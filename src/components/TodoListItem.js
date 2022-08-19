import styles from './TodoListItem.module.css'

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo
  return (
    <div className={styles.TodoListItem}>
      <div className={`${styles.checkbox} ${checked && styles.checked}`}>
        {checked ? (
          <i class="bi bi-emoji-smile-fill"></i>
        ) : (
          <i class="bi bi-emoji-neutral"></i>
        )}
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.remove}>
        <i class="bi bi-x-circle-fill"></i>
      </div>
    </div>
  )
}

export default TodoListItem
