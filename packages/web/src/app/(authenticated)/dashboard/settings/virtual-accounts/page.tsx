import { redirect } from 'next/navigation';

export default function VirtualAccountsPage() {
  redirect('/dashboard/settings/payment-accounts');
}