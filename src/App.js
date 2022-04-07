import Counter from './counting';
import './index.css';


function App() {


  const handleClick =()=>{
    alert ("Ami tomari")
  }
  return (
    <>
       <button onMouseLeave={()=> alert("ami tomari")} className="btn marg btn-primary">Click</button>
       <hr/>
      <hr/>
      <button onClick={handleClick} className="btn marg btn-primary">Click</button>
      <hr/>
      <hr/>

    <Counter/>
    </>
 
  );
}

export default App;
