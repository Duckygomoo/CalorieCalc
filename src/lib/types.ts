// User information types
export type Sex = 'male' | 'female';
export type Goal = 'maintain' | 'lose' | 'gain';

export interface UserInfo {
  age: number;
  ageMonths?: number; // Additional months (0-11)
  sex: Sex;
  height: number; // cm
  weight: number; // kg
  bodyFatPercentage?: number;
  muscleMass?: number;
  fitnessLevel?: string;
  goal: Goal;
  goalRate: number; // calories per day (+ for gain, - for loss)
}

// Activity tracking types
export interface Activity {
  id: string;
  name: string;
  met: number;
  category: string;
  description?: string;
}

export interface UserActivity {
  activityId: string;
  duration: number; // minutes
  intensity?: 'light' | 'moderate' | 'vigorous';
}

// Calculation result types
export interface CalorieResults {
  bmr: number;
  activityCalories: number;
  tdee: number;
  targetCalories: number;
} 