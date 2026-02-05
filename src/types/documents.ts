export interface Signature {
  id: string;
  documentId: string;
  signerName: string;
  signatureData: string; // Base64 or canvas data
  signedAt: string;
  signerEmail: string;
}

export interface DocumentChamber {
  id: string;
  name: string;
  type: string;
  size: string;
  lastModified: string;
  shared: boolean;
  url: string;
  ownerId: string;
  dealId?: string;
  status: 'draft' | 'in-review' | 'signed';
  uploadedBy: string;
  uploadedAt: string;
  signatories?: Signature[];
  expiryDate?: string;
}
