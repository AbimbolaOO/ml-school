import React from "react";
import { Button } from "@ml-school/components/src/Button/";
import { Headerbar } from "@ml-school/components/src/Header";

function App() {
  return (
    <div>
      <Headerbar />
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
