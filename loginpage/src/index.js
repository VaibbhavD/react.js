import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthcontextProvider } from './store/auth';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <AuthcontextProvider>
        <App />
    </AuthcontextProvider>
);
