// TODO: Remove this in favor of real API call.
// This is mock data that resembles what I should get from API Call.
const mockBMIScaleData = {
    data: [
        {
            bmiIndex: 'Less Than 18.5',
            meaning: 'Underweight',
        },
        {
            bmiIndex: '18.5 - 24.9',
            meaning: 'Normal',
        },
        {
            bmiIndex: '25.0 - 29.9',
            meaning: 'Overweight',
        },
        {
            bmiIndex: 'Above 30',
            meaning: 'Obese',
        },
    ],
};

const getBMIScale = () => {
    // TODO: Replace this with Real call to backend.
    return new Promise((resolve) => {
        // Mock time to get response from server
        setTimeout(() => {
            return resolve(mockBMIScaleData);
        }, 400);
    });
};

export default getBMIScale;
