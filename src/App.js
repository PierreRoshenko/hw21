import {Route , Switch} from 'react-router-dom'
import { Navigation } from './components/navigation';
import { appRoutes } from './components/routes/'
import './App.css';




function App() {
  
 return(
   
  <div className="App">
    <header className="header">
      <Navigation/>
    </header>
    <main className="content">
      <Switch>
        {appRoutes.map(route=>(
          <Route key={route.path} {...route} />
        ))}
        <Route path = '*'>
          <p>No  Page Found</p>
        </Route>
      </Switch>
    </main>
  </div>
 
  );
}

export default App;
