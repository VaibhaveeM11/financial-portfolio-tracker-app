import React, { Component} from 'react';
import './BodyStyle.css';
import Ingredient from '../myBurger/Ingredient';
class Body extends Component{
    render(){
         return(
             <div>
                 <div className='header'>
                     <h1>Build My Burger</h1>
                 </div>
                 <div className='container'>
                     <p>My burger will be shown here</p>
                 </div>
               <Ingredient></Ingredient>
                 <footer id='foot'>
                     <button id='order'>Order Now</button>
                 </footer>
             </div>
         );
    }
}
export default Body;