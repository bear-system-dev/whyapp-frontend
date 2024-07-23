import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { queryClient } from './lib/queryClient'
import Router from './routers/Router'
import { Provider } from 'react-redux'
import { store } from './reducer/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
