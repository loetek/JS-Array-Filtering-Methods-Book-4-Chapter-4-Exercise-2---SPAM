import customers from "./arrayOfObjects";


//I am currently having a very tough time removing commas. 
const seeIT = document.querySelector(".output");
let email = [];
const contacts = (Object.values(customers.last_name))
console.log(contacts.toString(" "));
const email2 = customers.filter(cEmail => {
    const contacts = (Object.values(customers.last_name))
    console.log(contacts.toString(" "));
    email = (Object.values(cEmail.contacts.email));
        seeIT.innerHTML += 
            ` <h2> EMAIL </h2>
            <section> 
                ${contacts} 
                ${email}
            </section>
            `
  return email;
})

console.log(email2);




// customers.forEach(entry => {
// console.log (entry);

// const custEmail = entry.filter(entries => {
//     let email =false;
//     if (entries === "email"){
//         console.log(entries)
//         email = true;
//     }
//     return(email);
//     })

// });