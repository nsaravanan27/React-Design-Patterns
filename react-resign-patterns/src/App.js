import './App.css';
import { ListContainer } from './Layout/Lists/ListContainer';
import { LargePersonListItem } from './Layout/Lists/people/LargePersonListItem';
import { people } from './Layout/Lists/SampleData';
import { Modal } from './Layout/Model/Model';
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
      <Modal><LargePersonListItem person={people[0]}/></Modal>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent name="name" />
        <RightComponent message="message" />
      </SplitScreen>
    </div>
  );
}

export default App;
