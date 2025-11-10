import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductDetailInteractive from './components/ProductDetailInteractive';

export const metadata: Metadata = {
  title: 'Product Detail - Hi-Nova Manufacturing Hub',
  description: 'Explore detailed specifications, applications, and customization options for Hi-Nova\'s industrial equipment including dryers, heat exchangers, and pressure vessels with interactive configurators.',
};

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductDetailInteractive />
    </main>
  );
}