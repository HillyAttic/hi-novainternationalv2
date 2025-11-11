'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface WhatsAppChatProps {
  phoneNumber: string;
  defaultMessage?: string;
  position?: 'bottom-left' | 'bottom-right';
  showTooltip?: boolean;
}

const WhatsAppChat = ({
  phoneNumber,
  defaultMessage = "Hi! I'd like to know more about your company and services.",
  position = 'bottom-left',
  showTooltip = true
}: WhatsAppChatProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!mounted) return null;

  const positionClasses = position === 'bottom-right'
    ? 'fixed bottom-6 right-6'
    : 'fixed bottom-6 left-6';

  const tooltipPositionClasses = position === 'bottom-right'
    ? 'right-0'
    : 'left-0';

  return createPortal(
    <div className={`${positionClasses} z-50`}>
      {/* Tooltip */}
      {showTooltip && isHovered && (
        <div className={`absolute ${tooltipPositionClasses} bottom-16 mb-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg transition-opacity duration-300`}>
          <div className="relative">
            <p className="mb-2">Chat with us on WhatsApp for quick responses!</p>
            <div className={`absolute top-full ${position === 'bottom-right' ? 'right-4' : 'left-4'} w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900`}></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp GIF Icon */}
        <img
          src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif"
          alt="WhatsApp"
          className="w-8 h-8"
          width={32}
          height={32}
        />

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
      </button>
    </div>,
    document.body
  );
};

export default WhatsAppChat;