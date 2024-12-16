import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import New from './New';
import BookTable from './Booktable';
import ThankYou from './Thankyou';
import ViewBookings from './ViewBookings';
import FindUs from './FindUs';  // Correct path to FindUs component
import VisitUsPage from './VisitUsPage';  // Correct path to VisitUsPage component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new' element={<New />} />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/view-bookings" element={<ViewBookings />} />

        {/* Routes for VisitUsPage and FindUs */}
        <Route path="/visit" element={<FindUs />} />
        <Route path="/visit-us" element={<VisitUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
