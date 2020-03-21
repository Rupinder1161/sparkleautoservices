import React, { Component } from 'react'
import './hh.css'



export class Contactform extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
      }


    render() {
        return (
            <div className="hello" >  
            
             <form id="contact" name="contact" method="POST">
                 <input type="hidden" name="form-name" value="contact" />
              <h3> Contact Form</h3>
              <h4>Contact us for custom quote</h4>
              <fieldset>
                  <input placeholder="Your name" type="text" name="name" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                  <input placeholder="Your Conatct Number" type="tel" name="number" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                  <input placeholder="Your Vehicle Model" type="text" name="carnumber" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                <textarea  name="message" placeholder="Type your message here...." tabindex="5" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit"
                 type="submit"
                //  id="contact-submit" 
                
                >Submit</button>
              </fieldset>
              <p class="copyright">Or Contact Us On <a href="https://colorlib.com" target="_blank" title="Colorlib">04 26 00 116</a></p>
                          </form>
          </div>



            
                            )
                        }
                    }
                    
                    export default Contactform
