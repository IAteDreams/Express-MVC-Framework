const {connection} = require('./database');

class BaseModel{
    static lastQuery = "";

    //query to database
    async executeQuery(query, values = []){
      BaseModel.lastQuery = "Query: "+query+" Values: "+values;
      return new Promise((resolve, reject) => {
        connection.query(query, values, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    }
  
    //return the first row of the result array
    async fetch_row_array(query, values = []){
      const result = await this.executeQuery(query, values);
      return result[0];
    }

    //return the all of the result array
    async fetch_result_array(query, values = []){
        const result = await this.executeQuery(query, values);
        return result;
    }

}

module.exports = BaseModel;