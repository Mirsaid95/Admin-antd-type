import { createRoot } from 'react-dom/client'
import {QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/queryClient.ts'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}> 
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
  
)
