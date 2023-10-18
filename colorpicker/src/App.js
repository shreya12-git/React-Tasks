import './App.css';
import Colorpicker from './components/Colorpicker';
function App() {
  const colors=['red','green','blue','yellow','pink','aqua','orange','purple','peach','dark green','orange','aquamarine','brown','darkorange','grey','mustard'];
  return (
    <div className="App">
      
     <Colorpicker color={colors}></Colorpicker>
    </div>
  );
}

export default App;
