import { useState, useEffect } from 'react'
import { fetcher } from '../utils/fetcher'

export const useDetails = (id) => {
  const [ details, setDetails ] = useState()
  
  useEffect(() => {
    fetcher.get('https://www.slick.af/api/v1/images/' + id)
      .then(data => setDetails(data))
  }, [id])

  return details
}