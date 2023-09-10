import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import LeadIntro from './LeadIntro';
import PhotoGrid from './PhotoGrid';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import Description from './Description';
import Last from './Last';
import EntranceWindow from './EntranceWindow';
import Animation from './Animation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header /> 
    {/* <Animation /> */}
    <LeadIntro />
    <PhotoGrid />
    <Description />
    <Last />
  
    {/* <App /> */}
  
    <Footer />
    <EntranceWindow />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
