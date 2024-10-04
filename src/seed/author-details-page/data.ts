import { Page } from 'payload-types'

export type authorDetailsPageDataType = Omit<
  Page,
  'id' | 'createdAt' | 'updatedAt'
>

export const authorDetailsPageData: authorDetailsPageDataType = {
  title: 'team-details',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'Details',
      collectionSlug: 'users',
    },
  ],
}
