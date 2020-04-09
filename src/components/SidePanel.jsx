import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { createRestHook } from 'react-data-hooks'

const StyledSidePanel = styled.div`
  flex: 1 10em;
  background-color: #ddd;
  padding: 1em;
`

const StyledListOfLinks = styled.div`
  a {
    display: block;
    color: black;
    text-decoration: none;
    padding: 0.5em;
    font-size: 1.2em;

    &:hover {
      background-color: rgba(0,0,0,0.1);
    }
  }
`

const useCollection = createRestHook('https://www.slick.af/api/v1/collections/krwhitley', {
  // persist: true,
  transform: data => data.images,
  persist: true,
})

export const SidePanel = () => {
  const { data: images } = useCollection()
  // const [ images, setImages ] = useState([])


  // useEffect(() => {
  //   fetch('https://www.slick.af/api/v1/collections/krwhitley')
  //     .then(r => r.json())
  //     .then(data => setImages(data.images))
  // }, [])

  return (
    <StyledSidePanel>
      <StyledListOfLinks>
        <Link to="/">Home</Link>
        <Link to="/images/test">A Test Image</Link>
        {
          images.map((image, i) => 
            <Link key={i} to={`/images/${image.hash}`}>{ image.hash }</Link>
          )
        }
      </StyledListOfLinks>      
    </StyledSidePanel>
  )
}