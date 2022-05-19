import styled from "styled-components";
import portrait from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-best-gear.jpg"

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const HalfContainer = styled.div`
    width: 100%;
    background-color: pink;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img {
        height: 36.75rem;
        border-radius: 0.5rem;
    }
`

function AboutCompany() {
    return(
        <Container>
            <HalfContainer>
                <div>
                    <h2>Bringing you the <span>best</span> audio gear</h2>
                    <p>
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                        rooms available for you to browse and experience a wide range of our products. Stop by our store 
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                        audio equipment.
                    </p>
                </div>
            </HalfContainer>
            <HalfContainer>
                <img src={portrait}></img>
            </HalfContainer>
        </Container>
    );
}

export default AboutCompany;