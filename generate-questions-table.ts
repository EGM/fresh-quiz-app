import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("quiz.db");
const sql = await Deno.readTextFile("./questions.sql");
db.execute(sql);
db.close();
