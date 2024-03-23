import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import {BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/" element={<Join />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;