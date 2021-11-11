import './App.css';
import { ListContainer } from './Layout/Lists/ListContainer';
import { SplitScreen } from './Layout/SplitScreen';

const LeftComponent = ({ name }) => (
  <>
    <h1 style={{ backgroundColor: "gray" }}> Left! {name} </h1>
    <ListContainer />
  </>
);
const RightComponent = ({message}) => <p style={{ backgroundColor: 'yellow'}}> Right! {message} </p>

function App() {
  return (
    <div className="App">
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent name= 'name' />
        <RightComponent message = 'message' />
      </SplitScreen>
    </div>
  );
}

export default App;
