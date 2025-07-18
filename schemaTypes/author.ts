import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
});
