import styles from './TodoListItem.module.css'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo
  return (
    <div className={styles.TodoListItem}>
      <div
        className={`${styles.checkbox} ${checked && styles.checked}`}
        onClick={() => onToggle(id)}
      >
        {checked ? (
          <i className="bi bi-emoji-smile-fill"></i>
        ) : (
          <i className="bi bi-emoji-neutral"></i>
        )}
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.remove} onClick={() => onRemove(id)}>
        <i className="bi bi-x-circle-fill"></i>
      </div>
    </div>
  )
}

export default TodoListItem
