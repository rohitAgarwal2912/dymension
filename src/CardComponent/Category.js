import React, { Fragment} from "react";
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './CardComponent.css'


const Category = ({selectCategory}) => {
 const buttonCategory = [ 'Bitcoin' , 'U.S.A', 'Apple' ,'Tech Crunch', 'Wall Street Journal'];
return(
    <Fragment>
      {buttonCategory.map(item=>{
          return(
        <span className='category-class'>
          <Button  color="brown" value={item} onClick={(e)=>selectCategory(e)}>{item}</Button>
        </span>
          )
      })}  
    </Fragment>
)
}

export default Category;

