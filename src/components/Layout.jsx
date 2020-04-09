import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const Layout = ({ children }) => {
  return (
    <StyledLayout>{ children }</StyledLayout>
  )
}