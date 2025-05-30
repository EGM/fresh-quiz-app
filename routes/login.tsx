import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const username = form.get("username")?.toString();
    const password = form.get("password")?.toString();

    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/quiz" },
      });
    }

    return new Response("Login failed", { status: 401 });
  },
};

export default function LoginPage() {
  return (
    <form method="POST">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
