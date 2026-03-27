import Work from './components/work/Work';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Justin Wang',
  description: 'Explore the technical projects, architecture, and engineering work of Justin Wang.'
}

export default function Page() {
  return <Work />
}
