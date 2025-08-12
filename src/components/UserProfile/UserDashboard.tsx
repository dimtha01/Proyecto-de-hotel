import { useState } from 'react';
import { WelcomeSection } from './components/WelcomeSection';
import { RewardsBalance } from './components/RewardsBalance';
import { LifetimeStats } from './components/LifetimeStats';
import { DashboardTabs } from './components/DashboardTabs';
import { QuickActions } from './components/QuickActions';

export const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('reservas');

  const userData = {
    name: 'María González',
    email: 'maria.gonzalez@example.com',
    phone: '+1 (555) 123-4567',
    address: 'Calle Falsa 123, Ciudad',
    memberSince: 'Marzo 2022',
    status: 'Gold Member',
    avatar: '/placeholder.svg?height=80&width=80&text=María'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <WelcomeSection userData={userData} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            <RewardsBalance />
            <LifetimeStats />
          </div>

          {/* Right Column - Main Content */}
          <div className="xl:col-span-2 space-y-6">
            <DashboardTabs 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              userData={userData}
            />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};
