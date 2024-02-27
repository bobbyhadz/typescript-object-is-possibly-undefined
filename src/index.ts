export {};

// EXAMPLE 1 - Using the optional chaining (?.) operator

type Person = {
  address?: {
    country?: string;
    city?: string;
  };
};

const p1: Person = {};

// ✅ No error
const result = p1?.address?.country;

console.log(result); // 👉️ undefined

// ---------------------------------------------------

// // EXAMPLE 2 - Providing a fallback value if the property doesn't exist

// type Person = {
//   address?: {
//     // 👈️ could be undefined
//     country?: string;
//     city?: string;
//   };
// };

// const p1: Person = {};

// const result = p1?.address?.country ?? 'fallback value';

// console.log(result); // 👉️ fallback value

// ---------------------------------------------------

// // EXAMPLE 3 - Using an `if` statement to solve the error

// type Person = {
//   address?: {
//     country?: string;
//     city?: string;
//   };
// };

// const p1: Person = {};

// if (p1.address != undefined) {
//   console.log(p1.address.country?.toUpperCase);
//   console.log(p1.address.city?.toUpperCase);
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Using the non-null assertion operator to solve the error

// type Person = {
//   address?: {
//     country?: string;
//     city?: string;
//   };
// };

// const p1: Person = {
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//   },
// };

// console.log(p1.address!.country); // 👉️ "Chile"
// console.log(p1.address!.city); // 👉️ "Santiago"

// ---------------------------------------------------

// // EXAMPLE 5 - Solve the error using the logical AND (&&) operator

// type Person = {
//   address?: {
//     country?: string;
//     city?: string;
//     num?: number;
//   };
// };

// const p1: Person = {};

// if (p1?.address && typeof p1.address.num === 'number' && p1.address.num > 10) {
//   console.log('success');
// }

// ---------------------------------------------------

// // EXAMPLE 6 - Using the `typeof` operator to solve the error

// type Person = {
//   address?: {
//     country?: string;
//     city?: string;
//   };
// };

// const p1: Person = {};

// if (p1.address && typeof p1.address.country === 'string') {
//   // 👇️ const result: string
//   const result = p1.address.country;
// }
