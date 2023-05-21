import { useRouter } from "next/router";
import { Title } from "@/components/shared/Heading";
import Container from "@/components/shared/Container";
import BackgroundImage from "@/components/shared/BackgroundImage";
import Button from "@/components/shared/Button";
import { styled } from "styled-components";
import Flex from "@/components/shared/Flex";

export default function Page() {
  const router = useRouter()
  return(
    <BackgroundImage
      image='https://occ-0-55-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZlogqAf_6OfZxe1q0esZQSDAx9FjMiz6efN650Hx_b_GBAEfVQgwfDADqKxOwOBuioP_Ar29SV78ftyEczJWlFsuaJBdJe9_jNe.jpg?r=0a1'
      height='100vh'  
    >
      <Container>
        <Content>
          <Title color='#FFF'>Rick And Morty</Title>
          <Flex>
            <Button primary block>Play</Button>
            <Button block>My List</Button>
          </Flex>
        </Content>
      </Container>
    </BackgroundImage>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;