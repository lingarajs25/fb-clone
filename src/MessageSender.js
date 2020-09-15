import React , {useState} from 'react';
import './MessageSender.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

const [input, setInput] = useState('');
const [imgUrl, setImgUrl] = useState("");
const handleSubmit = (e) =>{
    e.preventDefault();
//Db
setInput('');
setImgUrl("");

};

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                        className ='messageSender__input'
                        placeholder = {'Whats on your mind?'}
                    />
                    <input
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder = "image URL (Optional)" />

                    <button onClick={handleSubmit} type = "submit">
                    Hidden submit
                    </button>
                </form>
                
            </div>
            
            <div className="messageSender__bottom">
                    <div className="messageSender__option">
                        <VideocamIcon style={{ color:'red'}} />
                        <h3>Live video</h3>
                    </div>

                    <div className="messageSender__option">
                        <PhotoLibraryIcon style={{ color:'green'}} />
                        <h3>Photo/video</h3>
                    </div>
                    
                    <div className="messageSender__option">
                        <InsertEmoticonIcon style={{ color:'red'}} />
                        <h3>Feeling/Activity</h3>                    </div>
                    
            </div>

        </div>
        
    )
}

export default MessageSender;
