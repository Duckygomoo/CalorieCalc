'use client';

import { useState, useEffect } from 'react';
import UserInfoForm from '../components/UserInfoForm';
import ActivityTracker from '../components/ActivityTracker';
import CalorieDisplay from '../components/CalorieDisplay';
import Footer from '../components/Footer';
import { UserInfo, UserActivity, CalorieResults } from '../lib/types';
import { calculateCalorieResults } from '../lib/utils/calorieCalculations';

const DEFAULT_USER_INFO: UserInfo = {
  age: 30,
  ageMonths: 0,
  sex: 'male',
  height: 175, // cm
  weight: 70, // kg
  goal: 'maintain',
  goalRate: 0,
};

export default function Home() {
  // State for user information
  const [userInfo, setUserInfo] = useState<UserInfo>(DEFAULT_USER_INFO);
  
  // State for activities
  const [activities, setActivities] = useState<UserActivity[]>([]);
  
  // State for calculation results
  const [calorieResults, setCalorieResults] = useState<CalorieResults | null>(null);
  
  // State for the active tab
  const [activeTab, setActiveTab] = useState<'info' | 'activities' | 'results'>('info');
  
  // State for tracking setup completion
  const [setupComplete, setSetupComplete] = useState<boolean>(false);
  
  // Load data from localStorage if available
  useEffect(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    const savedActivities = localStorage.getItem('activities');
    
    if (savedUserInfo) {
      try {
        setUserInfo(JSON.parse(savedUserInfo));
      } catch (error) {
        console.error('Failed to parse user info from localStorage:', error);
      }
    }
    
    if (savedActivities) {
      try {
        setActivities(JSON.parse(savedActivities));
      } catch (error) {
        console.error('Failed to parse activities from localStorage:', error);
      }
    }
  }, []);
  
  // Save data to localStorage when it changes
  useEffect(() => {
    if (userInfo !== DEFAULT_USER_INFO) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    
    if (activities.length > 0) {
      localStorage.setItem('activities', JSON.stringify(activities));
    }
  }, [userInfo, activities]);
  
  // Calculate results when userInfo or activities change
  useEffect(() => {
    if (userInfo && activities.length > 0) {
      const results = calculateCalorieResults(userInfo, activities);
      setCalorieResults(results);
      setSetupComplete(true);
    } else {
      setCalorieResults(null);
      setSetupComplete(false);
    }
  }, [userInfo, activities]);
  
  // Handle user info save
  const handleUserInfoSave = (info: UserInfo) => {
    setUserInfo(info);
    setActiveTab('activities');
  };
  
  // Handle activities change
  const handleActivitiesChange = (newActivities: UserActivity[]) => {
    setActivities(newActivities);
    
    // Don't automatically switch tabs when adding activities - let the user navigate manually
    // This completely removes the auto-switching behavior
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Precision Calorie Calculator
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Calculate your caloric needs with precision using MET values for specific activities.
                Enhanced accuracy with age specified in years and months.
                Designed for adults aged 19-59.
              </p>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`${
                    activeTab === 'info'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Personal Info
                </button>
                
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`${
                    activeTab === 'activities'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Activities
                </button>
                
                <button
                  onClick={() => setActiveTab('results')}
                  disabled={!setupComplete}
                  className={`${
                    activeTab === 'results'
                      ? 'border-blue-500 text-blue-600'
                      : !setupComplete
                      ? 'border-transparent text-gray-300 cursor-not-allowed'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Results
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="py-6">
              {activeTab === 'info' && (
                <UserInfoForm initialUserInfo={userInfo} onSave={handleUserInfoSave} />
              )}
              
              {activeTab === 'activities' && (
                <ActivityTracker
                  activities={activities}
                  onActivitiesChange={handleActivitiesChange}
                />
              )}
              
              {activeTab === 'results' && calorieResults && (
                <CalorieDisplay results={calorieResults} userInfo={userInfo} />
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
