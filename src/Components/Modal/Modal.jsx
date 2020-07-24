import React, { Component } from 'react';
class Modal extends Component 
{
    state = {  }
    render() { 
        return (  
        <div className='AddStockForm' >
        <label>Company Name:</label>
         <label>
                  No Of Shares:
          <input type='number' placeholder='No of Shares' id='noShares'/>
          </label>
          <label>
                Buy Price:
          <input type='number' placeholder='Buy Price'id='buyPrice'/>
          </label>
          <label>
                Buy Date:
          <input type='date' id='buyDate'/>
          {/* Date formater */}
          {/* Check for all field are complete  */}
          {/* Click on the Add Button. Update DB & Stock Table */}
          </label>
           <button id='Addbutton'>Add</button>
        </div>);
    }
}
 
export default Modal;