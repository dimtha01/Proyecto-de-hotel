export const RewardsBalance = () => {
  const rewardsData = [
    { label: 'Puntos BayWatch', value: '2,450', type: 'points' },
    { label: 'Créditos de Spa', value: '$150.00', type: 'currency' },
    { label: 'Descuentos Disponibles', value: '$75.00', type: 'currency' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
        Balance de Recompensas
      </h3>
      
      <div className="space-y-3 sm:space-y-4">
        {rewardsData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{item.label}</span>
            <span className="font-semibold text-[#F20C0C]">{item.value}</span>
          </div>
        ))}
        
        <div className="flex justify-between items-center border-t pt-3 mt-4">
          <span className="text-sm font-medium text-gray-900">
            Disponible para Gastar
          </span>
          <span className="font-bold text-[#F20C0C] text-lg">$225.00</span>
        </div>
      </div>

      {/* Progress Ring */}
      <div className="mt-6 flex items-center justify-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle 
              cx="60" 
              cy="60" 
              r="50" 
              stroke="#E5E7EB" 
              strokeWidth="8" 
              fill="none"
            />
            <circle 
              cx="60" 
              cy="60" 
              r="50" 
              stroke="#F20C0C" 
              strokeWidth="8" 
              fill="none" 
              strokeDasharray="314" 
              strokeDashoffset="94" 
              strokeLinecap="round"
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-[#F20C0C]">70%</span>
            <span className="text-xs text-gray-500">Próximo nivel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
