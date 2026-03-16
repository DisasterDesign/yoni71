'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import WhatsAppModal from './WhatsAppModal';
import AccessibilityWidget from './AccessibilityWidget';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOrderClick={() => setIsModalOpen(true)} />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppButton onClick={() => setIsModalOpen(true)} />
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AccessibilityWidget />
    </>
  );
}
