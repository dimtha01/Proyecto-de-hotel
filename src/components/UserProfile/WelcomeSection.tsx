import { CheckCircle, Crown } from 'lucide-react';

export const WelcomeSection = ({ userData }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 lg:mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="relative flex-shrink-0">
            <img 
              src={userData.avatar} 
              alt={userData.name} 
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-4 border-[#F20C0C]"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-white flex items-center justify-center">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
              Hola {userData.name}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Bienvenida de vuelta <span className="text-xl sm:text-2xl">👋</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Miembro desde {userData.memberSince}
            </p>
          </div>
        </div>
        
        <div className="w-full sm:w-auto">
          <div className="bg-gradient-to-r from-[#F20C0C] to-[#F20C1F] text-white px-4 py-3 rounded-xl text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-end gap-2 mb-1">
              <Crown className="w-4 h-4" />
              <p className="text-sm font-medium">Estado VIP</p>
            </div>
            <p className="text-lg font-bold">{userData.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
