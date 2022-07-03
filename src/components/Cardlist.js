import React from "react";
import Card from "./Card";




const Cardlist =({robots}) =>

{

return (
    <div>


    {robots.map((user) => {
        return( 
      <Card key={user.id}
      id={user.id}
      name={user.name}
      email={user.email}
      compName={user.company.name}
      city={user.address.city}
      phone ={user.phone}

     />
        );
        })
}
    
</div>
);



}

export default Cardlist;
