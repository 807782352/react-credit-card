import React from 'react'
import Chip from '../../images/chip.webp'
import Visa from '../../images/visa.png'

export default function CreditCard() {
  return (
    <div className='credit-card'>
        <div className="wrapper">
            <div className="branding">
                <img className='chip-img' src={Chip} alt="Chip" />
                <img className='visa-img' src={Visa} alt="Visa" />
            </div>
        </div>
    </div>
  )
}
