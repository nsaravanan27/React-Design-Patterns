import './App.css';
import { SplitScreen } from './Layout/SplitScreen';

const LeftComponent = () => <h1 style={{ backgroundColor: 'gray'}}> Left! </h1>;
const RightComponent = () => <p style={{ backgroundColor: 'yellow'}}> Right! </p>

function App() {
  return (
    <div className="App">
      <SplitScreen left={LeftComponent} right={RightComponent} leftWeight={1} rightWeight={3} />
    </div>
  );
}

export default App;
