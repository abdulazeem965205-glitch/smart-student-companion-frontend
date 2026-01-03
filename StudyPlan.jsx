import data from "../data.json";

export default function StudyPlan() {
  return (
    <div className="plan">
      {data.tasks.map((task, i) => (
        <div className="task" key={i}>
          <input type="checkbox" />
          <span>{task.subject} — {task.duration}</span>
        </div>
      ))}
      <p className="ai-tip">{data.aiAdvice}</p>
    </div>
  );
}
