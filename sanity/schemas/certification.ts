export default {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'verificationUrl',
      title: 'Verification URL',
      type: 'url',
      description: 'Link to verify the certification (e.g., LinkedIn, official website)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'issueDate',
      title: 'Issue Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date',
    },
    {
      name: 'credentialId',
      title: 'Credential ID',
      type: 'string',
      description: 'Unique identifier for the certification',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'AWS', value: 'aws' },
          { title: 'Security', value: 'security' },
          { title: 'Cloud', value: 'cloud' },
          { title: 'Network', value: 'network' },
          { title: 'Compliance', value: 'compliance' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'security',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      issuer: 'issuer',
      media: 'logo',
      category: 'category',
    },
    prepare({ title, issuer, media, category }: any) {
      return {
        title,
        subtitle: `${issuer}${category ? ` [${category}]` : ''}`,
        media,
      };
    },
  },
}; 