// console.log('Train area!');
// npm run train

// C-TASK starting
class Shop {
    constructor(osh, somsa, manti) {
        this.mahsulotlar = {
            osh,
            somsa,
            manti,
        };
    }

    vaqt() {
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    qoldiq() {
        console.log(
            `Hozir ${this.vaqt()} da ${this.mahsulotlar.osh} ta osh, ${this.mahsulotlar.somsa} ta somsa va ${this.mahsulotlar.manti} ta manti mavjud`,
        );
    }

    sotish(mahsulot, soni) {
        if (!(mahsulot in this.mahsulotlar)) {
            console.log("Bunday mahsulot yo‘q!");
            return;
        }

        if (this.mahsulotlar[mahsulot] < soni) {
            console.log(`${mahsulot} yetarli emas!`);
            return;
        }

        this.mahsulotlar[mahsulot] -= soni;
        console.log(`${soni} ta ${mahsulot} sotildi`);
    }

    qabul(mahsulot, soni) {
        if (!(mahsulot in this.mahsulotlar)) {
            console.log("Bunday mahsulot yo‘q!");
            return;
        }

        this.mahsulotlar[mahsulot] += soni;
        console.log(`${soni} ta ${mahsulot} qabul qilindi`);
    }
}

const shop = new Shop(7, 8, 10);
shop.qoldiq();
shop.sotish("osh", 5);
shop.qabul("manti", 2);
shop.qoldiq();
// C-TASK ending


// // B-TASK starting
// function countDigits(text) {
//     let count = 0;

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] >= '0' && text[i] <= '9') {
//             count++;
//         }
//     }
// return count;
// }

// console.log(countDigits("jdshfur34y9rewh1fbd73huriej209e8jifnc")); // 10
// // B-TASK ending


// // A-TASK starting
// function countChar(char, text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
// // Misollar:
// console.log(countChar('A', 'MITASK A BAJARILDI')); // 4
// console.log(countChar('B', 'MITASK A BAJARILDI')); // 1
// console.log(countChar('S', 'MITASK A BAJARILDI')); // 1
// // A-TASK ending


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


