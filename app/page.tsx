import ProblemSolution from './components/ProblemSolution';
import Team from './components/Team';
import QRCodeSection from './components/QRCode';

export default function HomePage() {
  return (
    <main>
      <ProblemSolution />
      <Team />
      <QRCodeSection />
    </main>
  );
}
