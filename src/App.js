import styled from 'styled-components'
import './index.css'
import Tasks from './view/Tasks'

function App() {
  return (
    <Main>
      <H1 className='headline'>Tasks Tracker</H1>
      <Tasks />
    </Main>
  );
}

export default App;


const Main = styled.div`
  background-color: #fef0ec;
  min-height: 100vh;
  height: 100%;
  max-width: 70rem;
  padding: 4rem 2.8rem ;
  margin: 0 auto ;
`

const H1 = styled.h1`
  font-size: 3.3rem;
`