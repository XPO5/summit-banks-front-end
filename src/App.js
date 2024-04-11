import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  async function addUser() {
    const form = document.getElementsByClassName("user-input-form");
    const first_name = form[0]["first_name"].value
    const last_name = form[0]["last_name"].value
    const email = form[0]["email"].value
    const username = form[0]["username"].value
    const password = form[0]["password"].value
    var body = {
      "username": username,
      "password": password,
      "email": email,
      "first_name": first_name,
      "last_name": last_name,
      "initial_balance": 0.0
    }
    const response = await axios.post(`http://localhost:8000/signup`, body);
    console.log(response)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form className="user-input-form">
          <label for="first_name">First name:</label><br />
          <input type="text" id="first_name" name="first_name" /><br />
          <label for="last_name">Last name:</label><br />
          <input type="text" id="last_name" name="last_name" /><br />
          <label for="email">Email:</label><br />
          <input type="text" id="email" name="email" /><br />
          <label for="username">Username:</label><br />
          <input type="text" id="username" name="username" /><br />
          <label for="password">Password:</label><br />
          <input type="text" id="password" name="password" /><br />
        </form>
        <button onClick={() => addUser()}> 
          Click Me To Sign Up!
        </button>
      </header>
    </div>
  );
}

export default App;
