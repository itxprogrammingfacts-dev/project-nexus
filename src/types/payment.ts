export interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'transfer' | 'payment' | 'funding';
  amount: number;
  currency: string;
  sender: string;
  receiver: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  description?: string;
  relatedDealId?: string;
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  currency: string;
  accounts: PaymentAccount[];
  transactions: Transaction[];
}

export interface PaymentAccount {
  id: string;
  type: 'bank' | 'card' | 'crypto';
  accountName: string;
  accountNumber: string;
  expiryDate?: string;
  isDefault: boolean;
}

export interface FundingRound {
  id: string;
  dealId: string;
  targetAmount: number;
  raisedAmount: number;
  investors: InvestmentRecord[];
  status: 'open' | 'closed' | 'completed';
  deadline: string;
}

export interface InvestmentRecord {
  id: string;
  investorId: string;
  investorName: string;
  amount: number;
  timestamp: string;
  status: 'pending' | 'completed';
}
