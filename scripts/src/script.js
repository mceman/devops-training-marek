// Coding challenge 1
//BMI = mass / height^2

var bmiMark, bmiJohn, heightMark, heightJohn, massMark, massJohn;

heightMark = 1.90;
massMark = 100;

heightJohn = 1.75;
massJohn = 80;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

higherBMIMark = massMark > massJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMIMark);


/* Coding challenge 2
var mikeGame1, mikeGame2, mikeGame3;
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

var johnGame1, johnGame2, johnGame3;
johnGame1 = 89; //89
johnGame2 = 120;
johnGame3 = 103;

var maryGame1, maryGame2, maryGame3;
maryGame1 = 97;
maryGame2 = 134;
maryGame3 = 105;

var johnAverage = (johnGame1 + johnGame2 + johnGame3) / 3;

var mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3) / 3;

var maryAverage = (maryGame1 + maryGame2 + maryGame3) / 3;

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    var winner = 'Team John';
    var score = johnAverage;
} else if (mikeAverage > mikeAverage && mikeAverage > maryAverage) {
    var winner = 'Team Mike';
    var score = mikeAverage;
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    var winner = 'Team Mary';
    var score = maryAverage;
} else if (johnAverage === mikeAverage && mikeAverage === maryAverage) {
    var draw = true;
}

draw ? console.log('Teams have the same average points: ' + maryAverage + ', it\'s a draw.') : console.log('And the winner is: ' + winner + ' with ' + score + ' average points!');
*/ 

//Coding challenge 3
/*
var bills = new Array(124, 48, 268);

function tipCalculator (bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >=50 && bill <= 200) {
        return bill * 0.15;
    } else return bill * 0.1;
}

var tips = new Array(tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]));
var sum = new Array (bills[0]+tips[0], bills[1]+ tips[1], bills[2]+tips[2]);

console.log(tips);
console.log(sum);

*/

//Coding challenge 4

var mark = {
    fullName: 'Mark',
    mass: 100,
    height: 1.90,
    bmiCalc: function () {
        return this.bmi = this.mass / (this.height^2)
    }
}

var john = {
    fullName: 'John',
    mass: 80,
    height: 1.75,
    bmiCalc: function () {
        return this.bmi = this.mass / (this.height^2)
    }
}

john.bmiCalc();
mark.bmiCalc();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(mark.fullName + '\'s BMI is higher');
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + '\'s BMI is higher');
} else console.log(john.fullName + ' and ' + mark.fullName + ' do both have same BMI');


//bubblesort
/* xixixix
var temp;
numbers = [14, 2, 55, 1, 0, 38];
console.log(numbers);
for (var i=0; i < numbers.length; i++) {
    for (var j=0; j < i; j++) {
        if (numbers[j] > numbers[i]){
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log(numbers); */

// im god am i


var johnsFamily = {
    bills: [124, 48, 258, 180, 42],
    tips: [],
    sum: [],
    tipCalculator: function (bills) {
        for (i=0;i<this.bills.length;i++){
        if (this.bills[i] < 50) {
            this.tips[i] = this.bills[i] * .2;
            this.sum[i] = this.bills[i] + this.tips[i];
        }
        else if (this.bills[i] >=50 && this.bills[i] <200){
            this.tips[i] = this.bills[i] * .15;
            this.sum[i] = this.bills[i] + this.tips[i]; 
        }
        else 
        this.tips[i] = this.bills[i] * .1;
        this.sum[i] = this.bills[i] + this.tips[i];
        }
    }
    
};

johnsFamily.tipCalculator(johnsFamily.bills);
console.log(johnsFamily.tips);
console.log(johnsFamily.sum);

var marksFamily = {
    bills: [77, 375, 110, 45],
    tips: [],
    sum: [],
    tipCalculator: function (bills) {
        for (i=0;i<this.bills.length;i++){
        if (this.bills[i] < 100) {
            this.tips[i] = this.bills[i] * .2;
            this.sum[i] = this.bills[i] + this.tips[i];
        }
        else if (this.bills[i] >=100 && this.bills[i] <300){
            this.tips[i] = this.bills[i] * .1;
            this.sum[i] = this.bills[i] + this.tips[i]; 
        }
        else 
        this.tips[i] = this.bills[i] * .25;
        this.sum[i] = this.bills[i] + this.tips[i];
        }
    }
};

marksFamily.tipCalculator(marksFamily.bills);

function calcAverage (person){
    var sum=0;
    for (i=0; i<person.tips.length; i++) {
        sum += person.tips[i];
    }
    return sum / person.tips.length;
}
var marksAverage = calcAverage(marksFamily);
var johnsAverage = calcAverage(johnsFamily);
console.log('John\'s average is ' + johnsAverage);
console.log('Mark\'s average is ' + marksAverage);

if (marksAverage !== johnsAverage) {
    marksAverage > johnsAverage ? 
    console.log('Mark\'s family paid more tips')    :
    console.log('John\'s family paid more tips');
   
} else console.log('They both have same tips average with ' + marksAverage);