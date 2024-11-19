import React from "react";

function Home({ color, name, city }) { // Changed "username" to "name"
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
