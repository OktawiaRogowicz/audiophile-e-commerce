import styled from "styled-components";
import portraitDesktop from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-best-gear.jpg"
import portraitTablet from "../audiophile-ecommerce-website/starter-code/assets/shared/tablet/image-best-gear.jpg"

const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`

const HalfContainer = styled.div`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    order: 1;
    
    @media (max-width: 768px) {
        order: 2;
    }

    h2 span {
        color: var(--orange);
    }

    img {
        width: 100%;
        border-radius: 0.5rem;
        content: url("${portraitDesktop}");

        @media (max-width: 768px) {
            content: url("${portraitTablet}");
        }
    }

    div {
        margin: 0 5rem 0 5rem;

        @media (max-width: 768px) {
            margin: 2rem 4rem 0 4rem;
        }
    }

    & + & {
        order: 2;

        @media (max-width: 768px) {
            order: 1;
        }
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
                <img/>
            </HalfContainer>
        </Container>
    );
}

export default AboutCompany;