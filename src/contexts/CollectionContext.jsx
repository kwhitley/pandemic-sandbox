import React, { useContext, useEffect, useState } from 'react'
import { useCollection as useCollectionHook } from '../hooks/useCollection'

export const CollectionContext = React.createContext({})

export const CollectionProvider = ({ children }) => {
  const { data: images, isLoading } = useCollectionHook()

  const indexOf = hash => images.findIndex(i => i.hash === hash)
  
  return (
    <CollectionContext.Provider value={{ images, isLoading, indexOf }}>
      { children }
    </CollectionContext.Provider>
  )
}

export const useCollection = () => useContext(CollectionContext)
