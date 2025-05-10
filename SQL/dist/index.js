"use strict";
// write a function to create a user table in your database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_GkcsZm6BwlM8@ep-royal-hill-a4thfmfw-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
});
// client.connect();
// async function createUsersTable() {
//   const result = await client.query(`
//         CREATE TABLE USERS (
//         id SERIAL PRIMARY KEY ,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL ,
//         password VARCHAR(255)  NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )`);
//   console.log(result);
// }
// // createUsersTable();
// // not a good way to put data in the database
// // async function insertData() {
// //   try {
// //     const insertQuery =
// //       "INSERT INTO USERS ( username , email, password ) VALUES ( 'deleting the table', ';DROP TABLE USERS' , '123123') ";
// //     const res = await client.query(insertQuery);
// //     console.log("Insertion success ", res);
// //   } catch (err) {
// //     console.error("Error during the insertion ", err);
// //   } finally {
// //     await client.end();
// //   }
// // }
// // insertData();
// //Caution :- dont put the exact data which user  provides you instead use $1, $2 it will convert it into a string
// //Good way of inserting data
// async function insertData(username: string, email: string, password: string) {
//   try {
//     const data =
//       "INSERT INTO USERS (username , email, password ) VALUES ( $1 , $2 ,$3 )";
//     const values = [username, email, password];
//     const result = await client.query(data, values);
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log("done");
//   }
// }
// insertData("vivekSingh", "Vivekrwt@gmail", "232323");
// async function getUser(email: string) {
//   try {
//     const query = "SELECT * FROM USERS WHERE email = $1";
//     const result = await client.query(query, [email]);
//     if (result.rows.length > 0) {
//       console.log("User found", result.rows[0]);
//       return result.rows[0];
//     } else {
//       console.log("No user found");
//       return null;
//     }
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.end();
//   }
// }
// getUser("Vivekrwt@gmail");
//creating relationship between two tables
// 1. create a table with foreign key
// 2. create a table with foreign key and reference the first table
// 3. create a table with foreign key and reference the first table with on delete cascade
// 4. create a table with foreign key and reference the first table with on delete set null
function UserData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        yield client.query(`
    CREATE TABLE USERS (
    id SERIAL PRIMARY KEY ,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL ,
        password VARCHAR(255)  NOT NULL, 
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)
    `);
        yield client.query(`
    CREATE TABLE ADDRESS (
    address_id SERIAL PRIMARY KEY ,
    id INTEGER NOT NULL ,
    address VARCHAR(255)  NOT NULL,
    city VARCHAR(255) NOT NULL,
    FOREIGN KEY ( id ) REFERENCES USERS(id) 
       )`);
    });
}
// UserData();
function insertDataInUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = `INSERT INTO USERS (username , email, password ) VALUES ( $1 , $2 ,$3 ) RETURNING ID `;
        const values = ["vivekrwt1", "rw1t@gmail", "232323"];
        const userResult = yield client.query(userData, values);
        const ID = userResult.rows[0].id;
        const addressData = ` INSERT INTO ADDRESS (ID, address , city ) VALUES ($1 ,$2 ,$3)`;
        const addressValues = [ID, "south ex New Delhi", "New Delhi"];
        yield client.query(addressData, addressValues);
        yield client.end();
    });
}
// insertDataInUser();
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `SELECT u.id ,u.username , u.email ,u.password , a.address, a.city FROM users u JOIN address a ON  u.id = a.id`;
        const result = yield client.query(query);
        console.log(result.rows);
        yield client.end();
    });
}
fetchData();
