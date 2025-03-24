import React from 'react';
import { CalorieResults, UserInfo } from '../lib/types';

interface CalorieDisplayProps {
  results: CalorieResults;
  userInfo: UserInfo;
}

export default function CalorieDisplay({ results, userInfo }: CalorieDisplayProps) {
  const { bmr, activityCalories, tdee, targetCalories } = results;
  const { goal } = userInfo;
  
  // Determine the goal description
  const getGoalDescription = () => {
    switch (goal) {
      case 'maintain':
        return 'Maintenance';
      case 'lose':
        return 'Weight Loss';
      case 'gain':
        return 'Weight Gain';
      default:
        return 'Custom';
    }
  };
  
  // Determine color based on goal
  const getGoalColor = () => {
    switch (goal) {
      case 'maintain':
        return 'text-blue-600';
      case 'lose':
        return 'text-red-600';
      case 'gain':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };
  
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Your Calorie Calculations
        </h3>
        
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* BMR Card */}
          <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Basal Metabolic Rate
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {bmr}
              </dd>
              <dd className="mt-1 text-sm text-gray-500">
                calories/day
              </dd>
            </div>
          </div>
          
          {/* Activity Calories Card */}
          <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Activity Calories
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {activityCalories}
              </dd>
              <dd className="mt-1 text-sm text-gray-500">
                calories/day
              </dd>
            </div>
          </div>
          
          {/* TDEE Card */}
          <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Daily Energy Expenditure
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {tdee}
              </dd>
              <dd className="mt-1 text-sm text-gray-500">
                calories/day
              </dd>
            </div>
          </div>
          
          {/* Target Calories Card */}
          <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Target for {getGoalDescription()}
              </dt>
              <dd className={`mt-1 text-3xl font-semibold ${getGoalColor()}`}>
                {targetCalories}
              </dd>
              <dd className="mt-1 text-sm text-gray-500">
                calories/day
              </dd>
            </div>
          </div>
        </div>
        
        {/* Calorie Breakdown */}
        <div className="mt-8">
          <h4 className="text-base font-medium text-gray-900">Calorie Breakdown</h4>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Basal Metabolic Rate (BMR)
                    </p>
                    <p className="text-sm text-gray-500">
                      {bmr} calories
                    </p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <p className="text-xs text-gray-500">
                      Calories your body needs at complete rest
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Activity Calories
                    </p>
                    <p className="text-sm text-gray-500">
                      {activityCalories} calories
                    </p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <p className="text-xs text-gray-500">
                      Additional calories burned through physical activity
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Total Daily Energy Expenditure (TDEE)
                    </p>
                    <p className="text-sm text-gray-500">
                      {tdee} calories
                    </p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <p className="text-xs text-gray-500">
                      Total calories burned per day (BMR + Activity)
                    </p>
                  </div>
                </div>
              </li>
              
              {goal !== 'maintain' && (
                <li>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {goal === 'lose' ? 'Calorie Deficit' : 'Calorie Surplus'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {Math.abs(userInfo.goalRate)} calories
                      </p>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <p className="text-xs text-gray-500">
                        {goal === 'lose'
                          ? 'Daily calorie reduction for weight loss'
                          : 'Daily calorie addition for weight gain'}
                      </p>
                    </div>
                  </div>
                </li>
              )}
              
              <li className="bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Target Daily Calories
                    </p>
                    <p className={`text-sm font-bold ${getGoalColor()}`}>
                      {targetCalories} calories
                    </p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <p className="text-xs text-gray-500">
                      {goal === 'maintain'
                        ? 'Calories to maintain your current weight'
                        : goal === 'lose'
                        ? 'Calories to achieve your weight loss goal'
                        : 'Calories to achieve your weight gain goal'}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 