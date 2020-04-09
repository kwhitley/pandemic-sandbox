import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetcher } from '../utils/fetcher'
import { useDetails } from '../hooks/useDetails'

const StyledDetails = styled.div`
  flex: 10;
  background-color: pink;
  padding: 1em;
`

const StyledPre = styled.pre`
  padding: 1em;
  background-color: #eee;
`

export const Details = () => {
  const { id, collection } = useParams()
  const details = useDetails(id)

  return (
    <StyledDetails>
      Details for { id } within { collection }
      <StyledPre>
        { JSON.stringify(details, null, 2) }
      </StyledPre>
    </StyledDetails>
  )
}