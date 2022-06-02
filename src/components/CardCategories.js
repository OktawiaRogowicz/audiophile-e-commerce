import styled from "styled-components";
import CardCategory from "./CardCategory";
import { NavLink } from "react-router-dom";

import headphonesImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 425px){
        flex-direction: column;
    }
`

function CardCategories() {
    return(
        <Container>
            <NavLink to={"/headphones"}>
                <CardCategory categoryName="Headphones" categoryImage={headphonesImage}/>
            </NavLink>
            <NavLink to={"/speakers"}>
                <CardCategory categoryName="Speakers" categoryImage={speakersImage}/>
            </NavLink>
            <NavLink to={"/earphones"}>
                <CardCategory categoryName="Earphones" categoryImage={earphonesImage}/>
            </NavLink>
        </Container>
    );
}

export default CardCategories;