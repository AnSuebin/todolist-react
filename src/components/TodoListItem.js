import styles from './TodoListItem.module.css'

const TodoListItem = () => {
  return (
    <div className={styles.TodoListItem}>
      <div className={styles.checkbox}>
        <i class="bi bi-emoji-neutral"></i>
        <div className={styles.text}>Todo</div>
      </div>
      <div className={styles.remove}>
        <i class="bi bi-x-circle-fill"></i>
      </div>
    </div>
  )
}

export default TodoListItem
