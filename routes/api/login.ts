import { Handlers } from "$fresh/server.ts";
import db from "../../lib/db.ts";

export const handler: Handlers = {
  async POST(req) {
    const { username, password } = await req.json();
    const user = [
      ...db.query("SELECT * FROM users WHERE username = ? AND password = ?", [
        username,
        password,
      ]),
    ];

    if (user.length === 0) {
      return new Response("Invalid credentials", { status: 401 });
    }

    const headers = new Headers();
    headers.set("Set-Cookie", `user=${username}; Path=/; HttpOnly`);
    return new Response("Logged in", { status: 200, headers });
  },
};
