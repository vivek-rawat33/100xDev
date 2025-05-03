"use strict";
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
// write a function to create a user table in your database
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_GkcsZm6BwlM8@ep-royal-hill-a4thfmfw-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
});
client.connect();
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        CREATE TABLE USERS (
        id SERIAL PRIMARY KEY ,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL ,
        password VARCHAR(255)  NOT NULL, 
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`);
        console.log(result);
    });
}
// createUsersTable();
// not a good way to put data in the database
// async function insertData() {
//   try {
//     const insertQuery =
//       "INSERT INTO USERS ( username , email, password ) VALUES ( ';DELETE * FROM USERS;', ';DELETE * FROM USERS' , 'userpassword') ";
//     const res = await client.query(insertQuery);
//     console.log("Insertion success ", res);
//   } catch (err) {
//     console.error("Error during the insertion ", err);
//   } finally {
//     await client.end();
//   }
// }
// insertData();
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = "INSERT INTO USERS (username , email, password ) VALUES ( $1 , $2 ,$3 )";
            const values = [username, email, password];
            const result = yield client.query(data, values);
            console.log(result);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            console.log("done");
        }
    });
}
insertData("vivekSingh", "Vivekrwt@gmail", "232323");
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM USERS WHERE email = $1";
            const result = yield client.query(query, [email]);
            if (result.rows.length > 0) {
                console.log("User found", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("No user found");
                return null;
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {
            yield client.end();
        }
    });
}
getUser("Vivekrwt@gmail");
