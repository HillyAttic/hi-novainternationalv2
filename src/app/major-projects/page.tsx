import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MajorProjectsInteractive from './components/MajorProjectsInteractive';

export const metadata: Metadata = {
  title: 'Major Projects - Hi-Nova International',
  description: 'Explore our portfolio of successfully delivered major projects across industries including chemical, food processing, petrochemical, and more.',
};

export default function MajorProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MajorProjectsInteractive />
    </main>
  );
}
