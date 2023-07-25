import React from 'react';
import styled from '@emotion/styled';

interface CardProps {
  imageSrc: string;
  title: string;
  textEpisode: string;
  textStatus:string;
  updatedAt: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
display:none;
&:hover {
    cursor:pointer;
    background-color:#f7f7f7;
}
@media (max-width: 768px) {
    display:block;
    // width: calc(25% - 16px); /* 4 cards in a row with margin space on desktop */
  }

`;

const CardImage = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h5`
  margin: 0;
`;

const CardText = styled.p`
  margin: 8px 0;
`;

const CardTimestamp = styled.small`
  color: #6c757d;
`;

const CardRow = styled.div`
display: flex;
flex-direction: row;
border: 1px solid #ccc;
border-radius: 4px;
overflow: hidden;
margin-bottom: 16px;
`

const HorizontalCard: React.FC<CardProps> = ({ onClick,imageSrc, title, textEpisode,textStatus, updatedAt }) => {
    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };
    return (
    <CardContainer onClick={handleClick}>
        <CardRow>
            <CardImage src={imageSrc} alt="..." />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardText>{textEpisode}</CardText>
                <CardText>{textStatus}</CardText>
                <CardTimestamp>Last Update: {updatedAt}</CardTimestamp>
            </CardContent>
        </CardRow>
    </CardContainer>
    // <CardContainer>
    //   <CardImage src={imageSrc} alt="..." />
    //   <CardContent>
    //     <CardTitle>{title}</CardTitle>
    //     <CardText>{text}</CardText>
    //     <CardTimestamp>Status: {updatedAt}</CardTimestamp>
    //   </CardContent>
    // </CardContainer>
  );
};

export default HorizontalCard;
