// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes'; // Import your schema definitions from index.ts
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'default',
  title: 'My New Sanity Studio (TS)', // Or whatever title you gave it
  projectId: '6znjjoxg',
  dataset: 'production', // Or your specific dataset
  apiVersion: '2025-06-03', // Use a specific date-based API version
  plugins: [
    deskTool(),
    visionTool(), // Add this line
  ],
  schema: {
    types: schemaTypes,
  },
});