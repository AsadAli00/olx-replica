import React, { Component } from 'react';
import chatimg from '../images/chatimg.jpg'

class Chat extends Component {
    render() {
        return (
            <div className="chatmain">
                <div className="head color s16 fontl aic tac">
                    <p>No messages, yet?</p>
                </div>
                <div className="image flex aic jcc">
                    <img src={chatimg} />
                </div>
                <div className="chatfooter color s16 fontb aic tac">
                    <p>We’ll keep messages for any item you’re selling in here</p>
                </div>

            </div>
        );
    }
}

export default Chat;