import './App.css';

function App() {
  return (
    <>
    <div class="Wrapper">
    
    <div class="Container">

      <div class="Header">
        <h1 id="Heading">Calculator</h1>
      </div>
      
      <div class="Conclusion">
        <input id="ConcludedResult" type="text" readonly />
      </div>

      <div class="FirstRow">
        <input type="text" name="Result" id="Result" placeholder="Result" readonly />
        <input type="button" value="C" id="ClearButton" />
      </div>
      
      <div class="SecondRow">
        <input type="button" value="nPr" id="Operation" />
        <input type="button" value="nCr" id="Operation" />
        <input type="button" value="!"  id="Operation" />
        <input type="button" value="%"  id="Operation" />
      </div>
      
      <div class="ThirdRow">
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" value="+" id="Operation" />
      </div>
      
      <div class="FourthRow">
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" value="-" id="Operation" />
      </div>
     
      <div class="FifthRow">
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" value="&#215;" id="Operation" />
      </div>
      
      <div class="SixthRow">
        <input type="button" value="&#247;" id="Operation" />
        <input type="button" value="0" />
        <input type="button" value="." />
        <input type="button" value="=" id="Operation" />
      </div>
      
    </div>

  </div>
    </>
  );
}

export default App;
