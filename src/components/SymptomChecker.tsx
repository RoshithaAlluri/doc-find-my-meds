import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, X, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Symptom {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
}

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const commonSymptoms = [
    { id: '1', name: 'Headache', severity: 'mild' as const },
    { id: '2', name: 'Fever', severity: 'moderate' as const },
    { id: '3', name: 'Cough', severity: 'mild' as const },
    { id: '4', name: 'Nausea', severity: 'moderate' as const },
    { id: '5', name: 'Chest Pain', severity: 'severe' as const },
    { id: '6', name: 'Fatigue', severity: 'mild' as const },
    { id: '7', name: 'Dizziness', severity: 'moderate' as const },
    { id: '8', name: 'Shortness of Breath', severity: 'severe' as const },
  ];

  const filteredSymptoms = commonSymptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSymptoms.find(selected => selected.id === symptom.id)
  );

  const addSymptom = (symptom: Symptom) => {
    setSelectedSymptoms([...selectedSymptoms, symptom]);
  };

  const removeSymptom = (symptomId: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptomId));
  };

  const analyzSymptoms = () => {
    // Mock analysis - in real app, this would call an API
    const mockResult = {
      primaryConditions: [
        { name: 'Common Cold', probability: 75, severity: 'mild' },
        { name: 'Viral Infection', probability: 60, severity: 'moderate' },
        { name: 'Stress/Anxiety', probability: 45, severity: 'mild' }
      ],
      recommendations: [
        'Rest and hydration',
        'Over-the-counter pain relievers',
        'Monitor symptoms for 24-48 hours'
      ],
      seekImmediate: selectedSymptoms.some(s => s.severity === 'severe')
    };
    setAnalysisResult(mockResult);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'bg-healing text-healing-foreground';
      case 'moderate': return 'bg-warning text-warning-foreground';
      case 'severe': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
          AI Symptom Checker
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Select your symptoms below for personalized health insights. This tool provides 
          general information and should not replace professional medical advice.
        </p>
      </div>

      {/* Symptom Selection */}
      <Card className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Select Your Symptoms</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Selected Symptoms */}
        {selectedSymptoms.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium text-foreground">Selected Symptoms:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map((symptom) => (
                <Badge
                  key={symptom.id}
                  className={cn("px-3 py-1 flex items-center space-x-1", getSeverityColor(symptom.severity))}
                >
                  <span>{symptom.name}</span>
                  <button
                    onClick={() => removeSymptom(symptom.id)}
                    className="hover:bg-black/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Available Symptoms */}
        <div className="space-y-2">
          <h3 className="font-medium text-foreground">
            {searchTerm ? 'Search Results:' : 'Common Symptoms:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredSymptoms.map((symptom) => (
              <Button
                key={symptom.id}
                variant="outline"
                onClick={() => addSymptom(symptom)}
                className="justify-start h-auto p-3"
              >
                <Plus className="w-4 h-4 mr-2" />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">{symptom.name}</span>
                  <Badge className={cn("text-xs", getSeverityColor(symptom.severity))}>
                    {symptom.severity}
                  </Badge>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Analyze Button */}
        <div className="pt-4">
          <Button
            variant="medical"
            onClick={analyzSymptoms}
            disabled={selectedSymptoms.length === 0}
            className="w-full"
            size="lg"
          >
            Analyze Symptoms
          </Button>
        </div>
      </Card>

      {/* Analysis Results */}
      {analysisResult && (
        <Card className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-foreground flex items-center space-x-2">
            <Info className="w-5 h-5 text-primary" />
            <span>Analysis Results</span>
          </h2>

          {/* Emergency Warning */}
          {analysisResult.seekImmediate && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-semibold text-destructive">Seek Immediate Medical Attention</h3>
                <p className="text-sm text-destructive/80">
                  Based on your symptoms, we recommend consulting a healthcare provider immediately.
                </p>
              </div>
            </div>
          )}

          {/* Possible Conditions */}
          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Possible Conditions:</h3>
            <div className="space-y-2">
              {analysisResult.primaryConditions.map((condition: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                  <div className="space-y-1">
                    <span className="font-medium text-foreground">{condition.name}</span>
                    <Badge className={getSeverityColor(condition.severity)}>
                      {condition.severity}
                    </Badge>
                  </div>
                  <span className="text-sm font-medium text-primary">{condition.probability}% match</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Recommendations:</h3>
            <ul className="space-y-2">
              {analysisResult.recommendations.map((rec: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-healing rounded-full mt-2"></div>
                  <span className="text-sm text-foreground">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 space-y-2">
            <Button variant="healing" className="w-full">
              Find Nearby Doctors
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              This analysis is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SymptomChecker;