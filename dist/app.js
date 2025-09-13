"use strict";
const sites = [
    {
        companyName: "WebStudio UA", // назва компанії на час розробки
        owner: "Іван Петренко", // власник компанії
        sponsors: [
            // масив спонсорів
            { lastName: "Коваль", firstName: "Олександр", amount: 5000 },
            { lastName: "Мельник", firstName: "Марія", amount: 3500 },
        ],
        releaseYear: 2020, // рік випуску
        siteCost: 15000, // вартість сайту
    },
    {
        companyName: "Digital Future", // назва компанії на час розробки
        owner: "Олег Сидоренко", // власник компанії
        sponsors: [
            { lastName: "Шевченко", firstName: "Анна", amount: 7000 },
            { lastName: "Іванов", firstName: "Дмитро", amount: 2000 },
            { lastName: "Гриценко", firstName: "Наталія", amount: 4000 },
        ],
        releaseYear: 2008, // рік випуску
        siteCost: 25000, // вартість сайту
    },
    {
        companyName: "NextGen Solutions", // назва компанії на час розробки
        owner: "Катерина Коваленко", // власник компанії
        sponsors: [{ lastName: "Бондар", firstName: "Петро", amount: 1000000 }],
        releaseYear: 2023, // рік випуску
        siteCost: 8000, // вартість сайту
    },
];
//--- 1) загальну вартість усіх сайтів
function getSumPrices(sites) {
    let sumPrices = 0;
    for (let i = 0; i < sites.length; i++) {
        sumPrices += sites[i].siteCost;
    }
    return sumPrices;
}
console.log(getSumPrices(sites));
//  2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
function getSitesYearOr2000And2009(sites) {
    return sites.reduce((acc, site) => site.releaseYear > 2000 && site.releaseYear < 2009 ? acc + 1 : acc, 0);
}
console.log(getSitesYearOr2000And2009(sites));
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
function getSponsorsSum(sites) {
    return sites.sponsors.reduce((acc, sponsor) => acc + sponsor.amount, 0);
}
function getSitesWithBigInvestments(sites) {
    return sites.filter((site) => getSponsorsSum(site) > 100000);
}
console.log(getSitesWithBigInvestments(sites));
//  4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у
//                         масив)
function getArrSponsors(sites) {
    const sponsorArr = [];
    sites.forEach((site) => {
        site.sponsors.forEach((sponsor) => {
            sponsorArr.push(sponsor);
        });
    });
    return sponsorArr;
}
console.log(getArrSponsors(sites));
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше
function getSiteCost(sites) {
    const costArrTo10000 = [];
    const costArrToInfiniti = [];
    function to10000() {
        return sites.filter((site) => site.siteCost < 10000);
    }
    function toInfiniti() {
        return sites.filter((site) => site.siteCost > 10000);
    }
    return { to10000, toInfiniti };
}
const { to10000, toInfiniti } = getSiteCost(sites);
console.log("Сайти дешевші за 10000:", to10000());
console.log("Сайти дорожчі за 10000:", toInfiniti());
