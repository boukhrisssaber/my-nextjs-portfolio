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
  ],
  preview: {
    select: {
      title: 'title',
      issuer: 'issuer',
      media: 'logo',
    },
    prepare({ title, issuer, media }: any) {
      return {
        title,
        subtitle: issuer,
        media,
      };
    },
  },
}; 