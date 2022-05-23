import React, { useState } from 'react';
import styled from "styled-components";
import SeeProductButton from "./buttons/SeeProduct";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`

const HalfContainer = styled.div`
    height: fit-content;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;

    h2, h5, h6, p{
        margin: 0;
    }

    & + & {
        margin-left: 2rem;
    }
`

const CheckoutContainer = styled(HalfContainer)`
    flex: 2 1 0;
    padding: 3rem;

    p {
        margin-top: 3rem;
    }
`

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 5px;
    border: 1.5px solid grey;
    padding: 1rem;

    & + & {
        margin-top: 1rem;
    }
`

const Label = styled.label`
    display: block;
    font-size: 0.8rem;
    line-height: 2rem;
    font-weight: 700;
`

const InputsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -1rem;
    margin-left: -1rem;
    margin-bottom: 1rem;

    div {
        flex: 1 1 calc(50% - 1rem);
        max-width: calc(50% - 1rem);
        display: block;
        margin-left: 1rem;
        margin-top: 1rem;
    }
`

const SummaryContainer = styled(HalfContainer)`
    flex: 1 1 0;
    padding: 2rem;
`

const SummaryText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
        text-transform: uppercase;
    }

    h6 {

    }
`

function Checkout() {

  return (
    <Container>
        <CheckoutContainer>
            <h2>Checkout</h2>
            <p><span>Billing details</span></p>
            <InputsContainer>
                <div>
                    <Label for=''>Name</Label>
                    <Input/>
                </div>
                <div>
                    <Label>E-mail Address</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Phone Number</Label>
                    <Input/>
                </div>
            </InputsContainer>
            <p><span>Shipping info</span></p>
            <InputsContainer>
                <div style={{maxWidth: "100%"}}>
                    <Label>Address</Label>
                    <Input/>
                </div>
            </InputsContainer>
            <InputsContainer>
                <div>
                    <Label>ZIP Code</Label>
                    <Input/>
                </div>
                <div>
                    <Label>City</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Country</Label>
                    <Input/>
                </div>
            </InputsContainer>
            <p><span>Payement details</span></p>
            <InputsContainer>
                <div>
                    <Label>Payement Method</Label>
                    <Input/>
                    <Input/>
                </div>
            </InputsContainer>
            <InputsContainer>
                <div>
                    <Label>e-Money Number</Label>
                    <Input/>
                </div>
                <div>
                    <Label>e-Money PIN</Label>
                    <Input/>
                </div>
            </InputsContainer>
        </CheckoutContainer>
        <SummaryContainer>
            <h5>Summary</h5>
            <SummaryText>
                <p>Total</p>
                <h6>x</h6>
            </SummaryText>
            <SummaryText>
                <p>Shipping</p>
                <h6>x</h6>
            </SummaryText>
            <SummaryText>
                <p>{"Vat (included)"}</p>
                <h6>x</h6>
            </SummaryText>
            <SummaryText>
                <p>Grand Total</p>
                <h6>x</h6>
            </SummaryText>
            <SeeProductButton version="orange" buttonText={"Continue & pay"}/>
        </SummaryContainer>
    </Container>
  );
}

export default Checkout;
