import React from 'react';
import { LogoutButton } from '../../commonComponents';
import { useSelector, useDispatch } from 'react-redux'

import './Home.css';

function Home() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const test = () => {
    dispatch({type: 'updateMenuItem'})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ state.rootReducer.companyName }</h1>
        {
          state.dashboardReducer.menuItem.map((graphName)  =>  {
            return(
              <span key={graphName}>{ graphName }</span>
            );
          })
        }

        <button onClick={test} >reduxTest</button>
        <LogoutButton className="logoutFooter" />
      </header>
    </div>
  );
}

export default Home;
