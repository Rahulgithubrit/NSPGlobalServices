import React,{useEffect} from 'react'
import './Textsphare.css'
import TagCloud from "TagCloud";

const TextSphare = ({texts}) =>  {
    useEffect(() => {
        return () => {
          const container = ".tagcloud";
          const options = {
            radius: 250,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container, texts, options);
        };
      }, []);
  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  )
}

export default TextSphare;