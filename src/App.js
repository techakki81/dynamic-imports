import {useState} from 'react'
import ShowRemotePic from './ShowRemotePic'

function App() {

  const [Component, setComponent] = useState(null)
  
  console.log(Component)

  const handleSelectChange = (e) => {

   switch(e.target.value){
    case "showPic":    
      import('./ShowStaticPic')
        .then(ShowStaticPic => {          
           setComponent(ShowStaticPic.default)
        })
      .catch(err => console.log(err.message));
      break;

    case "remotePic":
      import('./ShowRemotePic')
      .then(ShowRemotePic => {      
        setComponent(ShowRemotePic.default)       
      })
    .catch(err => console.log(err.message));
    break;
  
    
    default:
   } 
 }


  return (
    <div className="App">
      <label  htmlFor="dropDowns">Choose a Module:</label>
      <select name="dropDowns"  onChange={handleSelectChange}  id="dropDowns">
      <option value="na" > ---------------</option>
        <option value="showPic" >Show Local Picture </option>   
        <option value="remotePic">Download Remote Picture</option>        
      </select>

      {/* {   loaded  && <div id="component"> {Component}  </div> }  */}

       {/* two errros.. loaded used but component was still null; 
       Component should not be used as <Component/> */}
       { Component  && <div id="component"> {Component}  </div> } 

     
    </div>
  );
}

export default App;
