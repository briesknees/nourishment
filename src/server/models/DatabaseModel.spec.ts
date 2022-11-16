// import {
//   CreateTableQuery,
//   InsertQuery,
//   SelectQuery,
// } from "../../types/database";
// import db from "./DatabaseModel";

// describe("DatabaseModel.CreateTable", () => {
//   it("Creates a Table in Database", async () => {
//     const query: CreateTableQuery = {
//       name: "Test",
//       attributes: [
//         ["id", "SERIAL"],
//         ["name", "VARCHAR"],
//         ["race", "VARCHAR"],
//       ],
//     };

//     const response = await DatabaseModel.CreateTable(query);
//     expect(response[0].command).toBe("CREATE");
//   });
// });

// describe("DatabaseModel.InsertRecords", () => {
//   it("Inserts a Record into the Database ", async () => {
//     const query: InsertQuery = {
//       table: "Test",
//       attributes: [
//         {
//           value: "name",
//           type: "VARCHAR",
//         },
//         {
//           value: "race",
//           type: "VARCHAR",
//         },
//       ],
//       values: ["Sarah Kerrigan", "Zerg"],
//     };

//     const response = await DatabaseModel.InsertRecords(query);
//     expect(response[0].command).toBe("INSERT");
//     expect(response[0].rowCount).toBe(1);
//   });
// });

// describe("DatabaseModel.SelectRecords", () => {
//   it("Selects a record from the Database", async () => {
//     const query: SelectQuery = {
//       table: "Test",
//       conditions: {
//         where: "name='Sarah Kerrigan'",
//       },
//     };

//     const response = await DatabaseModel.SelectRecords(query);
//     expect(response.rows[0].race).toBe("Zerg");
//   });
// });
