import { AdminLoginClient } from '@/app/admin/login/admin-login-client';

type Props = {
  searchParams: Promise<{ next?: string }>;
};

export default async function AdminLoginPage({ searchParams }: Props) {
  const sp = await searchParams;
  const next = sp.next;

  return <AdminLoginClient nextPath={next} />;
}
