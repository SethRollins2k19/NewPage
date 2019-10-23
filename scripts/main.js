// JavaScript Document
let colorGenerate = function ()
{
	let ColorBg = "#";
	for (let i = 0; i < 6; i++){
		ColorBg+=generateSexadeciminalNumber();
	}
	return ColorBg;
}
let generateSexadeciminalNumber = function () {
	let Sexadeciminal = Math.floor((Math.random()*16));
	switch (Sexadeciminal) {
		case 10:
			return 'A';
		case 11:
			// statements_def
			return 'B';
		case 12:
			// statements_def
			return 'C';

		case 13:
			// statements_def
			return 'D';

		case 14:
			// statements_def
			return 'E';

		case 15:
			// statements_def
			return 'F';
		default : 
			return String(Sexadeciminal);
	}
}
let setColorBackground = function () {
	document.body.style.background = colorGenerate();
}
let findDevotedFor = function(firstNum, secondNum) {
			while(firstNum!=secondNum){
				if(firstNum>secondNum){
					firstNum-=secondNum;
				} else {
					secondNum-=firstNum;
				}

			}
			return firstNum;

}		// let devoted = 1;
		// let maxValue = (firstNum>secondNum)? firstNum : secondNum;
		// let minValue = (firstNum<secondNum)? firstNum : secondNum;
		
		// for(let i = minValue; minValue < maxValue; minValue--){
		// 	if (maxValue%i == 0){
		// 		let newDevoted = i;
		// 		if (devoted>newDevoted){

		// 		}
		// 	}			

		// }
