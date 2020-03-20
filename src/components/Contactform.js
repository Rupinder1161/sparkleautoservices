import React, { Component } from 'react'
import './hh.css'

export class Contactform extends Component {
    render() {
        return (
            <div className="hello" >  
            
             <form id="contact" action="" method="post">
              <h3> Contact Form</h3>
              <h4>Contact us for custom quote</h4>
              <fieldset>
                  <input placeholder="Your name" type="text" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                  <input placeholder="Your Conatct Number" type="tel" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                  <input placeholder="Your Vehicle Model" type="tel" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </fieldset>
              <p class="copyright">Or Contact Us On <a href="https://colorlib.com" target="_blank" title="Colorlib">04 26 00 116</a></p>
                          </form>
          </div>



            
                            )
                        }
                    }
                    
                    export default Contactform
