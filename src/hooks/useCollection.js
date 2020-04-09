import { createRestHook } from 'react-data-hooks'

export const useCollection = createRestHook('https://www.slick.af/api/v1/collections/krwhitley', {
  transform: data => data.images,
  persist: true,
})