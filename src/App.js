
import './App.css';
//  import Home from './Component/Home';
//import HookFour from './Component/HookFour';
//import Third from './Component/ThirdExa'
//import FifthExa from './Component/FifthExa';
//import HooCounterSix from './Component/HookCounterSix';
//import HookSeven from './Component/HookSeven';
//import HookEight from './Component/HookEight';
//import GraphGen from './Component/ReactGraph/Graph';
import Cake from './Component/Cake/Cake';
import {Provider} from 'react-redux'
import store from './Component/Redux/CakeStore'

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Cake/>
    </div>
    </Provider>
  );
}

export default App;
