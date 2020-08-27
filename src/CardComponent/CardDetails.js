import React, { Fragment, useEffect, useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const CardDetails = ({newsList}) => {
return(
<Card.Group  itemsPerRow={4} >
 {newsList && newsList.length && newsList.map((item)=>{
     return(
     <Card><Image src={item.urlToImage} wrapped ui={false} /><Card.Content>
        <Card.Header>{item.content}</Card.Header>
        <Card.Description>{item.description}</Card.Description>
        </Card.Content>
            <Card.Content extra>
            <strong>{item.author}</strong>
        </Card.Content>
        </Card>
)    
})
}
</Card.Group>

    )
}
export default CardDetails;

