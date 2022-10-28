const controller = require('./controller')
console.log('running')

var data =[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, 
           {"Gender": "Male", "HeightCm": 161,"WeightKg":85 }, 
           {"Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, 
           { "Gender": "Female","HeightCm": 166,"WeightKg": 62}, 
           {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
           {"Gender": "Female","HeightCm": 167, "WeightKg": 82}]

var count =0
data.forEach(e=>{
    var bmi=controller.calculateBMI(e.WeightKg,e.HeightCm)
    const bmiCategoryAndRisk=controller.checkBmiCategory(bmi)
    // console.log('bmi',bmi,bmiCategoryAndRisk[0],bmiCategoryAndRisk[1])
    e["BMI"]=bmi,
    e["BMI Category"]=bmiCategoryAndRisk[0],
    e["Health risk"]=bmiCategoryAndRisk[1]
})
// JSON.stringify(data)

console.log('after adding',data);
console.log(controller.calculateBMI(75,175))