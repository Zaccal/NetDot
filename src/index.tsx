import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextLine } from './context/ContextLine';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css'
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ContextLine>
      <App />
    </ContextLine>
  </StrictMode>
);