import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'start-date',
      title: 'Start-Date',
      type: 'string',
    }),
    defineField({
      name: 'end-date',
      title: 'End-Date',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image'
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
