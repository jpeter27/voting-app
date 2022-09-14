import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App/App";
import Voting from "./components/Voting/Voting";

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialVote = {
    title: "How is your day?",
    description: "Tell me: how has your day been so far?",
    choices: [
        {id: "choice_1", title: "Good", count: 7},
        {id: "choice_2", title: "Bad", count: 12},
        {id: "choice_3", title: "Not sure yet", count: 1}
    ]
}

root.render(
    <App>
        <Voting vote={initialVote}/>
    </App>
);
