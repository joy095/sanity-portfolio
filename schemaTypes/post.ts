// schemas/post.ts
import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
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
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Important for SEO and accessibility.',
                }),
            ],
        }),
        defineField({
            name: 'content',
            title: 'Content',
            description: 'Blog main content with formatting.',
            type: 'array',
            of: [
                defineField({
                    name: 'block',
                    type: 'block',
                }),
                defineField({
                    name: 'imageWithAlt',
                    type: 'image',
                    title: 'Image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text',
                            description: 'For screen readers and SEO',
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'Short summary or snippet of the post.',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            subtitle: 'publishedAt',
        },
    },
});
