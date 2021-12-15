import React,  {FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './Styles.scss';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Page404 from './pages/Page404';
import RestaurantPage from './pages/restaurantPage';
import BoardPage from './pages/BoardPage'

const  App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact >
          <HomePage />
        </Route>
        <Route path='/about' exact>
          <About/>
        </Route>
        <Route path='/restaurant' exact>
          <RestaurantPage/>
        </Route>
        <Route path='/board' exact>
          <BoardPage />
        </Route>
        <Route path='*' exact>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
