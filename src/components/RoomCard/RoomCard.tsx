import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Wifi, Tv, Mountain, Building, Waves, Leaf } from "lucide-react"

interface RoomCardProps {
  id: string
  name: string
  price: number
  image: string
  capacity: number
  bedType: "King" | "Queen" | "Twin"
  view: "Ocean" | "City" | "Garden" | "Mountain"
  amenities: string[]
}

export const RoomCard = ({ name, price, image, capacity, bedType, view, amenities }: RoomCardProps) => {
  const getViewIcon = (viewType: string) => {
    switch (viewType) {
      case "Ocean":
        return <Waves className="w-4 h-4" />
      case "City":
        return <Building className="w-4 h-4" />
      case "Garden":
        return <Leaf className="w-4 h-4" />
      case "Mountain":
        return <Mountain className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
      <img
        src={image || "/placeholder.svg?height=250&width=400"}
        alt={name}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 text-xl mb-2">{name}</h3>
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-orange-600 font-bold text-2xl">${price}</span>
          <span className="text-gray-500 text-sm">/ noche</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4" />
            <span>{capacity} personas</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4" />
            <span>{bedType}</span>
          </div>
          <div className="flex items-center gap-2">
            {getViewIcon(view)}
            <span>Vista a {view}</span>
          </div>
          {amenities.includes("Wi-Fi") && (
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4" />
              <span>Wi-Fi</span>
            </div>
          )}
          {amenities.includes("TV") && (
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4" />
              <span>TV</span>
            </div>
          )}
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Ver Detalles</Button>
      </CardContent>
    </Card>
  )
}
