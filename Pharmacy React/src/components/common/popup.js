import React from 'react';  
import '../common/popupstyle.css';  

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1 id="popup_text">{this.props.text}</h1>  
<button  id="close_me" onClick={this.props.closePopup}>Place Another order</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;