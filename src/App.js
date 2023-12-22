import './App.css';
import Header from './Chapter3/Path/Header';
import Route from './Chapter3/Path/Route';
import State from './Chapter3/A/State';
import Effect from './Chapter3/B/Effect';
import Context from './Chapter3/C/Context';
import Langdata from './Chapter3/C/lang-data';
import Reducer from './Chapter3/D/Reducer';
import Ref from './Chapter3/E/Ref';
import MemoCall from './Chapter3/F/MemoCall';
import Custom from './Chapter3/G/Custom';
import Main from './Chapter3/Project/Main';

function App() {
  return (
    <>
    <Header />
    <Route path='/Tasks'>
      <State />
      <Effect />
      <Context>
        <Langdata />
      </Context>
      <Reducer />
      <Ref />
      <MemoCall />
      <Custom />
      <Route path='/Project'>
        <Main />
      </Route>
    </Route>
    </>
  );
}

export default App;
