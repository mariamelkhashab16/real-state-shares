import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import AllProperties from './pages/allProperties';
import PropertyDetails from './pages/propertyDetails'; 
import NewPropertyForm from './pages/addNewProperty';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* Initial screen */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/properties">
            <Route path="" element={<AllProperties/>}/>
            <Route path=":propertyId/" element={<PropertyDetails/>}/>
            <Route path="add-property" element={<NewPropertyForm/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
