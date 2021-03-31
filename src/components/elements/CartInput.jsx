import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const CART_ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: "16px",
            color: "#424770",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#9e2146",
        },
    },
};

const CartInput = () => {
    return (
        <label>
            Card Details
            <CardElement options={CART_ELEMENT_OPTIONS} />
        </label>
    );
};

export default CartInput;
