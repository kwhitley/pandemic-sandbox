import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import './App.scss'
import { Home } from './components/Home'
import { Details } from './components/Details'
import { SidePanel } from './components/SidePanel'
import { Layout } from './components/Layout'
import { CollectionProvider } from './contexts/CollectionContext'

const StyledHello = styled.div`
  // font-size: 
`

const MainPanel = styled.div`
  flex: 8;
  background-color: pink;
  padding: 1em;
`

const App = () => {
  return (
    <BrowserRouter>
      <CollectionProvider>
        <Layout>
          <SidePanel />
          <MainPanel>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:collection/:id" element={<Details />} />
            </Routes>
          </MainPanel>
        </Layout>
      </CollectionProvider>
    </BrowserRouter>
  )
}

export default App
