import React, { useState } from 'react';
import Layout from "./components/Layout";
import Jobs from './components/Jobs';

export const Context = React.createContext();

const App = () => {

  const[theme, setTheme] = useState(true);

  return (
    <Context.Provider value={[theme, setTheme]}>
      <Layout children={<Jobs />} />
    </Context.Provider>
  )
}

export default App