import './App.css'
import { Todo } from './pages/Todo'

export const App = () => {
  return(
    <>
      <div className='flex flex-col items-center bg-gray-400'>
        <Todo />
      </div>
    </>
  )
}


