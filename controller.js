module.exports.calculateBMI = function(mass,height){
    const heightInM = height/100;
    var bmi= mass/(heightInM*heightInM);
    return Math.round(bmi * 100) / 100;
}

module.exports.checkBmiCategory =function(bmi){   
    if(bmi>=18.4 && bmi<=18.5) return ['Underweight','Malnutrition risk'];
    else if(bmi>=18.6 && bmi<=24.9) return ['Normal Weight','Low risk'];
    else if (bmi>=25 && bmi<=29.9) return ['Overweight','Enhanced risk'];
    else if(bmi>=30 && bmi<=34.9) return ['Moderately obese','Medium risk'];
    else if(bmi>=35 && bmi<=39.9) return ['Severely obese','High risk'];
    else return ['Very severely obese','Very high risk'];
}