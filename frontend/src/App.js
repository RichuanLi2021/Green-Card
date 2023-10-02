import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import './views/Navigation/navigation.css';
import "./views/FeedbackForm/FeedbackForm.css";
import "./App.css";

// Pages
import Home from './views/HomePage/HomePage';

import Login from "./views/Login/LoginIndex";
import SearchResultPage from "./views/Search/SearchResultPage";
import SearchResults from "./views/Topics/SearchResults/SearchResults";

import AntidepressantGuide from "./views/Topics/AntidepressantGuide/AntidepressantGuide";
import AntidepressantClinical from "./views/Topics/AntidepressantsClinical/AntidepressantsClinical";
import AntidepressantSafety from "./views/Topics/AntidepressantSafety/AntidepressantSafety";

import AntipsychoticGuide from "./views/Topics/AntipsychoticsGuide/antipsychoticsGuide";
import AntipsychoticSafety from "./views/Topics/AntipsychoticSafety/AntipsychoticSafety";

import InsomniaSedativeManagement from "./views/Topics/InsomniaManagement/InsomniaManagement";
import InsomniaSedativeGuide from "./views/Topics/InsomniaSedatives/InsomniaSedatives";
import InsomniaSedativeClinical from "./views/Topics/InsomniaClinical/InsomniaClinical";
import InsomniaSedativeSafety from "./views/Topics/InsomniaSafety/InsomniaSafety";
import InsomniaSedativeDeprescribing from "./views/Topics/InsomniaDeprescribing/InsomniaDeprescribing";

import CognitiveEnhancerGuide from "./views/Topics/CognitiveEnhancersGuide/CognitiveEnhancersGuide";
import CognitiveEnhancerClinical from "./views/Topics/CognitiveEnhancersClinical/CognitiveEnhancersClinical";
import CognitiveEnhancerNPSManagement from "./views/Topics/NPSManagement/NPSManagement";

import DeliriumManagement from "./pages/DeliriumManagement";

import PolypharmacyDDI from "./views/Topics/PolypharmacyCommon/PolypharmacyCommon";
import PolypharmacyAdultChanges from "./views/Topics/PolypharmacyNotable/PolypharmacyNotable";
import PolypharmacyPrinciples from "./views/Topics/PrinciplesPolypharmacy/PrinciplesPolypharmacy";

import ECTPsychoactives from "./views/Topics/Neuropsychiatric/Neuropsychiatric";
import MoodStabilizers from "./views/Topics/MoodStabilizers/MoodStabilizers";
import PsychotropicMonitoring from "./views/Topics/PsychotropicMonitoringSection/PsychotropicMonitoringSection";

// Admin Pages
import AdminPanel from "./views/AdminPanel/Panel";
import AdminFeedback from "./views/AdminPanel/feedback/ShowFeedback";

// Components
import Disclaimer from './views/HomePage/Disclaimer';
import NavBar from "./views/Navigation/navigation";
import Footer from './views/Footer/Footer';


export default function App() {
    return (
        <Router>
            <CssBaseline />
            <main>
                <Disclaimer />
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="login" element={<Login />} />
                    <Route path="search-results" element={<SearchResultPage />} />
                    <Route path="search" element={<SearchResults />} />

                    <Route path="antidepressants">
                        <Route path="guide" element={<AntidepressantGuide />} />
                        <Route path="clinical" element={<AntidepressantClinical />} />
                        <Route path="safety" element={<AntidepressantSafety />} />
                    </Route>

                    <Route path="antipsychotics">
                        <Route path="guide" element={<AntipsychoticGuide />} />
                        <Route path="safety" element={<AntipsychoticSafety />} />
                    </Route>

                    <Route path="insomnia">
                        <Route path="management" element={<InsomniaSedativeManagement />} />
                        <Route path="guide" element={<InsomniaSedativeGuide />} />
                        <Route path="clinical" element={<InsomniaSedativeClinical />} />
                        <Route path="safety" element={<InsomniaSedativeSafety />} />
                        <Route path="deprescribing" element={<InsomniaSedativeDeprescribing />} />
                    </Route>

                    <Route path="dementia">
                        <Route path="guide" element={<CognitiveEnhancerGuide />} />
                        <Route path="clinical" element={<CognitiveEnhancerClinical />} />
                        <Route path="nps-management" element={<CognitiveEnhancerNPSManagement />} />
                    </Route>

                    <Route path="delirium">
                        <Route path="management" element={<DeliriumManagement />} />
                    </Route>

                    <Route path="polypharmacy">
                        <Route path="drug-interactions" element={<PolypharmacyDDI />} />
                        <Route path="adult-changes" element={<PolypharmacyAdultChanges />} />
                        <Route path="principles" element={<PolypharmacyPrinciples />} />
                    </Route>

                    <Route path="ect-psychoactives" element={<ECTPsychoactives />} />
                    <Route path="moodstabilizers" element={<MoodStabilizers />} />
                    <Route path="psychotropic-monitoring" element={<PsychotropicMonitoring />} />

                    <Route path="admin">
                        <Route path="panel" element={<AdminPanel />} />
                        <Route path="feedback" element={<AdminFeedback />} />
                    </Route>
                </Routes>

                <Footer />
            </main>
        </Router>
    );
}

