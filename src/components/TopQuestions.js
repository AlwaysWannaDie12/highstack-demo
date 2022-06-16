import styled from 'styled-components'
import Question from './Question';

const QuestionPanel = styled.div`
    padding: 0px 50px;
    border-radius: 10px;
    display: grid;
    grid-row-gap: 30px;
    overflow: scroll;
    
`;

const TopQuestionPanel = styled.div`
    width: 65%;
    height: 70%;
    background-color: #082032;
    color: white;
    padding: 50px;
    border-radius: 10px;
    margin-top: 50px;
    display: grid;
    grid-row-gap: 30px;
    position: absolute;
    
`;

function TopQuestions() {
  return (
    
    <TopQuestionPanel>
        <h2>Top Questions:</h2>
        <QuestionPanel>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
        </QuestionPanel>
        
    </TopQuestionPanel>
  )
}

export default TopQuestions