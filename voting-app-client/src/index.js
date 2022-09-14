import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChoiceBar from "./components/ChoiceBar/ChoiceBar";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChoiceBar title={"JavaScript"} percent={37}/>
);
