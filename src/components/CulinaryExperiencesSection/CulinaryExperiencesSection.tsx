import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const experiencesData = [
  {
    id: "e1",
    name: "Cena Temática: Noche Mediterránea",
    description:
      "Un festín de sabores frescos y aromas del Mediterráneo, con música en vivo.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Cada viernes",
    price: 75,
  },
  {
    id: "e2",
    name: "Clase de Cocina con el Chef",
    description:
      "Aprende a preparar nuestros platos estrella con nuestro chef ejecutivo.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Sábados por la mañana",
    price: 50,
  },
  {
    id: "e3",
    name: "Degustación de Vinos y Quesos",
    description:
      "Explora los maridajes perfectos con nuestra selección de vinos y quesos locales.",
    image: "/placeholder.svg?height=200&width=300",
    date: "Jueves por la tarde",
    price: 40,
  },
];

export const CulinaryExperiencesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experiencias Culinarias
          </h2>
          <p className="text-lg text-gray-600">
            Sumérgete en eventos gastronómicos únicos durante tu estancia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiencesData.map((experience) => (
            <Card key={experience.id} className="flex flex-col justify-between">
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 text-xl mb-2">
                  {experience.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {experience.description}
                </p>
                <div className="flex items-center justify-between text-gray-700 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {experience.date}
                  </span>
                  <span className="font-bold text-orange-600">
                    ${experience.price}
                  </span>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
