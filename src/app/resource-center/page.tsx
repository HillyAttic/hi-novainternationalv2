import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResourceHero from './components/Component6';
import ResourceCenterInteractive from './components/ResourceCenterInteractive';

export const metadata: Metadata = {
  title: 'Resource Center - Hi-Nova Manufacturing Hub',
  description: 'Access comprehensive technical guides, industry insights, webinars, and compliance documentation. Your knowledge hub for manufacturing excellence and engineering best practices.',
};

export default function ResourceCenterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ResourceHero />
      <ResourceCenterInteractive />
    </main>
  );
}