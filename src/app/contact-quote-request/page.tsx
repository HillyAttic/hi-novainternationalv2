import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact & Quote Request - Hi-Nova Manufacturing Hub',
  description: 'Connect with Hi-Nova engineering experts for personalized solutions, detailed quotes, and technical consultations. Multiple communication channels available for your manufacturing needs.',
};

export default function ContactQuoteRequestPage() {
  return (
    <>
      <Header />
      <ContactInteractive />
    </>
  );
}