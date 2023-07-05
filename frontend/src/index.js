import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginIndex from "./views/Login/LoginIndex";
import Navigation from "./views/Navigation/navigation";

import App from "./App";
import InsomniaManagement from "./views/Topics/InsomniaManagement/InsomniaManagement";
import InsomniaSedatives from "./views/Topics/InsomniaSedatives/InsomniaSedatives";

import DeliriumManagement from "./views/Topics/DeliriumManagement/DeliriumManagement";
import NeuropsychiatricSymptomsECT from "./views/Topics/NeuropsychiatricSymptoms/NeuropsychiatricSymptoms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./views/searchBar/searchBar";
import AntipsychoticsGuide from "./views/Topics/AntipsychoticsGuide/antipsychoticsGuide";

import CognitiveEnhancersGuide from "./views/Topics/CognitiveEnhancersGuide/CognitiveEnhancersGuide";
import NeuropsychiatricSymptoms from "./views/Topics/NeuropsychiatricSymptoms/NeuropsychiatricSymptoms";

import Panel from "./views/AdminPanel/Panel";
import InsomniaDeprescribing from "./views/Topics/InsomniaDeprescribing/InsomniaDeprescribing";
import InsomniaClinical from "./views/Topics/InsomniaClinical/InsomniaClinical";
import InsomniaSafety from "./views/Topics/InsomniaSafety/InsomniaSafety";
import MoodStabilizers from "./views/Topics/MoodStabilizers/MoodStabilizers";
import PsychotropicMonitoringSection from "./views/Topics/PsychotropicMonitoringSection/PsychotropicMonitoringSection";
// import PrescribingAndDeprescribing from './views/Topics/PrescribingAndDeprescribing/PrescribingAndDeprescribing';
// import NotableChangesInAdults from './views/Topics/NotableChangesInAdults/NotableChangesInAdults';
import SearchResults from "./views/Topics/SearchResults/SearchResults";

import AntidepressantGuide from "./views/Topics/AntidepressantGuide/AntidepressantGuide";
import AntidepressantSafety from "./views/Topics/AntidepressantSafety/AntidepressantSafety";
import AntidepressantsClinical from "./views/Topics/AntidepressantsClinical/AntidepressantsClinical";
import PolypharmacyCommonDDIs from "./views/Topics/PolypharmacyCommonDDIs/PolypharmacyCommonDDIs";
import PolypharmacyNotableChanges from "./views/Topics/PolypharmacyNotableChanges/PolypharmacyNotableChanges";
import PolypharmacyPrinciples from "./views/Topics/PolypharmacyPrinciples/PolypharmacyPrinciples";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginIndex />} />
      <Route path="/searchBar" element={<SearchBar />} />
      <Route path="/navigation" element={<Navigation />} />
      <Route path="/AntipsychoticsGuide" element={<AntipsychoticsGuide />} />

      <Route path="/InsomniaManagement" element={<InsomniaManagement />} />

      <Route path="/MoodStabilizers" element={<MoodStabilizers />} />
      <Route path="/DeliriumManagement" element={<DeliriumManagement />} />
      <Route path="/NeuropsychiatricSymptomsECT" element={<NeuropsychiatricSymptomsECT />} />
      <Route path="/CognitiveEnhancersGuide" element={<CognitiveEnhancersGuide />} />
      <Route path="/NeuropsychiatricSymptoms" element={<NeuropsychiatricSymptoms />} />
      <Route path="/panel" element={<Panel />} />
      <Route path="/InsomniaSedatives" element={<InsomniaSedatives />} />
      <Route path="/InsomniaDeprescribing" element={<InsomniaDeprescribing />} />
      <Route path="/InsomniaClinical" element={<InsomniaClinical />} />
      <Route path="/InsomniaSafety" element={<InsomniaSafety />} />
      <Route path="/PsychotropicMonitoringSection" element={<PsychotropicMonitoringSection />} />
      {/* <Route path='/PrescribingAndDeprescribing' element={<PrescribingAndDeprescribing/>}/> */}
      {/* <Route path='/NotableChangesInAdults' element={<NotableChangesInAdults/>}/> */}
      <Route path="/SearchResults" element={<SearchResults />} />
      <Route path="/AntidepressantGuide" element={<AntidepressantGuide />} />
      <Route path="/AntidepressantSafety" element={<AntidepressantSafety />} />
      <Route path="/AntidepressantsClinical" element={<AntidepressantsClinical />} />
      <Route path="/PolypharmacyCommonDDIs" element={<PolypharmacyCommonDDIs />} />
      <Route path="/PolypharmacyNotableChanges" element={<PolypharmacyNotableChanges />} />
      <Route path="/PolypharmacyPrinciples" element={<PolypharmacyPrinciples />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
