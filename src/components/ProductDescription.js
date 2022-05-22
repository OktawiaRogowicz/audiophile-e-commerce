import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import Webpage from "./Webpage";

const Container = styled.div`

`

function ProductDesc() {
    return(
        <Container>
            Go back
        </Container>
    );
}

function ProductDescription() {

    return(
        <Webpage
            insideComponent={<ProductDesc/>}
        />
    );
}

export default ProductDescription;