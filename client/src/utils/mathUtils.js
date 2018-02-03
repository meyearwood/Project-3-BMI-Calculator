export const feetToInches = (feet) => {
    return feet * 12;
};

export const bmiCalc = (weight, height) => {
    // https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_2.html
    return +((weight / (height * height)) * 703).toFixed(1);
};
//bMI calculator