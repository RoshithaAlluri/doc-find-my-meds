import Navigation from '@/components/Navigation';
import SymptomChecker from '@/components/SymptomChecker';

const Symptoms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-8 pb-16">
        <SymptomChecker />
      </div>
    </div>
  );
};

export default Symptoms;