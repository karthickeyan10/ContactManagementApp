import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import store from './Store/store.tsx';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals.ts';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log); 