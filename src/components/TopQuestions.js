import styled from 'styled-components'
import Question from './Question';

const QuestionPanel = styled.div`
    width: 1fr;
    background-color: #000;
    color: white;
    padding: 50px;
    border-radius: 10px;
    margin-top: 50px;
    display: grid;
    grid-row-gap: 30px;
    
`;

function TopQuestions() {
  return (
    <QuestionPanel>
        <h2>Top Questions:</h2>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
    </QuestionPanel>
  )
}

export default TopQuestions