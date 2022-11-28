//React and Core Components
import React from 'react';
import ReactDOM from 'react-dom/client';

//Inbuilt Components
import App from './features/App';

//Third components

//Styles Components
import './main.style.sass';

//Contexts & Services
import RatingProvider from './contexts/RatingContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RatingProvider>
    <App />
  </RatingProvider>
);
