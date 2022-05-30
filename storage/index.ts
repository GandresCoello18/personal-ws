import mysql from 'mysql';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME,
  // port: 80,
  charset: 'utf8mb4_general_ci',
});

connection.connect();
console.log('conectado mysql con exito');

connection.on('err', (err: any) => {
  if (err) {
    console.log(err);
    connection.end();
  }
});

export const dataBase = connection;