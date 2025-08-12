import { 
  CalendarPlus, 
  Plus, 
  Sparkles, 
  UtensilsCrossed, 
  Bell 
} from 'lucide-react';

export const QuickActions = () => {
  const actions = [
    {
      icon: <CalendarPlus className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Planificar Evento',
      color: 'text-[#F20C0C]',
      bgColor: 'bg-red-50',
      borderColor: 'border-[#F20C0C]',
      hoverBg: 'hover:bg-red-100',
      featured: true,
      onClick: () => window.location.href = 'planificacion-eventos.html'
    },
    {
      icon: <Plus className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Nueva Reserva',
      color: 'text-[#F20C0C]',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      hoverBg: 'hover:bg-gray-50'
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Reservar Spa',
      color: 'text-[#F20C1F]',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      hoverBg: 'hover:bg-orange-50'
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Mesa Restaurante',
      color: 'text-green-600',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      hoverBg: 'hover:bg-green-50'
    },
    {
      icon: <Bell className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Concierge',
      color: 'text-purple-600',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      hoverBg: 'hover:bg-purple-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
        Acciones Rápidas
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`
              flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all duration-200 
              border-2 ${action.borderColor} ${action.bgColor} ${action.hoverBg}
              hover:scale-105 hover:shadow-md active:scale-95
              ${action.featured ? 'ring-2 ring-red-100' : ''}
            `}
          >
            <div className={`${action.color} mb-2 sm:mb-3`}>
              {action.icon}
            </div>
            <span className={`text-xs sm:text-sm font-medium text-center leading-tight ${action.color}`}>
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
