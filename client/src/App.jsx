
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nếu đã yêu nhau chỉ cần nhìn mưa sẽ nhớ nhau hơn!</h1>
      </header>
      <form action="/signup" method="post">
        <input type="text" name="name" placeholder="Name" required></input>
        <input type="password" name="passWord" placeholder="Password" required></input>
        <input type="email" name="email" placeholder="Email" required></input>
        <input type="text" name="birthDate" placeholder="Birth Date" required></input>
        <input type="text" name="phoneNum" placeholder="Phone Number" required></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
