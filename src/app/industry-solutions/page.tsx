import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import IndustrySolutionsInteractive from './components/IndustrySolutionsInteractive';

export const metadata: Metadata = {
  title: 'Industry Solutions - Hi-Nova Manufacturing Hub',
  description: 'Specialized engineering solutions across 10+ industries including Food & Dairy, Pharma & Biotech, Petrochemical, and more. Expert equipment and technical resources for every sector.',
};

export default function IndustrySolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <IndustrySolutionsInteractive />
    </main>
  );
}