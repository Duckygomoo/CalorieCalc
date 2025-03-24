import React, { useState, useEffect } from 'react';
import { Activity, UserActivity } from '../lib/types';
import { 
  metActivityData, 
  getActivityCategories, 
  getActivitiesByCategory,
  searchActivities 
} from '../lib/data/metActivityData';
import CustomActivityForm from './CustomActivityForm';

interface ActivityTrackerProps {
  activities: UserActivity[];
  onActivitiesChange: (activities: UserActivity[]) => void;
}

export default function ActivityTracker({ 
  activities, 
  onActivitiesChange 
}: ActivityTrackerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [customActivities, setCustomActivities] = useState<Activity[]>([]);
  
  // Get all available categories
  const categories = getActivityCategories();
  
  // Load custom activities from localStorage
  useEffect(() => {
    const savedCustomActivities = localStorage.getItem('customActivities');
    if (savedCustomActivities) {
      try {
        setCustomActivities(JSON.parse(savedCustomActivities));
      } catch (error) {
        console.error('Failed to parse custom activities from localStorage:', error);
      }
    }
  }, []);
  
  // Update filtered activities when category, search query, or custom activities change
  useEffect(() => {
    // Combine predefined and custom activities
    const allActivities = [...metActivityData, ...customActivities];
    
    if (searchQuery.trim()) {
      // If there's a search query, search through all activities
      const lowercaseQuery = searchQuery.toLowerCase();
      setFilteredActivities(
        allActivities.filter(activity => 
          activity.name.toLowerCase().includes(lowercaseQuery) ||
          activity.category.toLowerCase().includes(lowercaseQuery)
        )
      );
    } else if (selectedCategory) {
      // If a category is selected, get activities for that category
      setFilteredActivities(
        allActivities.filter(activity => activity.category === selectedCategory)
      );
    } else {
      // Default: show a limited number of popular activities
      setFilteredActivities(allActivities.slice(0, 12));
    }
  }, [selectedCategory, searchQuery, customActivities]);
  
  // Function to add a new activity
  const addActivity = (activityId: string) => {
    onActivitiesChange([
      ...activities,
      { activityId, duration: 30 } // Default to 30 minutes
    ]);
  };
  
  // Function to update an existing activity
  const updateActivity = (index: number, updates: Partial<UserActivity>) => {
    const updatedActivities = [...activities];
    updatedActivities[index] = {
      ...updatedActivities[index],
      ...updates
    };
    onActivitiesChange(updatedActivities);
  };
  
  // Function to remove an activity
  const removeActivity = (index: number) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    onActivitiesChange(updatedActivities);
  };
  
  // Function to add a custom activity
  const addCustomActivity = (newActivity: Activity) => {
    // Add to custom activities
    const updatedCustomActivities = [...customActivities, newActivity];
    setCustomActivities(updatedCustomActivities);
    
    // Save to localStorage
    localStorage.setItem('customActivities', JSON.stringify(updatedCustomActivities));
    
    // Add to user's activities
    addActivity(newActivity.id);
  };
  
  // Find activity details by ID
  const getActivityDetails = (id: string): Activity | undefined => {
    const allActivities = [...metActivityData, ...customActivities];
    return allActivities.find(activity => activity.id === id);
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add Your Daily Activities
          </h3>
          <div className="mt-4 max-w-xl text-sm text-gray-500">
            <p>
              Select activities from the list or search for specific activities.
              Each activity will contribute to your daily calorie burn estimate.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="search" className="sr-only">
                Search Activities
              </label>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedCategory(''); // Clear category when searching
                }}
              />
            </div>
            
            <div>
              <label htmlFor="category" className="sr-only">
                Filter by Category
              </label>
              <select
                id="category"
                name="category"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSearchQuery(''); // Clear search when choosing category
                }}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Activity List */}
          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between rounded-md border border-gray-200 p-3 hover:bg-gray-50"
              >
                <div className="flex-1 mr-4">
                  <h4 className="text-sm font-medium text-gray-900">{activity.name}</h4>
                  <p className="text-xs text-gray-500">
                    MET: {activity.met.toFixed(1)} • {activity.category}
                    {activity.id.startsWith('custom_') && <span className="ml-1 text-blue-500">(Custom)</span>}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => addActivity(activity.id)}
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-2.5 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
          
          {/* Custom Activity Form */}
          <CustomActivityForm onAddActivity={addCustomActivity} />
        </div>
      </div>
      
      {/* User's Selected Activities */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Your Daily Activities
          </h3>
          
          {activities.length === 0 ? (
            <p className="mt-4 text-sm text-gray-500">
              No activities added yet. Add activities from the list above.
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-gray-200">
              {activities.map((userActivity, index) => {
                const activityDetails = getActivityDetails(userActivity.activityId);
                
                return (
                  <li key={index} className="py-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <h4 className="text-sm font-medium text-gray-900">
                          {activityDetails?.name || 'Unknown Activity'}
                          {activityDetails?.id.startsWith('custom_') && (
                            <span className="ml-1 text-xs text-blue-500">(Custom)</span>
                          )}
                        </h4>
                        <p className="text-xs text-gray-500">
                          MET: {activityDetails?.met.toFixed(1) || '?'} • Category: {activityDetails?.category || '?'}
                        </p>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label
                          htmlFor={`duration-${index}`}
                          className="block text-xs font-medium text-gray-700"
                        >
                          Duration (minutes)
                        </label>
                        <input
                          type="number"
                          name={`duration-${index}`}
                          id={`duration-${index}`}
                          value={userActivity.duration}
                          onChange={(e) => 
                            updateActivity(index, { duration: parseInt(e.target.value) || 0 })
                          }
                          min="1"
                          max="1440"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm text-gray-900"
                        />
                      </div>
                      
                      <div className="flex items-end sm:col-span-1">
                        <button
                          type="button"
                          onClick={() => removeActivity(index)}
                          className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-2.5 py-1.5 text-xs font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
} 