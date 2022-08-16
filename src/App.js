import logo from './logo.svg';
import {useState} from 'react';


function App() {
//set chat texts 
const [chatmessage, setChatMessage] = useState('chatmessage');

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
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </div>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-muted">Tues</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
     
     
    </div>
    
    </div>
  );
}

export default App;
