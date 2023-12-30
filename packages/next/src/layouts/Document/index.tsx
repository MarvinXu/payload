import React, { Fragment } from 'react'
import { SanitizedConfig } from 'payload/types'

import '@payloadcms/ui/scss/app.scss'
import { initPage } from '../../utilities/initPage'
import { DocumentHeader } from '@payloadcms/ui'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export const DocumentLayout = async ({
  children,
  config: configPromise,
  collectionSlug,
  globalSlug,
  id,
}: {
  children: React.ReactNode
  config: Promise<SanitizedConfig>
  collectionSlug?: string
  globalSlug?: string
  id?: string
}) => {
  const { user, permissions, config } = await initPage(configPromise)

  const collectionConfig = collectionSlug
    ? config.collections.find((collection) => collection.slug === collectionSlug)
    : null

  const globalConfig = globalSlug
    ? config.globals.find((global) => global.slug === globalSlug)
    : null

  return (
    <Fragment>
      <DocumentHeader
        // apiURL={apiURL}
        collectionConfig={collectionConfig}
        globalConfig={globalConfig}
        // customHeader={customHeader}
        // data={data}
        id={id}
        // isEditing={isEditing}
      />
      {children}
    </Fragment>
  )
}
