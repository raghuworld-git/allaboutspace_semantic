import React from 'react';
import PageTabTitle from './Components/Common/PageTabTitle'
import Header from './Components/Header/Header';
import AppRoute from './router/AppRoute';
import './App.css';



const App = () => {
  return (
    <div className="app">
      <PageTabTitle title='All About Space' />
      <AppRoute>
          <Header/>
      </AppRoute>
    </div>
  );
}

export default App;
