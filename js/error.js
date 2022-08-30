// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(data=>console.log(data));

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// console.log(3);
const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];
console.log(dreamGirl[0].sokina.contactInfo[1].instagram);