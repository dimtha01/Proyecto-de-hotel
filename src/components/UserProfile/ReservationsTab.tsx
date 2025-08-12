import { useState } from 'react';
import { Search, Filter, Star, Share2, Clock } from 'lucide-react';

export const ReservationsTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('6months');

  const reservations = [
    {
      id: 1,
      type: 'completed',
      title: 'Suite Ocean View Premium',
      amount: '$899.00',
      nights: 3,
      date: '15-18 Nov, 2023',
      rating: 5,
      image: '/placeholder.svg?height=80&width=120&text=Suite+Ocean',
      review: 'Una experiencia absolutamente increíble. La vista al océano era espectacular y el servicio de primera clase. Las instalaciones del spa superaron todas mis expectativas. Definitivamente regresaré para mi próxima escapada romántica.'
    },
    {
      id: 2,
      type: 'completed',
      title: 'Habitación Deluxe con Balcón',
      amount: '$650.00',
      nights: 2,
      date: '22-24 Sep, 2023',
      rating: 4,
      image: '/placeholder.svg?height=80&width=120&text=Deluxe+Room',
      review: 'Excelente ubicación y habitación muy cómoda. El balcón tenía una vista hermosa del jardín. El personal fue muy atento durante toda la estancia.'
    },
    {
      id: 3,
      type: 'upcoming',
      title: 'Suite Presidencial con Vista al Mar',
      amount: '$1,299.00',
      nights: 4,
      date: '15-19 Dic, 2023',
      image: '/placeholder.svg?height=80&width=120&text=Presidential+Suite',
      daysUntil: 12
    }
  ];

  const renderStars = (rating: number | undefined) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div>
      {/* Header with Search and Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Mis Reservas Recientes
        </h3>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar reservas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-[#F20C0C] focus:border-[#F20C0C] w-full sm:w-48"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:ring-[#F20C0C] focus:border-[#F20C0C] appearance-none bg-white"
            >
              <option value="6months">Últimos 6 meses</option>
              <option value="year">Este año</option>
              <option value="all">Todo el historial</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reservations List */}
      <div className="space-y-4">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className={`border rounded-xl p-4 transition-all duration-200 hover:shadow-md ${
              reservation.type === 'upcoming'
                ? 'border-[#F20C0C] bg-red-50/30'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Upcoming Badge */}
            {reservation.type === 'upcoming' && (
              <div className="flex items-center mb-3">
                <Clock className="w-4 h-4 text-[#F20C0C] mr-2" />
                <span className="text-sm font-medium text-[#F20C0C]">
                  Próxima Reserva
                </span>
              </div>
            )}

            <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <img
                  src={reservation.image}
                  alt={reservation.title}
                  className="w-full sm:w-24 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {reservation.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Ganado: {reservation.amount} | Noches: {reservation.nights} | Fecha: {reservation.date}
                  </p>
                  
                  {reservation.type === 'completed' && (
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(reservation.rating)}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {reservation.rating}.0
                      </span>
                    </div>
                  )}
                  
                  {reservation.type === 'upcoming' && (
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        Confirmada
                      </span>
                      <span className="text-xs text-gray-500">
                        Check-in en {reservation.daysUntil} días
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                {reservation.type === 'completed' ? (
                  <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Compartir</span>
                  </button>
                ) : (
                  <>
                    <button className="bg-[#F20C0C] hover:bg-[#D10000] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Ver Reserva
                    </button>
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Modificar
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Review Section for Completed Reservations */}
            {reservation.type === 'completed' && reservation.review && (
              <>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{reservation.review}</p>
                </div>
                
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-500">
                  <span>Reseña verificada • Estancia confirmada</span>
                  <div className="flex gap-4">
                    <button className="text-[#F20C0C] hover:text-[#D10000] font-medium">
                      Reservar de nuevo
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
