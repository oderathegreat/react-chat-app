
import {useState} from 'react';


function App() {
//set chat texts 
const [messages, setMessages] = useState([]);
const [message, setMessage] = useState('');

//set username
const [username, setUsername] = useState('username');

//all chats
let allMessages = [];


useEffect(() => {
  Pusher.logToConsole = true;

  const pusher = new Pusher('37e6e1e6009001cd3d84', {
      cluster: 'us2'
  });

  const channel = pusher.subscribe('chat');
  channel.bind('message', function (data) {
      allMessages.push(data);
      setMessages(allMessages);
  });
}, []);


//on sendchat function
const sendchat = async e => {
  e.preventDefault();

  await fetch('http://localhost:8000/api/messages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          username,
          message
      })
  });

  setMessage('');
}


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


    <form onSubmit={e => sendchat(e)}>
                <input className="form-control" placeholder="Compose a chat message" value={message}
                       onChange={e => setMessage(e.target.value)}
                />
            </form>

    </div>
    
    
  );
}

export default App;
