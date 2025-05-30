import Quiz from "../islands/Quiz.tsx";

export default function QuizPage() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Quiz</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <div>
        <h1>Quiz Time</h1>
        <Quiz />
      </div>
    </>
  );
}
