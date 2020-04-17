import React from 'react'

const NotFound = () => {
    return(
        <div>
            <div className='page-404' style={{textAlign:'center'}}>
                <p>404</p>
                <h3 style={{fontSize:30,marginBottom:'20px',fontWeight:400}}>Oups....</h3>
                <small style={{fontSize:16,fontWeight:200,lineHeight:'30px'}}>
                    Sorry, the content you are looking for doesn't exist.
                    <br/>
                    Please go back to <a href='/'>Home</a> and have fun playing the game.
                    <br/>
                </small>
            </div>
        </div>
    )
}

export default NotFound