import React, { Component } from 'react';
import './NewStock.css';
import '../Modal/Modal'
import Modal from '../Modal/Modal';
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
            <ul>
                <li><button className='StockButton'>s</button></li>
                <li><button className='StockButton'>q</button></li>
                <li><button className='StockButton'>q</button></li>
            </ul>    
        </div>
        <Modal></Modal>
        </div>);
    }
}
 
export default NewStock;