import React from "react";
import 'tachyons';


const Card = ({id, name, phone, compName, city}) =>
{

return (
<div  className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  
  <img alt={"user_image"} src={"https://robohash.org/"+id+"?200x200}" } />

 <p> Name is {name} </p>
 <p> Phone is {phone} </p>
 <p> Company is {compName} </p>
 <p> City is {city} </p>
 </div>

);
}

export default Card;



