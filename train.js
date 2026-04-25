// console.log('Train area!');
// B-TASK


// A-TASK
function countChar(char, text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }

    return count;
}

// Misollar:
console.log(countChar('a', 'Salom dunyo')); // 1
console.log(countChar('o', 'Salom dunyo')); // 3
console.log(countChar('z', 'Salom dunyo')); // 0

//21chi dars starting
// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yaxshi talaba bo'ling", // 0-20
//   "To'g'riboshliq tanlang va ko'proq xato qiling", // 20-30
//   "Uzingizga ishlashni boshlang", // 30-40
//   "Siz kuchlik bo'lgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling", // 60-
// ];



//starting
// ASYNC function
// async function maslahatBering(a, ) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if ((a <= 20)) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// // call via  then/catch
// console.log('passed here 0');
// maslahatBering(20)
// .then(data => {
//     console.log('javob:', data)
// }).catch(err => {
//     console.log('ERROR:', err)
// });
// console.log("passed here 1");

// // call via asyn/await uslublari
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
//ending


//21chi dars ending