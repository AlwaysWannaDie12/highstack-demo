import styled from "styled-components";
import QuestionDetails from "./QuestionDetails";
import QuestionTitle from "./QuestionTitle";

const QuestionLine = styled.div`
    width: 100%;
    background-color: #334756;
    padding: 10px;
    display: grid;
    grid-column-gap: 100px;
    grid-template-columns: 100px 300px;
    border-radius: 10px;

`;

function Question() {
  return (
    <QuestionLine>
        <QuestionDetails/>
        <QuestionTitle/>
    </QuestionLine>
  )
}

export default Question