import styled from "styled-components";

const StatRow = styled.div`
    color: #000;
    display: grid;
    grid-template-columns: 60px 60px 60px;
    grid-column-gap: 5px;
`;

const Stat = styled.div`
    justify-items: center;
    background-color: #FF4C29;
    padding: 5px;
    font-size: 12px;
    display: grid;
    grid-row-gap: 0px;
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
`;

const Val = styled.span`
    font-size: 18px;
`;



function QuestionDetails() {
  return (
    <StatRow>
        <Stat>
            <Val>6</Val>
            Views
        </Stat>
        <Stat>
            <Val>6</Val>
            Likes
        </Stat>
        <Stat>
            <Val>6</Val>
            Answers
        </Stat>
    </StatRow>
    
  )
}

export default QuestionDetails