// Purchasable plans — single source of truth for the pricing page, checkout, and the Xendit API route.
export interface Plan {
  id: string;
  product: string;
  name: string;
  amount: number; // PHP, whole pesos
  per: string;
}

export const PLANS: Record<string, Plan> = {
  'pro-monthly': { id: 'pro-monthly', product: 'SariAssist', name: 'SariAssist Pro — Monthly', amount: 149, per: 'per month' },
  'pro-annual': { id: 'pro-annual', product: 'SariAssist', name: 'SariAssist Pro — Annual', amount: 1490, per: 'per year' },
};

export const peso = (n: number) => '₱' + n.toLocaleString('en-PH');
