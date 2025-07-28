import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign } from "lucide-react";

const tourPackagesData = [
  {
    id: "tp1",
    name: "Aventura en la Selva Tropical",
    description:
      "Explora la exuberante selva con guías expertos, avistamiento de fauna y flora.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "3 días / 2 noches",
    price: 450,
  },
  {
    id: "tp2",
    name: "Ruta Cultural por la Ciudad Antigua",
    description:
      "Descubre la historia y los secretos de la ciudad con visitas a museos y sitios históricos.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "1 día",
    price: 90,
  },
  {
    id: "tp3",
    name: "Escapada Romántica en la Costa",
    description:
      "Disfruta de atardeceres inolvidables, cenas privadas y paseos por la playa.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "2 días / 1 noche",
    price: 320,
  },
];

export const TourPackagesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Paquetes Turísticos
          </h2>
          <p className="text-lg text-gray-600">
            Explora los destinos más fascinantes con nuestros paquetes todo
            incluido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackagesData.map((pkg) => (
            <Card
              key={pkg.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 text-xl mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-between text-gray-700 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {pkg.duration}
                  </span>
                  <span className="font-bold text-orange-600 flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {pkg.price}
                  </span>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
