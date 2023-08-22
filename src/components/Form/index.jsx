import React from 'react'
import './index.css'

export default function Form() {

    return (
        <form>
            <label id="card-number">Card Number</label>
            <input type="number" id="card-number" placeholder="1234123412341234" />

            <label id="card-holder">Card Holder:</label>
            <input type="text" id="card-name-input" placeholder="Your Name" />

            <div id="date-cvv">
                <div>
                    <label id="validity">Expires On:</label>
                    <input type="date" id="validity-input" />
                </div>
                <div>
                    <label id="cvv">CVV:</label>
                    <input type="number" id="cvv" placeholder="***" />
                </div>
            </div>
        </form>
    )
}
