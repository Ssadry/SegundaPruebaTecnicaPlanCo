import './App.css';
import styled from 'styled-components'
import Screen from './components/screen'

const App = () => <Container><Screen/></Container>

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background-color: #E5E5E5;

`