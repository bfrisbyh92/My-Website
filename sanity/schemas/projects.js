import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'minidesc',
      title: 'Minidesc',
      type: 'string',
    }),
    defineField({
    name: 'Github',
    title: 'Github',
    type: 'url',
    }),
    defineField({
      name: 'mainimage',
      title: 'Mainimage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondimage',
      title: 'Secondimage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'ShowOnHome',
      title: 'Show On Home',
      type: 'boolean',
    }),
    defineField({
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'text',
    }),
    
  ],
    preview: {
      select: {
      title: 'title',
      author: 'minidesc',
      media: 'mainimage',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, subtitle: media && `by ${author}`}
    },
  },
})
