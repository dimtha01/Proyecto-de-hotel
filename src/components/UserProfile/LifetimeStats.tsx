import { Bed, CalendarCheck, Star, Gift } from 'lucide-react';

export const LifetimeStats = () => {
  const stats = [
    {
      icon: <Bed className="w-5 h-5" />,
      label: 'Total de Estancias',
      value: '12',
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: <CalendarCheck className="w-5 h-5" />,
      label: 'Noches Totales',
      value: '48',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: 'Puntos Ganados',
      value: '8,750',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: <Gift className="w-5 h-5" />,
      label: 'Beneficios Canjeados',
      value: '$1,200',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
        Estadísticas de Vida
      </h3>
      
      <div className="space-y-3 sm:space-y-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 ${stat.bgColor} rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer`}
          >
            <div className={`${stat.iconBg} p-2 rounded-lg flex-shrink-0`}>
              <div className={stat.iconColor}>
                {stat.icon}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="font-bold text-gray-900 text-lg">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
