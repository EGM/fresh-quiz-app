import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render();
  },
};

export default function Home() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Quiz</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <div>
        <h1>Welcome to the Quiz App</h1>
        <a href="/login">Login</a> | <a href="/quiz">Take Quiz</a>
      </div>
    </>
  );
}
