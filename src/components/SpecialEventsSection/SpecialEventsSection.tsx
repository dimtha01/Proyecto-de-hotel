import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, MapPin } from "lucide-react";

const eventsData = [
  {
    id: "ev1",
    name: "Concierto de Jazz en Vivo",
    description: "Una noche mágica con los mejores talentos del jazz local.",
    image: "/placeholder.svg?height=200&width=300",
    date: "25 de Agosto",
    time: "20:00",
    location: "Salón Principal",
  },
  {
    id: "ev2",
    name: "Noche de Cine al Aire Libre",
    description: "Disfruta de clásicos del cine bajo las estrellas.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Cada Sábado",
    time: "21:00",
    location: "Jardines del Hotel",
  },
  {
    id: "ev3",
    name: "Degustación de Vinos Premium",
    description:
      "Un viaje sensorial a través de los mejores vinos de la región.",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 de Septiembre",
    time: "19:30",
    location: "Bodega del Hotel",
  },
];

export const SpecialEventsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Eventos Especiales
          </h2>
          <p className="text-lg text-gray-600">
            No te pierdas los eventos exclusivos que hemos preparado para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <Card
              key={event.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 text-xl mb-2">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarCheck className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 col-span-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Reservar / Ver Más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
