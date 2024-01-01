import { Card } from "./card";

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
}
export interface UserWithCardDto extends User {
  cards: Card[];
}
// {
//   "id": 1,
//   "name": "John",
//   "surname": "Doe",
//   "age": 30
// }


//   "id": 1,
//   "name": "John",
//   "surname": "Doe",
//   "age": 30,
//   "cards": [
//       {
//           "id": 62,
//           "userId": 1,
//           "number": "5602242626999444",
//           "type": "bankcard"
//       },
//       {
//           "id": 83,
//           "userId": 1,
//           "number": "6399283404521468",
//           "type": "instapayment"
//       },
//       {
//           "id": 95,
//           "userId": 1,
//           "number": "4911485813784793",
//           "type": "switch"
//       }
//   ]
// }
