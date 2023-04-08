import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// TODO: Remove this component and uncomment the App component below when the new website is ready to go live.
const UnderConstruction = () => {
  return (
    <div className="container" style={{ paddingTop: '10%' }}>
      <h1 className="display-4 text-center">Under Construction</h1>
      <p className="lead text-center">
        We're working hard to bring you our new website. Please check back soon!
      </p>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
