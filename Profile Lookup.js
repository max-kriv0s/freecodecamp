// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    const filter = contacts.filter(el => el.firstName === name);
    if (filter.length ===0) return "No such contact";
    if (!filter[0].hasOwnProperty(prop)) return "No such property";

    return filter[0][prop];
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "likes"));
  console.log(lookUpProfile("Kristian", "lastName"));