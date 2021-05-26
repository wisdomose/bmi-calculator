import React from 'react';
import Form from "./components/form";
import Greeting from './components/greeting';
import { useState } from "react";
import Footer from './components/footer';

function App() {
  const [result, setResult] = useState(0);
  return (
    <div className="grid grid-cols-1 grid-rows-[max-content, auto, max-content] h-screen max-h-screen bg-brand-dark font-mono py-3" style={{gridTemplateRows:"max-content auto max-content"}}>
      <Greeting result={result}/>
      <Form setResult={setResult}/>
      <Footer/>
    </div>
  );
}

export default App;
