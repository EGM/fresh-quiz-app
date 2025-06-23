import { Handlers } from "$fresh/server.ts";
import db from "../../lib/db.ts";

export const handler: Handlers = {
  GET() {
    const rows = [...db.query("SELECT id, question, options FROM questions")];
    const questions = rows.map(([id, question, options]) => ({
      id,
      question,
      options: JSON.parse(String(options)),
    }));

    console.log(JSON.stringify(questions[0]))
    return Response.json(questions);
  },
};
