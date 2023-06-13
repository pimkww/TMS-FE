import React from 'react'
import { styled } from 'styled-components'
import Section from './Section';


function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backGroundImg="model-s.jpg"
        leftButton="Custom order"
        rightButton="Exiting inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backGroundImg="model-y.jpg"
        leftButton="Custom order"
        rightButton="Exiting inventory"      
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backGroundImg="model-3.jpg"
        leftButton="Custom order"
        rightButton="Exiting inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backGroundImg="model-x.jpg"
        leftButton="Custom order"
        rightButton="Exiting inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backGroundImg="solar-panel.jpg"
        leftButton="Order now"
        rightButton="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backGroundImg="solar-roof.jpg"
        leftButton="Order now"
        rightButton="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backGroundImg="accessories.jpg"
        leftButton="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`