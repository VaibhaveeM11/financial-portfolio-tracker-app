import React, { Component } from 'react';
class NewStock extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <div>
 <div className="AddStocksTitle">
            <h2>Add  Stock to my stock</h2>
            <button className="StockButton"> INTC</button> <span>Intel Corporations</span>
        </div>
        </div>);
    }
}
 
export default NewStock;