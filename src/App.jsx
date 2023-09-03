import React from 'react';
import Layout from "./components/Layout";
import Jobs from './components/Jobs';

const App = () => {
  return (
    // className="bg-blue-500 text-white underline font-bold p-4"
    <div>
      <Layout children={<Jobs />} />
    </div>
  )
}

export default App