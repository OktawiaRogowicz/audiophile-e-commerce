import React, { useState } from 'react';
import Checkout from './Checkout';
import PageScheme from './PageScheme';

function CheckoutPage() {

  return (
    <PageScheme
        insideComponent={<Checkout/>}
        insideComponentColor={"var(--grey)"}
    />
  );
}

export default CheckoutPage;
