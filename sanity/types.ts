export interface Certification {
  _id: string;
  title: string;
  issuer: string;
  logo: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  verificationUrl: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
} 