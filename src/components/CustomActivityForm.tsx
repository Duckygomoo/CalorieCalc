import React, { useState } from 'react';
import { Activity } from '../lib/types';

interface CustomActivityFormProps {
  onAddActivity: (activity: Activity) => void;
}

export default function CustomActivityForm({ onAddActivity }: CustomActivityFormProps) {
  const [name, setName] = useState('');
  const [met, setMet] = useState(3.0); // Default MET value
  const [category, setCategory] = useState('Custom');
  const [description, setDescription] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a unique ID for the custom activity
    const id = `custom_${Date.now()}`;
    
    // Create the new activity
    const newActivity: Activity = {
      id,
      name,
      met,
      category,
      description: description || undefined
    };
    
    // Add the activity through the parent component
    onAddActivity(newActivity);
    
    // Reset the form
    setName('');
    setMet(3.0);
    setCategory('Custom');
    setDescription('');
    setIsFormVisible(false);
  };
  
  if (!isFormVisible) {
    return (
      <button
        onClick={() => setIsFormVisible(true)}
        className="mt-6 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Custom Activity
      </button>
    );
  }
  
  return (
    <div className="mt-6 bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add Custom Activity
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Add your own custom activity with an estimated MET value.
            MET values typically range from 1.0 (resting) to 18.0 (intense exercise).
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="custom-activity-name" className="block text-sm font-medium text-gray-700">
                Activity Name
              </label>
              <input
                type="text"
                name="custom-activity-name"
                id="custom-activity-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                placeholder="e.g., Rock Climbing"
              />
            </div>
            
            <div>
              <label htmlFor="custom-activity-met" className="block text-sm font-medium text-gray-700">
                MET Value
              </label>
              <input
                type="number"
                name="custom-activity-met"
                id="custom-activity-met"
                value={met}
                onChange={(e) => setMet(parseFloat(e.target.value) || 1.0)}
                min="0.5"
                max="20"
                step="0.1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              />
              <p className="mt-1 text-xs text-gray-500">
                Resting = 1.0, Light activity = 2-3, Moderate = 3-6, Vigorous = 6+
              </p>
            </div>
            
            <div>
              <label htmlFor="custom-activity-category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="custom-activity-category"
                id="custom-activity-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                placeholder="e.g., Sports, Household, etc."
              />
            </div>
            
            <div>
              <label htmlFor="custom-activity-description" className="block text-sm font-medium text-gray-700">
                Description (Optional)
              </label>
              <input
                type="text"
                name="custom-activity-description"
                id="custom-activity-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                placeholder="Brief description of the activity"
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsFormVisible(false)}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 