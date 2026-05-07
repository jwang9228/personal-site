import RootPage from './components/RootPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Justin Wang - Software Engineer',
  description: 'Explore the technical projects, architecture, and engineering work of Justin Wang.'
}

export default function Page() {
  return <RootPage />
}
