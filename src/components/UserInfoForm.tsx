import React, { useState } from 'react';
import { UserInfo, Sex, Goal } from '../lib/types';

interface UserInfoFormProps {
  initialUserInfo?: Partial<UserInfo>;
  onSave: (userInfo: UserInfo) => void;
}

const DEFAULT_USER_INFO: UserInfo = {
  age: 30,
  ageMonths: 0,
  sex: 'male',
  height: 175, // cm
  weight: 70, // kg
  goal: 'maintain',
  goalRate: 0,
};

export default function UserInfoForm({ initialUserInfo, onSave }: UserInfoFormProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    ...DEFAULT_USER_INFO,
    ...initialUserInfo,
  });
  
  // State to track empty input fields
  const [emptyFields, setEmptyFields] = useState<Record<string, boolean>>({});
  
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  
  // Convert height from imperial (inches) to metric (cm)
  const inchesToCm = (inches: number) => Math.round(inches * 2.54);
  
  // Convert height from metric (cm) to imperial (inches)
  const cmToInches = (cm: number) => Math.round(cm / 2.54);
  
  // Convert weight from imperial (lbs) to metric (kg)
  const lbsToKg = (lbs: number) => Math.round(lbs * 0.45359237);
  
  // Convert weight from metric (kg) to imperial (lbs)
  const kgToLbs = (kg: number) => Math.round(kg / 0.45359237);
  
  const handleUnitSystemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUnitSystem = e.target.value as 'metric' | 'imperial';
    setUnitSystem(newUnitSystem);
    
    // Convert the current values to the new unit system
    if (newUnitSystem === 'imperial') {
      setUserInfo({
        ...userInfo,
        height: cmToInches(userInfo.height),
        weight: kgToLbs(userInfo.weight),
      });
    } else {
      setUserInfo({
        ...userInfo,
        height: inchesToCm(userInfo.height),
        weight: lbsToKg(userInfo.weight),
      });
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    const numericFields = ['age', 'ageMonths', 'height', 'weight', 'bodyFatPercentage', 'muscleMass', 'goalRate'];
    
    if (numericFields.includes(name)) {
      if (value === '') {
        // Track empty field
        setEmptyFields(prev => ({ ...prev, [name]: true }));
        // Keep the empty value for better UX
        setUserInfo({
          ...userInfo,
          [name]: ''
        } as any);
      } else {
        // Field has a value, update normally
        setEmptyFields(prev => ({ ...prev, [name]: false }));
        setUserInfo({
          ...userInfo,
          [name]: parseFloat(value)
        });
      }
    } else {
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace empty values with zeros before saving
    const finalUserInfo = { ...userInfo };
    
    // Check for any empty numeric fields and replace with appropriate defaults
    Object.keys(emptyFields).forEach(field => {
      if (emptyFields[field]) {
        switch (field) {
          case 'age':
            finalUserInfo.age = DEFAULT_USER_INFO.age;
            break;
          case 'ageMonths':
            finalUserInfo.ageMonths = DEFAULT_USER_INFO.ageMonths;
            break;
          case 'height':
            finalUserInfo.height = DEFAULT_USER_INFO.height;
            break;
          case 'weight':
            finalUserInfo.weight = DEFAULT_USER_INFO.weight;
            break;
          case 'goalRate':
            finalUserInfo.goalRate = DEFAULT_USER_INFO.goalRate;
            break;
          case 'bodyFatPercentage':
            finalUserInfo.bodyFatPercentage = undefined;
            break;
          case 'muscleMass':
            finalUserInfo.muscleMass = undefined;
            break;
        }
      }
    });
    
    // Convert values back to metric if needed
    if (unitSystem === 'imperial') {
      finalUserInfo.height = inchesToCm(finalUserInfo.height as number);
      finalUserInfo.weight = lbsToKg(finalUserInfo.weight as number);
    }
    
    onSave(finalUserInfo as UserInfo);
  };
  
  // Helper to display input value without showing 0
  const getInputValue = (fieldName: keyof UserInfo) => {
    if (emptyFields[fieldName]) {
      return '';
    }
    return userInfo[fieldName];
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <p className="text-sm text-blue-700">
          This calculator uses data specifically designed for adults aged 19-59. Including months in your age provides greater precision in the calculations. Results may be less accurate for those outside this age range.
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="metric"
              name="unitSystem"
              value="metric"
              checked={unitSystem === 'metric'}
              onChange={handleUnitSystemChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="metric" className="ml-2 text-sm font-medium text-gray-700">
              Metric (cm, kg)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="imperial"
              name="unitSystem"
              value="imperial"
              checked={unitSystem === 'imperial'}
              onChange={handleUnitSystemChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="imperial" className="ml-2 text-sm font-medium text-gray-700">
              Imperial (in, lbs)
            </label>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="number"
                name="age"
                id="age"
                value={getInputValue('age')}
                onChange={handleChange}
                min="1"
                max="120"
                required
                placeholder="Years"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              />
            </div>
            <div>
              <input
                type="number"
                name="ageMonths"
                id="ageMonths"
                value={userInfo.ageMonths === undefined ? 0 : userInfo.ageMonths}
                onChange={handleChange}
                min="0"
                max="11"
                placeholder="Months"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
          <span className="text-xs text-gray-500 mt-1">Years and months (0-11)</span>
        </div>
        
        <div>
          <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
            Biological Sex
          </label>
          <select
            name="sex"
            id="sex"
            value={userInfo.sex}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            Height ({unitSystem === 'metric' ? 'cm' : 'inches'})
          </label>
          <input
            type="number"
            name="height"
            id="height"
            value={getInputValue('height')}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          />
        </div>
        
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={getInputValue('weight')}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          />
        </div>
        
        <div>
          <label htmlFor="bodyFatPercentage" className="block text-sm font-medium text-gray-700">
            Body Fat % (optional)
          </label>
          <input
            type="number"
            name="bodyFatPercentage"
            id="bodyFatPercentage"
            value={userInfo.bodyFatPercentage === undefined || emptyFields.bodyFatPercentage ? '' : userInfo.bodyFatPercentage}
            onChange={handleChange}
            min="1"
            max="70"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          />
        </div>
        
        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
            Goal
          </label>
          <select
            name="goal"
            id="goal"
            value={userInfo.goal}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          >
            <option value="maintain">Maintain Weight</option>
            <option value="lose">Lose Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>
        
        {userInfo.goal !== 'maintain' && (
          <div>
            <label htmlFor="goalRate" className="block text-sm font-medium text-gray-700">
              {userInfo.goal === 'lose' ? 'Daily Calorie Deficit' : 'Daily Calorie Surplus'}
            </label>
            <input
              type="number"
              name="goalRate"
              id="goalRate"
              value={emptyFields.goalRate ? '' : Math.abs(userInfo.goalRate as number)}
              onChange={(e) => {
                const value = e.target.value;
                
                if (value === '') {
                  setEmptyFields(prev => ({ ...prev, goalRate: true }));
                  setUserInfo({
                    ...userInfo,
                    goalRate: ''
                  } as any);
                } else {
                  setEmptyFields(prev => ({ ...prev, goalRate: false }));
                  const numValue = parseFloat(value) || 0;
                  setUserInfo({
                    ...userInfo,
                    goalRate: userInfo.goal === 'lose' ? -numValue : numValue,
                  });
                }
              }}
              min="0"
              max="1000"
              step="50"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
            />
            <p className="mt-1 text-sm text-gray-500">
              {userInfo.goal === 'lose'
                ? 'Recommended: 500 calories for ~1 lb/week'
                : 'Recommended: 250-500 calories for muscle gain'}
            </p>
          </div>
        )}
      </div>
      
      <div className="pt-5">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
} 