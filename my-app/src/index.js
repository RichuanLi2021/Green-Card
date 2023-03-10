import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginIndex from './views/Login/LoginIndex';
import Navigation from './views/Navigation/navigation';

import App from './App';
// Topic pages added based on Issues found on Jira board on Feb 14th 2023
import CognitiveEnhancersGuide from './views/Topics/CognitiveEnhancersGuide';
import InsomniaManagement from './views/Topics/InsomniaManagement';
// Looks like GPGC-84 and GPGC-81 are duplicates for Antidepressants.
import AntidepressantClinicalGuide from './views/Topics/AntidepressantClinicalGuide';
import MoodStabilizersGuide from './views/Topics/MoodStabilizersGuide';
import DeliriumManagement from './views/Topics/DeliriumManagement';
import { BrowserRouter, Routes ,Route }from "react-router-dom";
import SearchBar from './views/searchBar/searchBar';
import AntipsychoticsGuide from './views/antipsychoticsGuide/antipsychoticsGuide';
import NeuropsychiatricSymptoms from './views/neuropsychiatricSymptoms/neuropsychiatricSymptoms';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/login" element={<LoginIndex/>}/>
      <Route path = "/searchBar" element={<SearchBar/>}/>
      <Route path="/navigation" element={<Navigation/>}/>
      <Route path="/AntipsychoticsGuide" element={<AntipsychoticsGuide/>}/>
      <Route path="/CognitiveEnhancersGuide" element={<CognitiveEnhancersGuide/>}/>
      <Route path="/InsomniaManagement" element={<InsomniaManagement/>}/>
      <Route path="/AntidepressantClinicalGuide" element={<AntidepressantClinicalGuide/>}/>
      <Route path="/MoodStabilizersGuide" element={<MoodStabilizersGuide/>}/>
      <Route path="/DeliriumManagement" element={<DeliriumManagement/>}/>
      <Route path="/NeuropsychiatricSymptoms" element={<NeuropsychiatricSymptoms/>}/>
my-app/src/index.js
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();