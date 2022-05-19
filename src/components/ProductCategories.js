import styled from "styled-components";
import ProductCategory from "./ProductCategory";

import headphonesImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

function ProductCategories() {
    return(
        <Container>
            <ProductCategory categoryName="Headphones" categoryImage={headphonesImage}/>
            <ProductCategory categoryName="Speakers" categoryImage={speakersImage}/>
            <ProductCategory categoryName="Earphones" categoryImage={earphonesImage}/>
        </Container>
    );
}

export default ProductCategories;