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
//   min-width: 300px;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardList = styled.div`
// background-color: #f0f0f0;
//   border-radius: 8px;
//   padding: 16px;
//   margin: 8px;
//   width: calc(50% - 16px); /* 2 cards in a row with margin space */
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   @media (min-width: 768px) {
//     width: calc(25% - 16px); /* 4 cards in a row with margin space on desktop */
//   }
background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardImage=styled.img`
width:100%;
height:auto
`

// export const CardContainer = styled.div`
// // display: flex;
// //   flex-wrap: wrap;
// //   justify-content: space-between;

// // display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// //   gap: 16px;
// box-sizing: border-box;
// `;

// export const CardColumn =styled.div`
// float: left;
// //   width: 25%;
//   padding: 10px;
//   height: 300px;
// `

// // export const CardRow = css`
// //   &:after {
//     // content: "";
//     // display: table;
//     // clear: both;
// // }`;

// export const CardRow = styled.div`
// ${() =>
//   css` &:after{
//     content: "";
//     display: table;
//     clear: both;
//   }
//   `}
// `;

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