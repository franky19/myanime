import styled from '@emotion/styled';

export const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px;
//   width: 100%;
`;

export const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  margin-left:auto;
  margin-right:auto;
//   min-width: 300px;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardList = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display:block;
  &:hover {
   cursor:pointer;
   background-color:#f7f7f7;
  }
  @media (max-width: 768px) {
    display:none;
    // width: calc(25% - 16px); /* 4 cards in a row with margin space on desktop */
  }
`;


export const CardImage=styled.img`
width:100%;
height:auto
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  box-sizing: border-box;
`;

export const CardColumn = styled.div`
  padding: 10px;
  height: 300px;
`;

export const CardRow = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const CardDescription=styled.div`
width:100%;
`

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h3`
  margin: 10px;
  text-align:center;
`;

export const CardText = styled.p`
  margin: 8px 0;
`;