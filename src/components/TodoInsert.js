import React from 'react'
import styles from './TodoInsert.module.css'

function TodoInsert() {
  return (
    <form className={styles.TodoInsert}>
      <input placeholder="Write down what you need to do" />
      <button type="submit">
        <i class="bi bi-apple"></i>
      </button>
    </form>
  )
}

export default TodoInsert
