import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

// Add the following styles to center the content vertically on mobile devices
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const UnderConstruction = () => {
  return (
    <div className="container" style={containerStyle}>
      {/* <img
        src={ReleaseWatcher} alt='ReleaseWatcher Logo' style={{ width: '256px', height: '256px', padding-bottom: '20px' }}
      /> */}
      <img src={`${process.env.PUBLIC_URL}/ReleaseWatcher_Black.svg`} alt="Logo" style={{ width: '256px', height: '256px' }}/>
      <h1 className="display-4 text-center">
        Under Construction
      </h1>
      <p className="lead text-center">ReleaseWatcher coming soon...</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UnderConstruction />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
