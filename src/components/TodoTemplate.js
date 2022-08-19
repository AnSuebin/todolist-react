import styles from './TodoTemplate.module.css'

const TodoTemplate = ({ children }) => {
  return (
    <div className={styles.TodoTemplate}>
      <div className={styles.appTitle}>Today's to-do list</div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default TodoTemplate
