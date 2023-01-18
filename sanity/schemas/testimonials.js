import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'firstname',
      title: 'Firstname',
      type: 'string',
    }),
    defineField({
      name: 'lastname',
      title: 'Lastname',
      type: 'string',
    }),
    defineField({
      name: 'relationship',
      title: 'Relationship',
      type: 'string',
    }),
    defineField({
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    })
  ],
})
