import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { persister, queryClient } from './lib/queryClient'
import Router from './routers/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
      }}
    >
      <Router />
    </PersistQueryClientProvider>
  </React.StrictMode>,
)
