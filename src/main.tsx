import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, store } from '@/app'
import './index.css'
import { Provider } from 'react-redux'
import { initializeFirebase } from './firebase'

initializeFirebase()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
