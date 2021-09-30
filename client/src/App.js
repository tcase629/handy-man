import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import Workers from './components/employees/Workers';
import MainNavbar from './components/shared/MainNavbar';
import Services from '/components/services/Services';
import NoMatch from './components/shared/NoMatch';



const App = () => (
  <>
		<MainNavbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/workers" component={Workers} />
			<Route exact path="/services" component={Services} />
			<Route component={NoMatch} />
		</Switch>
  </>
)

export default App;
