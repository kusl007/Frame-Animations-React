import React, { useEffect, useRef, useState } from "react";

const App = () => {
  // current Index and max Index
  const [vals,serVals] = useState({currentIndex: 0, maxIndex: 422});
  const imagesLoaded=useRef(0)

  //preload images in the background
  useEffect(() => {
    preloadImages()
  })
  const preloadImages = () => {
    for(let i = 0; i < vals.maxIndex; i++){
      const imageUrl=`./frame_${i.toString().padStart(4,"0")}.jpg`;
      const img = new Image();
      img.src = imageUrl;
      img.onload=() => {
        imagesLoaded.current++;
        console.log(img)
      
      }

  }
}

  //load images in the background
  //resize canvas

  return (
    <div className="w-full bg-zinc-900 ">
      <div className="w-full h-[400vh]">
        <div className="w-full h-screen sticky left-0 top-0 ">
          <canvas className="w-full h-screen ">
           appke
          </canvas>
        </div>
      </div>
    </div>
  );
};

export default App;
