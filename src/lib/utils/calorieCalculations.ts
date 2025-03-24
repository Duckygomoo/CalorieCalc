import { UserInfo, UserActivity, CalorieResults } from '../types';
import { getActivityById } from '../data/metActivityData';

/**
 * Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation
 */
export const calculateBMR = (userInfo: UserInfo): number => {
  const { sex, weight, height, age, ageMonths = 0 } = userInfo;
  
  // Convert age to decimal years (e.g., 19 years and 6 months = 19.5 years)
  const ageInYears = age + (ageMonths / 12);
  
  if (sex === 'male') {
    return 10 * weight + 6.25 * height - 5 * ageInYears + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * ageInYears - 161;
  }
};

/**
 * Calculate calories burned for a specific activity
 * Formula: Calories burned = MET * weight (kg) * duration (hours)
 */
export const calculateActivityCalories = (
  activity: UserActivity,
  weightKg: number
): number => {
  const activityData = getActivityById(activity.activityId);
  
  if (!activityData) {
    return 0;
  }
  
  // Convert duration from minutes to hours
  const durationHours = activity.duration / 60;
  
  // Calculate calories burned
  return activityData.met * weightKg * durationHours;
};

/**
 * Calculate total calories burned from all activities
 */
export const calculateTotalActivityCalories = (
  activities: UserActivity[],
  weightKg: number
): number => {
  return activities.reduce(
    (total, activity) => total + calculateActivityCalories(activity, weightKg),
    0
  );
};

/**
 * Calculate Total Daily Energy Expenditure (TDEE)
 * TDEE = BMR + Total calories burned from all activities
 */
export const calculateTDEE = (
  bmr: number,
  totalActivityCalories: number
): number => {
  return bmr + totalActivityCalories;
};

/**
 * Calculate target calories based on user's goal
 */
export const calculateTargetCalories = (
  tdee: number,
  goal: UserInfo['goal'],
  goalRate: number
): number => {
  switch (goal) {
    case 'maintain':
      return tdee;
    case 'lose':
    case 'gain':
      return tdee + goalRate;
    default:
      return tdee;
  }
};

/**
 * Calculate all calorie values and return comprehensive results
 */
export const calculateCalorieResults = (
  userInfo: UserInfo,
  activities: UserActivity[]
): CalorieResults => {
  const bmr = calculateBMR(userInfo);
  const activityCalories = calculateTotalActivityCalories(activities, userInfo.weight);
  const tdee = calculateTDEE(bmr, activityCalories);
  const targetCalories = calculateTargetCalories(tdee, userInfo.goal, userInfo.goalRate);
  
  return {
    bmr: Math.round(bmr),
    activityCalories: Math.round(activityCalories),
    tdee: Math.round(tdee),
    targetCalories: Math.round(targetCalories),
  };
}; 