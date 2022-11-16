import config from "./config";
const pg = require("pg");

describe("Config.ts", () => {
  it("Saves all required environment variables from machine", async () => {
    expect(config.host).not.toBeUndefined();
    expect(config.user).not.toBeUndefined();
    expect(config.password).not.toBeUndefined();
    expect(config.database).toBe("postgres");
    expect(config.port).not.toBeUndefined();
    expect(config.ssl).not.toBeUndefined();
  });

  it("Succesfully connects to Database w/ current environment variables", async () => {
    const client = new pg.Client(config);
    client.connect((err: Error) => {
      if (err) throw err;
      else {
        queryDatabase();
      }
    });

    async function queryDatabase() {
      const query = `
            DROP TABLE IF EXISTS inventory;
            CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
            INSERT INTO inventory (name, quantity) VALUES ('banana', 155);
            INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
            INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
        `;

      const response = await client.query(query);
      client.end();
      expect(response.length).toBe(5); // 5 actions in query command
    }
  }, 10000);
});
