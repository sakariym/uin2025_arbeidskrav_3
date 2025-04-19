import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'backend_arbeidskrav3',
type: 'document',
fields: [
  {
    name: 'name',
    title: 'Name',
    type: 'string',
  },
],
  projectId: 'o4kavlqr',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
