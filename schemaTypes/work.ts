import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    description: 'Important for SEO and accessibility.',
                }),
            ],
        }),
        defineField({
            name: 'image_2',
            title: 'Additional Image 2',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({ name: 'alt', title: 'Alt text (Image 2)', type: 'string' }),
            ],
        }),
        defineField({
            name: 'image_3',
            title: 'Additional Image 3',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({ name: 'alt', title: 'Alt text (Image 3)', type: 'string' }),
            ],
        }),
        defineField({
            name: 'image_4',
            title: 'Additional Image 4',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({ name: 'alt', title: 'Alt text (Image 4)', type: 'string' }),
            ],
        }),
        defineField({
            name: 'image_5',
            title: 'Additional Image 5',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({ name: 'alt', title: 'Alt text (Image 5)', type: 'string' }),
            ],
        }),
        defineField({
            name: 'link',
            title: 'External Link',
            type: 'url',
            description: 'Link to the project or external resource.',
        }),
        defineField({ // --- ADD THIS NEW FIELD ---
            name: 'info',
            title: 'Project Info/Features',
            type: 'text', // Likely a 'text' type for multi-line string
            description: 'Detailed information or features of the project.',
        }),
        defineField({
            name: 'description',
            title: 'Short Description', // Renamed title for clarity
            type: 'text',
        }),
        defineField({
            name: 'serial',
            title: 'Display Order',
            type: 'number',
            description: 'Use a number to control the order in lists (lower numbers first).',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            subtitle: 'serial',
        },
    },
});