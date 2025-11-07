import quizData from "../../Data/Informatyka1.json";
import { QuizTemplate } from "../QuizTemplate/QuizTemplate.tsx";

interface Question {
  id: number;
  question: string;
  options: Record<string, string>;
  correctAnswer: string;
  points: number;
}

export const Informatyka = () => {
  return (
    <QuizTemplate
      title="Quiz z Informatyki"
      quizData={quizData as Question[]}
    />
  );
};
