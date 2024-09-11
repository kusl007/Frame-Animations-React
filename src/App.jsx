import React, { useState } from "react";

const App = () => {

  // current Index and max Index
  const [vals,serVals] = useState({currentIndex: 0, maxIndex: 422});

  //preload images in the background

  //load images in the background
  //resize canvas

  return (
    <div className="w-full bg-zinc-900 ">
      <div className="w-full h-[400vh]">
        <div className="w-full h-screen sticky left-0 top-0 ">
          <canvas className="w-full h-screen "></canvas>
        </div>
      </div>
    </div>
  );
};

export default App;
