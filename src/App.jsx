import React, { useEffect, useRef, useState } from "react";

const App = () => {
  // current Index and max Index
  const [vals,setVals] = useState({currentIndex: 0, maxIndex: 422});
  const imagesLoaded=useRef(0)
  const imageObject=useRef([])
  const canvasRef =useRef(null)

  //preload images in the background
  useEffect(() => {
    preloadImages()
    console.log(imageObject)
  })
  const preloadImages = () => {
    for(let i = 0; i < vals.maxIndex; i++){
      const imageUrl=`./frame_${i.toString().padStart(4,"0")}.jpg`;
      const img = new Image();
      img.src = imageUrl;
      img.onload=() => {
        imagesLoaded.current++;
        if(imagesLoaded.current === vals.maxIndex){
        console.log("all images loaded")
        //Show the first image
        loadImages(vals.currentIndex)

        }
      }
      //push the image object
      imageObject.current.push(img)
    
  }
}

  //load images in the background
  //resize canvas

  const loadImages = (index) => {
    // console.log("hellooooooo")
    if(index>=0 && index<=vals.maxIndex){
      const img = imageObject.current[index+1]
      console.log(img)
    
      const canvas=canvasRef.current;

      if(canvas && img){
       let ctx= canvas.getContext("2d");
       if(ctx){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;

        const scaleX=canvas.width/img.width;
        const scaleY=canvas.height/img.height;
        const scale=Math.max(scaleX,scaleY);
        
        const newWidth=img.width*scale;
        const newHeight=img.height*scale;

        const offsetX=(canvas.width-newWidth)/2;
        const offsetY=(canvas.height-newHeight)/2;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.imageSmoothingEnabled=true
        ctx.imageSmoothingQuality="high"
        ctx.drawImage(img,offsetX,offsetY,newWidth,newHeight);

        setVals((prevVals)=>({...prevVals,currentIndex:index}))
       }
      }
    }
  }
  

  return (
    <div className="w-full bg-zinc-900 ">
      <div className="w-full h-[400vh]">
        <div className="w-full h-screen sticky left-0 top-0 ">
          <canvas  ref={canvasRef} className="w-full h-screen ">
           
          </canvas>
        </div>
      </div>
    </div>
  );
};

export default App;
