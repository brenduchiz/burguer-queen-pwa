import React, { Component } from 'react';
import '../css/Dinner.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
library.add(faClipboardList)


class Order extends Component {
constructor(){
super();
this.state ={
}
}

handleViewOrder=()=>{


}




    render(){
    return(<div>
   
   <td><button type="button" onClick={this.handleViewOrder} className="btn btn-primary ">Pedidos  <FontAwesomeIcon icon="clipboard-list" /></button></td>

    
    </div>);
    }
    }
    
    export default Order;