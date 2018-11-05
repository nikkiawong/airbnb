import React from "react";
import Nav from './Nav';

function App(props){
  let bgImage = {
    background: 'url(https://images.unsplash.com/photo-1507936580189-3816b4abf640?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9a517825943c7dceab31532612fef9f&auto=format&fit=crop&w=1650&q=80)',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh"
  }
  return (
    <div>
      <Nav/>
      <div style={bgImage}></div>
      <div>otherstuff</div>
    </div>
  );
}

export default App;
