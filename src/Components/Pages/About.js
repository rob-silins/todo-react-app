import React from 'react'

 function About() {
    return (
        <React.Fragment>
            <h1 style = {aboutStyle}>About this page</h1>
            <div style = {aboutTextStyle}>
            <p>This is just something I tried to make while watching a YouTube tutorial.</p>
            <p>The gibberish tasks that are pre-loaded are imported from 
                <a href='https://jsonplaceholder.typicode.com' target='blank' >
                <i> Json Placeholder.</i>
                </a>
            </p>
            <p>You can add new tasks and by checking the box next to it, it will cross off the task.</p>
            <p>If you don't need the task anymore, you can simply 
                use the <button className='aboutBtnStyle'>REMOVE
                </button> button to get rid of it completely.
            </p>
            <p>You don't need to worry about adding any blank tasks.</p>
            <p>To try out the app, just press the Home link button.</p>
            <p>This is hosted on Netlify.</p>
            <p>Domain name was purchased from Go Daddy.</p>
            </div>
        </React.Fragment>
    )
}

const aboutStyle ={
    textAlign: 'center',
    padding: '20px'
}

const aboutTextStyle ={
    textAlign: 'center',
    padding: '20px',
    fontSize: '18px',
    lineHeight:'2'
}

export default About;