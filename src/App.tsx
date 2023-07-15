import { Comment, Task } from './components/Task.tsx'
import { Header } from './components/Header.tsx'
import { NewTask } from './components/NewTask.tsx'

import './global.css'

const task:Task[] = [
  {
    id: 1,
    content: "lorem impsum"
  },
  {
    id: 1,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo corrupti eius aliquam distinctio explicabo fugiat alias voluptatibus beatae nisi eligendi quo atque dolorum, consequatur facere maiores blanditiis quaerat rerum? Perspiciatis."
  },
];
function App() {
  return (
    <div>
      <Header />
      <NewTask />
      {task.map(task => {
        return (
          <Task 
            id={task.id}
            content={task.content}
          />
        )
      })}
    </div>
  )
}

export default App