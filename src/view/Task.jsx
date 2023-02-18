import styled from 'styled-components'

export default function Task({task}) {
    const {id, content} = task
        return (
            <ListItem>
                <Label>
                    <input type="checkbox" name="task" id={id} />
                    <Span>{content}</Span>
                </Label>
             </ListItem>
        )
}


const Label = styled.label`
    font-size:1.8rem;
`

const ListItem = styled.li`
    margin-top:1rem;
`

const Span = styled.span`
    margin-left:1rem;
`