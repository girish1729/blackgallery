import React, {
    Fragment,
    useState,
    useEffect,
    Component
} from "react";
import './style.css';

interface img {
    src: string;
    alt: string;
    isActive: boolean;
};
 
function Blackgallery() {

let [imgList, setImageList] = useState < Array < img >> ( [] );

useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then((images) => {
        	setImageList(images);
      });
}, []);

const init = () => {
	switchImage(0);
};
  

    const emptyMsg = `
<h2> Please configure by inserting images and caption
		using images.js file </h2>
		
		<pre>
		 const images = [{
        		"src": "https://source.unsplash.com/featured/800x600",
        		"alt": "Beautiful scenery I "
    		},
    		{
        		"src": "https://source.unsplash.com/featured/700x500",
        		"alt": "Beautiful scenery II "
    		}
		];
		</pre>
	`;


const switchImage = (idx: number) => {
		for(let i = 0; i < imgList.length; i++) {
			imgList[i].isActive = false;
        	setImageList(prev => {
                    let newState = [...prev];
                    newState[i] = imgList[i];
                    return newState;
                });

		}
		imgList[idx].isActive = true;
		console.log("I am switching image now");
        	setImageList(prev => {
                    let newState = [...prev];
                    newState[idx] = imgList[idx];
                    return newState;
                });
	};

return ( <Fragment>

 
 <h1> Blackgallery </h1>
    <ul className="gallery-nav"> 
{imgList.length > 0
  ? (
  imgList.map(({src, alt, isActive}, index) => (
       <li className={isActive ? "switch-image": " "} key={index}
id={String(index)} onClick={() => switchImage(index)}  ></li>
))
):<br/>}
    </ul>

  <div  className="gallery-container">


{imgList.length > 0
  ? (
  imgList.map(({src, alt, isActive}, index) => {

    if(index == 0)  {

	return <figure  key={index} id="start" style={{ opacity : isActive ? '1': '0'}}
className="gallery-display show-image" >
  		<figcaption>{alt}</figcaption>
		<img onLoad={() => init()} src={src}  />
	</figure>
	 } else {
	return <figure key={index} id={index +'-img'} className={isActive ? "gallery-display show-image":"gallery-display"} >
  		<figcaption>{alt}</figcaption>
		<img  src={src}  />
	</figure>
      }

}))

: (

	<div dangerouslySetInnerHTML={{__html: emptyMsg}}></div>


)}

</div>



  </Fragment>
  );
}

export default Blackgallery;
