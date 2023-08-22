import React from 'react'
import './index.css'

export default function Form() {
    return (
        <form>
            <label for="card-number">Card Number</label>
            <input type="number" id="card-number" placeholder="1234123412341234" />

            <label for="card-holder">Card Holder:</label>
            <input type="text" id="card-name-input" placeholder="Your Name" />

            <div className="date-cvv">
                <div>
                    <label for="validity">Expires On:</label>
                    <input type="date" id="validity-input" />
                </div>
                <div>
                    <label for="cvv">CVV:</label>
                    <input type="number" id="cvv" placeholder="***" />
                </div>
            </div>
        </form>
    )
}
