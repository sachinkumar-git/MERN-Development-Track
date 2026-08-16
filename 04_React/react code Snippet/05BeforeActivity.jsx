import './App.css'
import Title from  "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx"

// function Description (){
//   return (
//     <h3>i am the title</h3>
//   );
// }

// function App() {
//   return <button>hello world</button>
// }
  
function App() {
  return (
    <>
    <MsgBox userName="Sachin" textColor="pink"/>
    <MsgBox userName="SRM university" textColor="blue"/>

    <ProductTab/>
    </>
  )
}



export default App;
 