import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Bed, 
  Wifi, 
  Tv, 
  Mountain, 
  Building, 
  Waves, 
  Leaf, 
  Users, 
  Star,
  Heart,
  Share2,
  Eye
} from "lucide-react"
import { useState } from "react"

interface RoomCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  capacity: number
  bedType: "King" | "Queen" | "Twin"
  view: "Ocean" | "City" | "Garden" | "Mountain"
  amenities: string[]
  rating?: number
  reviewCount?: number
  isPopular?: boolean
  discount?: number
}

export const RoomCard = ({ 
  name, 
  price, 
  originalPrice,
  image, 
  capacity, 
  bedType, 
  view, 
  amenities,
  rating = 4.5,
  reviewCount = 0,
  isPopular = false,
  discount
}: RoomCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const getViewIcon = (viewType: string) => {
    switch (viewType) {
      case "Ocean":
        return <Waves className="w-4 h-4 text-blue-500" />
      case "City":
        return <Building className="w-4 h-4 text-gray-600" />
      case "Garden":
        return <Leaf className="w-4 h-4 text-green-500" />
      case "Mountain":
        return <Mountain className="w-4 h-4 text-amber-600" />
      default:
        return null
    }
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wi-fi":
      case "wifi":
        return <Wifi className="w-3.5 h-3.5" />
      case "tv":
        return <Tv className="w-3.5 h-3.5" />
      default:
        return null
    }
  }

  return (
    <Card className="group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-0 shadow-md bg-white">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className={`w-full h-56 bg-gray-200 ${!imageLoaded ? 'animate-pulse' : ''}`}>
          <img
            src={image || "/placeholder.svg?height=250&width=400"}
            alt={name}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isPopular && (
            <Badge className="bg-red-500 text-white text-xs font-medium px-2 py-1">
              Popular
            </Badge>
          )}
          {discount && (
            <Badge className="bg-green-500 text-white text-xs font-medium px-2 py-1">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsFavorite(!isFavorite)
            }}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-sm"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`} 
            />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-sm"
          >
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Rating Badge */}
        {rating && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-800">{rating}</span>
            {reviewCount > 0 && (
              <span className="text-xs text-gray-600">({reviewCount})</span>
            )}
          </div>
        )}
      </div>

      <CardContent className="p-5">
        {/* Room Name */}
        <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-1 group-hover:text-orange-600 transition-colors">
          {name}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-orange-600 font-bold text-2xl">${price}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-gray-400 line-through text-lg">${originalPrice}</span>
            )}
            <span className="text-gray-500 text-sm">/ noche</span>
          </div>
        </div>

        {/* Room Details */}
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-500" />
            <span>{capacity} personas</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-orange-500" />
            <span>Cama {bedType}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            {getViewIcon(view)}
            <span>Vista {view === "Ocean" ? "al océano" : view === "City" ? "a la ciudad" : view === "Garden" ? "al jardín" : "a la montaña"}</span>
          </div>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.slice(0, 4).map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 bg-gray-50 rounded-full px-3 py-1.5 text-xs text-gray-600"
              >
                {getAmenityIcon(amenity)}
                <span>{amenity}</span>
              </div>
            ))}
            {amenities.length > 4 && (
              <div className="flex items-center gap-1.5 bg-gray-50 rounded-full px-3 py-1.5 text-xs text-gray-600">
                <span>+{amenities.length - 4} más</span>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transition-colors group"
          >
            <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Ver Detalles
          </Button>
          <Button 
            size="sm"
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Reservar Ahora
          </Button>
        </div>

        {/* Quick Info */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Cancelación gratuita</span>
          <span>Sin prepago</span>
        </div>
      </CardContent>
    </Card>
  )
}