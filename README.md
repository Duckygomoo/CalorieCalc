# Precision Calorie Calculator

A precision-focused web application for estimating maintenance caloric needs and daily energy expenditure using specific physical activity data (MET values) instead of general activity multipliers.

## Features

- **BMR Calculation** using the Mifflin-St Jeor equation
- **Activity Energy Calculation** using MET (Metabolic Equivalent of Task) values
- **TDEE (Total Daily Energy Expenditure)** calculation based on BMR and activity
- **Goal Adjustment** for maintenance, weight loss, or weight gain
- **Unit Conversion** between metric (cm/kg) and imperial (inches/lbs)
- **Custom Activities** - add your own activities with estimated MET values
- **Local Storage** - your data is saved in your browser

## Technical Details

This project is built with:

- **Next.js & React** - for the UI and component structure
- **TypeScript** - for type safety and better developer experience
- **Tailwind CSS** - for styling

## Getting Started

### Prerequisites

Make sure you have Node.js (v14 or newer) installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/precision-calorie-calculator.git
   ```

2. Navigate to the project directory:
   ```
   cd precision-calorie-calculator
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## How to Use

1. **Enter Personal Information**
   - Provide your age, sex, height, weight, and goal
   - Choose between metric and imperial units
   - For weight loss or gain, select your desired rate

2. **Add Activities**
   - Search for activities or browse by category
   - Add activities to your daily list
   - Set the duration for each activity
   - Create custom activities if needed

3. **View Results**
   - See your BMR (Basal Metabolic Rate)
   - View calories burned from activities
   - Check your TDEE (Total Daily Energy Expenditure)
   - View your target calories based on your goals

## Science Behind the Calculator

### BMR Calculation

The calculator uses the Mifflin-St Jeor equation:

- For males: `BMR = 10 * weight (kg) + 6.25 * height (cm) - 5 * age + 5`
- For females: `BMR = 10 * weight (kg) + 6.25 * height (cm) - 5 * age - 161`

### Activity Energy Calculation

Calories burned for each activity are calculated using:

`Calories burned = MET * weight (kg) * duration (hours)`

Where MET is the Metabolic Equivalent of Task, a measure of the energy cost of activities.

### TDEE Calculation

The Total Daily Energy Expenditure is calculated by adding:

`TDEE = BMR + Total calories burned from all activities`

This differs from traditional calculators which use lifestyle multipliers.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- MET values sourced from the Compendium of Physical Activities
- Inspired by the need for more precise calorie calculators