import { Metadata } from 'next';
import { NotFoundClient } from './not-found-client';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Chennai Escorts - LillyBabe',
  description: 'The page you are looking for could not be found. Explore our Chennai escort services, gallery, and popular locations to find what you need.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: '404 - Page Not Found | Chennai Escorts',
    description: 'The page you are looking for could not be found. Explore our Chennai escort services and popular locations.',
    type: 'website',
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
