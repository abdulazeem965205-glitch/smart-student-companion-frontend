import AICore from "../components/AICore";
import StudyPlan from "../components/StudyPlan";
import ResumeUpload from "../components/ResumeUpload";

export default function Home() {
  return (
    <main className="container">
      <p className="tagline">Your AI-powered daily study companion</p>

      <AICore />

      <button className="primary-btn">
        Generate Today’s Study Plan
      </button>

      <StudyPlan />
      <ResumeUpload />
    </main>
  );
}
