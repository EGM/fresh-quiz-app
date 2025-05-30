import { useEffect, useState } from "preact/hooks";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  const handleChange = (id, option) => {
    setAnswers({ ...answers, [id]: option });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(answers),
    });

    const result = await res.json();
    alert(`Your score: ${result.score}`);
  };

  return (
    <section>
      {questions.map((q) => (
        <div key={q.id} class="card">
          <p>{q.question}</p>
          {q.options.map((opt, i) => (
            <p>
              <label key={i}>
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value={i}
                  onChange={() => handleChange(q.id, opt.option)}
                />
                {opt.option}. {opt.text}
              </label>
            </p>
          ))}
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>Submit</button>
    </section>
  );
}
