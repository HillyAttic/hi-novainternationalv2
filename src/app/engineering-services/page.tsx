import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EngineeringServicesInteractive from './components/EngineeringServicesInteractive';

export const metadata: Metadata = {
  title: 'Engineering Services - Hi-Nova Manufacturing Hub',
  description: 'Comprehensive engineering services including EPC/Turnkey projects, cleanroom solutions, installation & commissioning, and maintenance support for industrial manufacturing excellence.',
};

export default function EngineeringServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <EngineeringServicesInteractive />
    </main>
  );
}