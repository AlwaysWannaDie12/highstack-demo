import styled from 'styled-components'
import Question from './Question';
import {Container} from "@mui/material";


const QuestionPanel = styled.div`
    padding: 0px 50px;
    border-radius: 10px;
    display: grid;
    grid-row-gap: 30px;
    overflow: scroll;
    
`;


function TopQuestions() {
  return (
    
    <Container variant="fixed" 
      sx={{
        width: '65%',
        height: '70%',
        bgColor: '#082032',
        color: 'white',
        padding: '50px',
        borderRadius: '10px',
        marginTop: '50px',
        display: 'grid',
        gridRowGap: '30px',
        position: 'absolute',
      }}
    >
        <h2>Top Questions:</h2>
        <Container variant="fixed"
        sx={{
          padding: '0px 50px',
          borderRadius: '10px',
          display: 'grid',
          gridRowGap: '30px',
          overflow: 'scroll',
        }}>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
        </Container>
        
    </Container>
  )
}

export default TopQuestions