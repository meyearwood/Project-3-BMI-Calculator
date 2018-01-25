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

const mockBMIRiskData = {
    data: {
        Underweight: [
            'Bone Loss',
            'Decreased Immune Function',
            'Cardiac Abnormalities',
            'Iron Deficiencies',
            'Miscarriage (female)',
        ],
        Normal: [
            'Bone Loss',
            'Decreased Immune Function',
            'Cardiac Abnormalities',
            'Iron Deficiencies',
            'Type 2 Diabetes',
            'High Blood Pressure',
            'Heart Disease and Strokes',
            'Certain Types of Cancer',
            'Sleep Apnea',
            'Osteoarthritis',
            'Fatty Liver Disease',
            'Kidney Disease',
        ],
        Overweight: [
            'Type 2 Diabetes',
            'High Blood Pressure',
            'Heart Disease and Strokes',
            'Certain Types of Cancer',
            'Sleep Apnea',
            'Osteoarthritis',
            'Fatty Liver Disease',
            'Kidney Disease',
        ],
        Obese: [
            'Type 2 Diabetes',
            'High Blood Pressure',
            'Heart Disease and Strokes',
            'Certain Types of Cancer',
            'Sleep Apnea',
            'Osteoarthritis',
            'Fatty Liver Disease',
            'Kidney Disease',
        ],
    },
};

export const getBMIScale = () => {
    // TODO: Replace this with Real call to backend.
    return new Promise((resolve) => {
        // Mock time to get response from server
        setTimeout(() => {
            return resolve(mockBMIScaleData.data);
        }, 400);
    });
};

export const getBMIRiskFactors = (category) => {
    // TODO: Replace this with Real call to backend.
    return new Promise((resolve, reject) => {
        if (!category) {
            return reject();
        }

        // Mock time to get response from server
        setTimeout(() => {
            return resolve(mockBMIRiskData.data[category]);
        }, 400);
    });
};
