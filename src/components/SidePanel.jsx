import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCollection } from '../contexts/CollectionContext'

const StyledSidePanel = styled.div`
  flex: 1 4em;
  background-color: #ddd;
  padding: 2em;
  font-size: 1.2em;
`

const StyledListOfLinks = styled.div`
  a {
    display: block;
    color: ${props => props.loading ? 'red' : '#222'};
    text-decoration: none;
    padding: 0.5em;
    font-size: 1.2em;

    &:hover {
      background-color: rgba(0,0,0,0.1);
    }
  }
`

export const SidePanel = () => {
  const { images, isLoading } = useCollection()
  
  return (
    <StyledSidePanel>
      <StyledListOfLinks loading={isLoading}>
        <Link to="/">Home</Link>
        {
          images.map((image, i) => 
            <Link key={i} to={`/images/${image.hash}`}>{ image.hash }</Link>
          )
        }
      </StyledListOfLinks>      
    </StyledSidePanel>
  )
}