import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { RecentTracks } from './components/RecentTracks'
import { StyledApp } from './styles'

export const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <Route path="/" component={RecentTracks} />
      </StyledApp>
    </BrowserRouter>
  )
}
