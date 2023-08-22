import React from 'react'
import Chip from '../../images/chip.png'
import Visa from '../../images/visa.png'
import './index.css'

export default function CreditCardFront() {
    return (
        <div className='credit-card'>
            <div className="container container__credit-card">
                <div className="card-front">
                    <div className="branding">
                        <img className='chip-img' src={Chip} alt="Chip" />
                        <img className='visa-img' src={Visa} alt="Visa Logo" />
                    </div>
                    <div className="card-number">
                        <div>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                        </div>
                        <div>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                        </div>
                        <div>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                        </div>
                        <div>

                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                            <span className="card-number-display">_</span>
                        </div>
                    </div>
                    <div className="card-details">
                        <div>
                            <span>Card Holder</span>
                            <span id='card-holder-name'>Your Name</span>
                        </div>
                        <div>
                            <span>Expiration Date</span>
                            <span id='validity'>xx/xx</span>
                        </div>
                    </div>
                </div>

                <div className="card-back">
                    <div className="black-strip"></div>
                    <div className="white-strip">
                        <span>CVV</span>
                        <div id="cvv-display"></div>
                    </div>
                    <img className="visa-logo" src={Visa} alt="Visa Logo" />
                </div>
            </div>
        </div>
    )
}
