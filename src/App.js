import './App.css';
import myimage from './360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg';

function App() {
  return (
    <div className="comingsoon">
      <h1 style={{color:'green'}}><center>Coming Soon</center></h1>
      <img src={myimage} className="myimgstyle" alt="sample information"></img>
    </div>

    /* <div>
      <div className="myproperty">Logo</div>
    </div> */
  );
}

export default App;
