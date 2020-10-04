import React from "react";
import { Button } from "@ml-school/components/src/Button/";
import { Nav } from "@ml-school/components/src/HamburgerMenu";

function App() {
  return (
    <div>
      <Nav />
      <h1>Welcome to ml school</h1>
      <Button variant="primary"> Test button</Button>
      <p>
        Cant wait to start learning and building at the what do you think time
      </p>
      {/* <Block /> */}
    </div>
  );
}

export default App;
