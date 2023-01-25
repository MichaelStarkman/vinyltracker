import React from 'react'
import '../css/TextBox.css'
import { Icon } from 'semantic-ui-react'

function TextFile() {
  return (
    <section className='text-section'>
        <div className='text-section-container'>
            <p className='text-section-quote q-line-one'><Icon name='music' size='huge' />Music is a higher revelation than all wisdom and philosophy</p>
            <div className='line-two-container'>
              <p className='text-section-quote q-line-two'>- Ludwig van Beethoven<Icon name='music' size='huge' /></p>
            </div>
        </div>
    </section>
  )
}

export default TextFile;