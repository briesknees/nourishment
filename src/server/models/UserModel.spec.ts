import { db, pool } from "./DatabaseModel";

describe("DatabaseModel.Query", () => {
  it("Succesfully runs requests via a Pool", async () => {
    const str = `DROP TABLE IF EXISTS database_model_test;
    CREATE TABLE database_model_test (id serial, name varchar);`;

    const response = await db.query(str);
    await pool.end();
    return expect(response[1].command).toBe("CREATE");
  });
});
