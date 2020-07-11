import React from 'react';
class  condition extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin:false
         }
    }
    render() { 
        let msg
              if(this.state.isLogin)
              {
                   msg = <div>Hello user</div>
              }
              {
                  msg =<div>hello guest</div>
              }
            return(<div>{msg}</div>);
    
    }
}
 
export default condition ;