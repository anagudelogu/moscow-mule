// Import the functions you need from the SDKs you need
import { type FirebaseApp, initializeApp } from 'firebase/app'
import { type Analytics, getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
}

let firebaseApp: FirebaseApp
let analytics: Analytics

const initializeFirebase = (): void => {
  firebaseApp = initializeApp(firebaseConfig)
  analytics = getAnalytics(firebaseApp)
}

export { firebaseApp, analytics, initializeFirebase }
