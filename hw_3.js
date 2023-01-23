// NORMAL level
// Task 1
{
   const STR = 'true', BOOL = false, NUM = 17, UNDEF = undefined, NLL = null;

   console.log(`Variable: STR have type: ${typeof(STR)}`);
   console.log(`Variable: BOOL have type: ${typeof(BOOL)}`);
   console.log(`Variable: NUM have type: ${typeof(NUM)}`);
   console.log(`Variable: UNDEF have type: ${typeof(UNDEF)}`);
   console.log(`Variable: NLL have type: ${typeof(NLL)}`);
}

// Task 2
{
   const HEIGHT = 15;
   const WIDTH = 20;

   if (HEIGHT > WIDTH) {
      console.log(`Max number is ${HEIGHT}`);
   }
   else if (WIDTH > HEIGHT) {
      console.log(`Max number is ${WIDTH}`);
   }   
   else {
      console.log(`Numbers are equal`);
   }
}

// Task 3
{
   for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0) {
         console.log(i);
      }
      
   }
}

// Task 4
{
   const KEY = true, DOCUMENTS = true, PEN = true, APPLE = false, ORANGE = true;
   const SHOULD_GO_TO_WORK = KEY && DOCUMENTS && PEN && (APPLE || ORANGE);

   console.log(`Ready to work: ${SHOULD_GO_TO_WORK}`);
}

// Task 5
{
   const USER_INPUT = Number(prompt());
   let resultStr = "";

   // if (USER_INPUT % 3 === 0 && USER_INPUT % 5 === 0) {
   //    console.log("FizBuz");
   // }
   // else if (USER_INPUT % 3 === 0) {
   //    console.log("Buz");
   // } 
   // else if (USER_INPUT % 5 === 0) {
   //    console.log("Fiz");
   // }     
   // else {
   //    console.log("not divisible by 3 or 5");
   // }

   if (USER_INPUT % 5 === 0) {
      resultStr += "Fiz";
   } 

   if (USER_INPUT % 3 === 0) {
      resultStr += "Buz";
   } 
   
   if(Boolean(resultStr) === false){
      resultStr = "not divisible by 3 or 5";
   }

   console.log(resultStr);
}

// Task 6
{
   const USER_INPUT = Number(prompt());

   if (USER_INPUT <= 18 && USER_INPUT >= 16) {
      console.log("Можешь прокатиться на мотоцикле");
   }
   else if (USER_INPUT > 18) {
      console.log("Садись за руль машины");
   } 
   else if (USER_INPUT < 18) {
      console.log("Иди пешком");
   }     
   else {
      console.log("incorrect input");
   }
}

// Task 7
{
   const USER_INPUT = prompt();

   switch (USER_INPUT) {
      case "юг":
         console.log("на юг пойдешь счастье найдешь");
         break;
         case "север":
         console.log("на север пойдешь много денег найдешь");
         break;
         case "запад":
         console.log("на запад пойдешь верного друга найдешь");
         break;
         case "восток":
         console.log("на восток пойдешь разработчиком станешь");
         break;         
   
      default:
         console.log("try again");
         break;
   }
}

// ADVANCED level
// Task 1
{
   const USERNAME = 'пОлИнА нАбЕрЕжНаЯ';
   let correctUsername = "";

   for (let i = 0; i < USERNAME.length; i++) {
      if (i === 0) {
         correctUsername += USERNAME[i].toUpperCase();
      }  
      else if (USERNAME[i - 1] === ' '){
         correctUsername += USERNAME[i].toUpperCase();
      }
      else{
         correctUsername += USERNAME[i].toLowerCase();
      }
   }   
   
   alert(`Привет, ${correctUsername}`);
}

// Task 2
{
   const USER_START_INPUT = Number(prompt("Введите начальное число"));
   let resultStr = "", resultNumber = USER_START_INPUT;


   if (isFinite(USER_START_INPUT)) {
      const USER_MINUS_INPUT = Number(prompt("cколько отнять?"));
      const USER_PLUS_INPUT = Number(prompt("cколько прибавить?"));
      const USER_MULT_INPUT = Number(prompt("cколько умножить?"));
      const USER_DIV_INPUT = Number(prompt("cколько разделить?"));

      resultStr += `${USER_START_INPUT}`;

      if(isFinite(USER_MINUS_INPUT)){
         resultStr += ` - ${USER_MINUS_INPUT}`;
         resultNumber -= USER_MINUS_INPUT;
      } 
      
      if (isFinite(USER_PLUS_INPUT)){
         resultStr = "(" + resultStr + ")" + ` + ${USER_PLUS_INPUT}`;
         resultNumber += USER_PLUS_INPUT;
      }
      
      if (isFinite(USER_MULT_INPUT)){
         resultStr = "(" + resultStr + ")"  + ` * ${USER_MULT_INPUT}`;
         resultNumber *= USER_MULT_INPUT;
      }
      
      if (isFinite(USER_DIV_INPUT)){
         resultStr = "(" + resultStr + ")" + ` / ${USER_DIV_INPUT}`;
         resultNumber = resultNumber / USER_DIV_INPUT;
      }

      resultStr = "(" + resultStr + " = " + resultNumber + ")";
      console.log(resultStr);

   } else {
      console.log("enter number");
   }
}

// Task 3
{
   let octo = "";
   for (let i = 0; i < 6; i++) {
      octo += "#";      
      console.log(octo);
   }
}