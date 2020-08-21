import React from 'react';
import './App.css';

import Header from './components/tsx/Headers';
import Footer from './components/tsx/Footer';
import KanbanAreaContainer from './containers/tsx/KanbanAreaContainer';

function App() {
  return (
    <div className="main-background">
      <Header></Header>
      <KanbanAreaContainer></KanbanAreaContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;