import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CommentaryList from './CommList/CommentaryList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentaryList />
  </StrictMode>,
)
