import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ReservationsTab } from './tabs/ReservationsTab';
import { ServicesTab } from './tabs/ServicesTab';
import { PasswordTab } from './tabs/PasswordTab';
import { UserInfoTab } from './tabs/UserInfoTab';

export const DashboardTabs = ({ activeTab, setActiveTab, userData }) => {
  const tabs = [
    { id: 'reservas', label: 'Mis Reservas', shortLabel: 'Reservas' },
    { id: 'servicios', label: 'Servicios/Pedidos', shortLabel: 'Servicios' },
    { id: 'contrasenia', label: 'Contraseña', shortLabel: 'Contraseña' },
    { id: 'informacion', label: 'Información', shortLabel: 'Info' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'reservas':
        return <ReservationsTab />;
      case 'servicios':
        return <ServicesTab />;
      case 'contrasenia':
        return <PasswordTab />;
      case 'informacion':
        return <UserInfoTab userData={userData} />;
      default:
        return <ReservationsTab />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Tab Navigation - Responsive */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 sm:px-6 py-4 text-sm sm:text-base font-medium transition-colors duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-[#F20C0C] border-[#F20C0C] bg-red-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};
