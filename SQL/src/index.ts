// write a function to create a user table in your database
import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_GkcsZm6BwlM8@ep-royal-hill-a4thfmfw-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
});
client.connect();
async function createUsersTable() {
  const result = await client.query(`
        CREATE TABLE USERS (
        id SERIAL PRIMARY KEY ,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL ,
        password VARCHAR(255)  NOT NULL, 
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`);

  console.log(result);
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

async function insertData(username: string, email: string, password: string) {
  try {
    const data =
      "INSERT INTO USERS (username , email, password ) VALUES ( $1 , $2 ,$3 )";
    const values = [username, email, password];

    const result = await client.query(data, values);
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("done");
  }
}
insertData("vivekSingh", "Vivekrwt@gmail", "232323");

async function getUser(email: string) {
  try {
    const query = "SELECT * FROM USERS WHERE email = $1";
    const result = await client.query(query, [email]);

    if (result.rows.length > 0) {
      console.log("User found", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user found");
      return null;
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
getUser("Vivekrwt@gmail");
