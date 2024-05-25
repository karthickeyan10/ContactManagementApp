// App.tsx
import React, { FC } from 'react';
import Routes from './Router/Routes.tsx';
import './Styles/styles.css';

const App: FC = () => {
  return (
    <div>
      <Routes/>
      {/* <Dashboard/> */}
      {/* <HomePage/> */}
    </div>
  );
};

export default App;
