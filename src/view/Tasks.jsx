import {useState} from 'react'
import styled from 'styled-components'
import uuid from 'react-uuid'
import Task from './Task'


export default function Tasks() {
    const [currentTask,setCurrentTask] = useState('')
    const [tasks,setTasks] = useState([])

    const onSabmit = (event) => {
        event.preventDefault()
        setTasks([...tasks,{
            content:currentTask,
            id:uuid()
        }])
        setCurrentTask('')
    }

    const onChange = (event) =>{
        setCurrentTask(event.target.value)
    }

  return (
    <div>
        <Form action="submit">
            <Input type="text" placeholder='New Task' onChange={onChange} value={currentTask}/>
            <Submit type="submit" value='Submit' onClick={onSabmit} />
        </Form>
        <List>{tasks.map(task => {
           return( 
            <Task key={task.id} task={task} />
           )
        })}
        </List>
    </div>
  )
}

const List = styled.ul`
    list-style:none;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
`

const Submit = styled.input`
    background-color: #ff6954;
    border: none;
    border-radius: 10px;
    color: white;
    padding:0 2rem;
    margin-left: 1rem;
`

const Form = styled.form`
    display: flex;
    height: 4rem;
    margin-top:1rem;
`
const Input = styled.input`
    width: 100%;
    height: 4rem;
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
`
