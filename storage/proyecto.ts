import { dataBase } from '.';
import { Proyecto } from '../interfaces/proyecto';

export const getProyects = async () => {
    try {
        return (await new Promise((resolve, reject) => {
          dataBase.query(
            `SELECT * FROM proyecto`,
            (err, data) => (err ? reject(err) : resolve(data)),
          );
        })) as Proyecto[];
      } catch (error: any) {
        console.log(error.message)
        return [];
      }
}