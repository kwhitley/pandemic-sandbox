import React, { useState, useEffect, memo } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetcher } from '../utils/fetcher'
import { useDetails } from '../hooks/useDetails'
import { useCollection } from '../contexts/CollectionContext'

const StyledDetails = styled.div`
  flex: 10;
  background-color: pink;
  padding: 1em;
`

const StyledPre = styled.pre`
  padding: 1em;
  background-color: #eee;
`

const DetailsGrandChild = memo(() => {
  console.log('DetailsGrandChild rendered')

  return (
    <div>I am a detail GrandChild.</div>
  )
})

const DetailsChild = memo(({ id }) => {
  console.log('DetailsChild rendered')

  return (
    <div>
      I am a detail child.
      <DetailsGrandChild />
    </div>
  )
})

const Large = styled.span`
  font-size: 2em;
`

export const Details = () => {
  const { id, collection } = useParams()
  const details = useDetails(id)
  const { images, indexOf } = useCollection()
  const index = indexOf(id)

  return (
    <StyledDetails>
      <p>Details for { id } within { collection }.</p>

      <p>I am the <Large>{ index }</Large> image in the collection.</p>
      <StyledPre>
        { JSON.stringify(details, null, 2) }
      </StyledPre>
      <DetailsChild id={id} />
    </StyledDetails>
  )
}