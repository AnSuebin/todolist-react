import React from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리엑트 기초 공부하기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: true,
    },
  ])
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  )
}

export default App
