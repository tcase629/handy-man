import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import NoMatch from './components/shared/NoMatch';
// import Workers from './components/shared/Workers';


const App = () => (
  <>
		<MainNavbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path='/home' component={Home} />
			{/* <Route exact path='/workers' component={Workers} /> */}
			<Route component={NoMatch} />
		</Switch>
  </>
)

export default App;
