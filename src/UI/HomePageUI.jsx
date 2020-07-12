import React from  'react';
import { Component } from 'react';
import './UI.css';
class HomePageUI extends Component {
    render() { 
        return (  
      <div>
    <div className="header">
       <h1>Financial Portfolio Tracker App</h1>
     </div>
        <div className="mystocks">
           <h3>My Stocks</h3>
            <table className="stocktable">
                <tr id="stockheader">
                   <th>My Stocks</th> 
                   <th>Stock Name</th>
                   <th>No of Share</th>
                   <th>Buy Price</th>
                   <th>Current Price</th>
                   <th>Profit/Loss</th>
                   <th>--</th>
                </tr> 

                <tr>
                <td>AMZN</td>
                <td>Amazon.com Inc</td>
                <td>20</td>
                <td>4654</td>
                <td>1335346</td>
                <td>-987</td>
                <td>
                    <button id="btnTrack">stop tracking</button>
                </td>
                </tr>
                <tr>
                <td>AMZN</td>
                <td>Amazon.com Inc</td>
                <td>20</td>
                <td>4654</td>
                <td>1335346</td>
                <td>-987</td>
                <td>
                    <button id="btnTrack">stop tracking</button>
                </td>
                </tr>
                <tr>
                <td>AMZN</td>
                <td>Amazon.com Inc</td>
                <td>20</td>
                <td>4654</td>
                <td>1335346</td>
                <td>-987</td>
                <td>
                    <button id="btnTrack">stop tracking</button>
                </td>
                </tr>
                

            </table>
        </div>
      </div>

        );
    }
}
 
export default HomePageUI;
