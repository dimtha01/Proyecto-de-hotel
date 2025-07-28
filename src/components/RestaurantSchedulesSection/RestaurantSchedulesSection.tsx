import { Card, CardContent } from "@/components/ui/card";
import { Clock, Utensils, Coffee, CalendarDays } from "lucide-react";

const schedulesData = [
  {
    id: "r1",
    name: "Restaurante 'El Sabor'",
    description: "Cocina de autor con ingredientes frescos y de temporada.",
    icon: <Utensils className="w-8 h-8 text-orange-500" />,
    schedule: [
      { day: "Desayuno", time: "07:00 - 10:30" },
      { day: "Almuerzo", time: "12:30 - 15:00" },
      { day: "Cena", time: "19:00 - 22:30" },
    ],
  },
  {
    id: "b1",
    name: "Bar 'La Terraza'",
    description: "Disfruta de cócteles exclusivos y vistas panorámicas.",
    icon: <Coffee className="w-8 h-8 text-orange-500" />,
    schedule: [{ day: "Todos los días", time: "11:00 - 00:00" }],
  },
  {
    id: "r2",
    name: "Cafetería 'Dulce Amanecer'",
    description: "El lugar perfecto para un café y repostería recién hecha.",
    icon: <Coffee className="w-8 h-8 text-orange-500" />,
    schedule: [
      { day: "Lunes - Viernes", time: "06:30 - 18:00" },
      { day: "Sábados - Domingos", time: "07:00 - 19:00" },
    ],
  },
];

export const RestaurantSchedulesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Horarios de Restaurantes y Bares
          </h2>
          <p className="text-lg text-gray-600">
            Planifica tus momentos de disfrute culinario en nuestro hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedulesData.map((outlet) => (
            <Card
              key={outlet.id}
              className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-orange-100 rounded-full">
                  {outlet.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-2xl mb-2">
                  {outlet.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {outlet.description}
                </p>

                <div className="w-full space-y-3">
                  {outlet.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-gray-700 text-base"
                    >
                      <span className="font-semibold flex items-center gap-2">
                        <CalendarDays className="w-5 h-5 text-gray-500" />
                        {item.day}:
                      </span>
                      <span className="flex items-center gap-2 font-medium text-orange-600">
                        <Clock className="w-5 h-5 text-orange-500" />
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
