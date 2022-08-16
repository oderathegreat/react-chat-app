import logo from './logo.svg';
import {useState} from 'react';


function App() {
//set chat texts 


const [messages, setMessages] = useState([]);
const [message, setMessage] = useState('');

//set username

const [username, setUsername] = useState('username');


  return (
    <div className="container">

<strong class="mb-1">Chat Room App</strong>

    <div class="list-group list-group-flush border-bottom scrollarea">
      <div  class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">

        <input className="fs-5 fw-semibold" value={username}
                           onChange={e => setUsername(e.target.value)}/>

      
      
        </div>
        <div class="col-10 mb-1 small">Enter Username</div>
      </div>
 
    
      <div class="list-group list-group-flush border-bottom scrollarea">
   
   
      <div className="list-group-item list-group-item-action py-3 lh-sm">

          <strong class="mb-1">Chat Replys</strong>


          {message.map(message => {
                        return (
                            <div className="list-group-item list-group-item-action py-3 lh-tight">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{message.username}</strong>
                                </div>
                                <div className="col-10 mb-1 small">{message.message}</div>
                            </div>
                        )
                    })}
      
      </div>
   


    </div>
    
     
    </div>

    </div>
    
    
  );
}

export default App;
