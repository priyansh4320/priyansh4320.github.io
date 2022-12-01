import React from 'react';
import './projects.css';
export default function project() {
  return (
    <div className='project-container-main'>
        <div className='project-container-parent'>
          <h1>My Capstone Projects</h1>
            <div className='capstone-projects'>
                 <div className='capstone-line'>
                    <div className='capstone-project'>
                      
                      <h2>A Classification Model to Predict the Sentiment either (1 or 0) Based On Amazon Alexa Reviews</h2>
                      <p>Verzeo       Oct 2022 - Nov 2022</p>
                      <p> A classification model to predict the sentiment either (1 or 0) based on Amazon Alexa reviews Context:
                         This dataset consists of a nearly 3000 Amazon customer reviews (input text), star ratings, date of review, 
                         variant and feedback of various amazon Alexa products like Alexa Echo, Echo dots, Alexa Firesticks etc. 
                        for learning how to train Machine for sentiment analysis.</p>
                    
                    </div>
                    <div className='capstone-project'>
                      <h2> A Classification Model to Predict whether Price Range Of Mobile Based On Certain Specifications</h2>
                      <p>Verzeo       Oct 2022 - Oct 2022</p>
                      <p>in this project, I was given a dataset that contained mobile prices and its specification.
                         I was tasked to create a model that would predict the price of the mobile based on the specifications provided. </p>
                    </div>
                 </div>
                 <div className='capstone-line'>
                    <div className='capstone-project'>
                      <h2>coffee machine project</h2>
                      <p>personal project       Aug 2021 - Aug 2021</p>
                      <p>Prompt user by asking “ What would you like? (espresso/latte/cappuccino): ” 
                        a. Check the user’s input to decide what to do next. b. The prompt should show every time action has completed,
                         e.g. once the drink is dispensed. The prompt should show again to serve the next customer. 
                        2. Turn off the Coffee Machine by entering “ off ” to the prompt.…</p>
                    </div>
                    <div className='capstone-project'>
                      <h2>Portfolio Website</h2>
                      <p>Personal project  Nov 2022-Ongoing</p>
                      <p>this is an Ongoing project where I am building a website to enhance my portfolio.</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
