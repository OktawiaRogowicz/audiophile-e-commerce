import styled from "styled-components";
import CardCategory from "./CardCategory";

import headphonesImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 425px){
        flex-direction: column;
    }
`

function CardCategories() {
    return(
        <Container>
            <CardCategory categoryName="Headphones" categoryImage={headphonesImage}/>
            <CardCategory categoryName="Speakers" categoryImage={speakersImage}/>
            <CardCategory categoryName="Earphones" categoryImage={earphonesImage}/>
        </Container>
    );
}

export default CardCategories;