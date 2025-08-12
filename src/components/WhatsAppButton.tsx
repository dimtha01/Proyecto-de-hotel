// components/WhatsAppButton.tsx
import { MessageCircle } from 'lucide-react'

export const WhatsAppButton = () => {
  const phoneNumber = '+584244572397' // Reemplazar con número real
  const message = 'Hola, me interesa la Suite Ocean View Premium'
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 lg:bottom-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
