

const namefn = (str) => {
    const [firstName, ...lastNameArray] = str.trim().split(" ");
    const lastName = lastNameArray.join(" ").trim();
    return {
        firstName,
       ... (lastName !== "" &&{lastName:lastName})
    }
}
const data = namefn("sharif razak ek")
console.log("first")
console.log(data)
console.log(namefn("haris")) //{firstName : haris}
console.log(namefn('haris sharif ek'))  //{firstName:haris , lastName: sharif ek }




