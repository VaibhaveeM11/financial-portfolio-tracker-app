import React from  'react';
import { Component } from 'react';
import './UI.css';
import AddStocks from '../Components/AddStocks/AddStocks';
import NewStock from '../Components/NewStock/NewStock';
class HomePageUI extends Component {
    render() { 
        return (  
      <div>
    <div className="header">
       <h1>Financial Portfolio Tracker App</h1>
     </div>
           <AddStocks></AddStocks>
           <NewStock></NewStock>
      
      </div>

        );
    }
}
 
export default HomePageUI;
