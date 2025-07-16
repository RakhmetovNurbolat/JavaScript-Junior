const getAverage = (a, b, c) => (a + b + c) / 3;

const printBonus = function(depone, deptwo){
   if(depone >= deptwo * 1.3){
      const p = (depone - deptwo) * 100 / deptwo;
      return `Dept 1 will get a bonus of ${p}%`;
   }else if(deptwo >= depone * 1.3){
      const p = (deptwo - depone) * 100 / depone;
      return `Dept 2 will get a bonus of ${p}%`;     
   }
   return 'No, bonus';
}

const done1 = 35467;
const done2 = 29842;
const done3 = 38501; 
const depone = getAverage(done1, done2, done3);

const dtwo1 = 70533;
const dtwo2 = 50121;
const dtwo3 = 33899;

const deptwo = getAverage(dtwo1, dtwo2, dtwo3);
console.log(depone);
console.log(deptwo);
console.log(printBonus(depone, deptwo));
