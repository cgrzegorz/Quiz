import quizData from "../../Data/ochronaWlasnosci.json";
import { QuizTemplate } from "../QuizTemplate/QuizTemplate.tsx";

interface Question {
  id: number;
  question: string;
  options: Record<string, string>;
  correctAnswer: string;
  points: number;
}

export const OchronaWlasnosci = () => {
  return (
    <QuizTemplate
      title="Quiz z Ochrony Własności Intelektualnej"
      quizData={quizData as Question[]}
    />
  );
};
