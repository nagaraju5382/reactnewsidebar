import './App.css';
import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import { Messages,MessageOne, MessageTwo } from './pages/Messages';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        
        <Route path='/messages' exact component={Messages} />
        <Route path='/messages/message1' exact component={MessageOne} />
        <Route path='/messages/message2' exact component={MessageTwo} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;