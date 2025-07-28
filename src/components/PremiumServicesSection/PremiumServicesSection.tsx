import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, Car, Plane } from "lucide-react"

const premiumServicesData = [
  {
    id: "p1",
    name: "Servicio de Niñera",
    description: "Cuidado profesional y seguro para tus hijos, permitiéndote disfrutar de tu tiempo.",
    icon: <Baby className="w-8 h-8 text-orange-500" />,
    priceInfo: "Desde $25/hora",
  },
  {
    id: "p2",
    name: "Traslados VIP",
    description: "Transporte de lujo desde y hacia el aeropuerto o cualquier destino local.",
    icon: <Car className="w-8 h-8 text-orange-500" />,
    priceInfo: "Consultar tarifas",
  },
  {
    id: "p3",
    name: "Excursiones Personalizadas",
    description: "Organizamos tours privados a los puntos de interés más emblemáticos de la región.",
    icon: <Plane className="w-8 h-8 text-orange-500" />,
    priceInfo: "A medida",
  },
]

export const PremiumServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Premium</h2>
          <p className="text-lg text-gray-600">Eleva tu experiencia con nuestras opciones exclusivas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumServicesData.map((service) => (
            <Card key={service.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-orange-100 rounded-full">{service.icon}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <span className="text-orange-600 font-semibold text-lg mb-4">{service.priceInfo}</span>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Solicitar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
