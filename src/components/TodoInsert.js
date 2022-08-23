import React, { useCallback, useState } from 'react'
import styles from './TodoInsert.module.css'

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('')

  const onChange = useCallback((event) => setValue(event.target.value), [])
  const onSubmit = useCallback(
    (event) => {
      onInsert(value)
      setValue('')
      event.preventDefault()
    },
    [onInsert, value]
  )

  return (
    <form className={styles.TodoInsert} onSubmit={onSubmit}>
      <input
        placeholder="Write down what you need to do"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <i className="bi bi-apple"></i>
      </button>
    </form>
  )
}

export default TodoInsert
