import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Mountain, Bike, Fish, UtensilsCrossed } from "lucide-react";

const activitiesData = [
  {
    id: "a1",
    name: "Clases de Yoga al Amanecer",
    description:
      "Empieza el día con energía y paz interior en nuestros jardines.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Dentro del Hotel",
    icon: <Sun className="w-6 h-6 text-orange-500" />,
  },
  {
    id: "a2",
    name: "Senderismo Guiado",
    description:
      "Explora los senderos cercanos con un guía local y descubre paisajes impresionantes.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Fuera del Hotel",
    icon: <Mountain className="w-6 h-6 text-orange-500" />,
  },
  {
    id: "a3",
    name: "Alquiler de Bicicletas",
    description: "Recorre los alrededores del hotel a tu propio ritmo.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Dentro/Fuera del Hotel",
    icon: <Bike className="w-6 h-6 text-orange-500" />,
  },
  {
    id: "a4",
    name: "Pesca Deportiva",
    description:
      "Una emocionante jornada de pesca en el lago cercano, ideal para aficionados.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Fuera del Hotel",
    icon: <Fish className="w-6 h-6 text-orange-500" />,
  },
  {
    id: "a5",
    name: "Clases de Cocina Local",
    description:
      "Aprende a preparar platos típicos de la región con nuestros chefs.",
    image: "/placeholder.svg?height=200&width=300",
    type: "Dentro del Hotel",
    icon: <UtensilsCrossed className="w-6 h-6 text-orange-500" />,
  },
];

export const HotelActivitiesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Actividades</h2>
          <p className="text-lg text-gray-600">
            Disfruta de una variedad de actividades para todas las edades y
            gustos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity) => (
            <Card
              key={activity.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={activity.image || "/placeholder.svg"}
                alt={activity.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-orange-100 rounded-full mr-3">
                    {activity.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-xl">
                    {activity.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {activity.description}
                </p>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {activity.type}
                </span>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">
                  Más Info
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
