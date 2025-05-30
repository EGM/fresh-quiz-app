import { Handlers } from "$fresh/server.ts";
import db from "../../lib/db.ts";

export const handler: Handlers = {
  async POST(req) {
    const userAnswers = await req.json();
    let score = 0;

    for (const [id, selected] of Object.entries(userAnswers)) {
      const [correct] = [...db.query("SELECT correct FROM questions WHERE id = ?", [id])][0];
      if (correct === selected) score++;
    }

    return Response.json({ score });
  },
};
