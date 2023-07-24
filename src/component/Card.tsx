import { Card, HorizontalScrollContainer } from "../styles/Card.styles"

const CardComponent = ()=>{
    return (
        <HorizontalScrollContainer>
        <Card>
          <h2>Card 1</h2>
          <p>This is card 1 content.</p>
        </Card>
        <Card>
          <h2>Card 2</h2>
          <p>This is card 2 content.</p>
        </Card>
        {/* Add more cards here */}
      </HorizontalScrollContainer>
    )
}

export default CardComponent