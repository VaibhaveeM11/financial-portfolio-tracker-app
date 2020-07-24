import React, { Component } from 'react';
import axios from 'axios';
// api for current price:LA8SE7GE192UZZFA.
// https://financial-portfolio-8784b.firebaseio.com/
class AddStocks extends Component {
    state = {  }
    getCurrentPrice=()=>
     {
      //using Axio get api data
      const myApi='LA8SE7GE192UZZFA';
      axios
      ({
        url:`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${myApi}`,
        method:'GET'

      })
    }
    render() { 
        return (  
            
        <div className="MyStocks">
        <h2>My Stocks</h2>
         <table className="MyStocksTable">
             <tr id="stockheader">
                <th>Stock symbol</th> 
                <th>Stock name</th>
                <th>No.of shares</th>
                <th>Buy price</th>
                <th>Current price</th>
                <th>Profit/Loss</th>
                <th>--</th>
             </tr> 
             {/* <tr>
             <td>AMZN</td>
             <td>Amazon.com Inc</td>
             <td>20</td>
             <td>4654</td>
             <td>1335346</td>
             <td>-987</td>
            </tr> */}
                 {/* <button id="btnTrack">stop tracking</button> */}
        
                 {/* <button id="StopTrackingBtn">stop tracking</button> */}
    
         </table>
         <p>no stocks have been selected</p>
  </div>);
    }
}
 
export default AddStocks;