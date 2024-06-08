import { useState } from 'react';

export interface Step<T> {
  name: keyof T | (keyof T)[];
  title: string;
  element: React.ReactElement;
}

interface Props<T> {
  steps: Step<T>[];
}

export function useMultiForm<T>({ steps }: Props<T>) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prev = () => {
    if (currentStepIndex <= 0) return;

    setCurrentStepIndex((index) => index - 1);
  };

  const next = () => {
    if (currentStepIndex >= steps.length - 1) return;

    setCurrentStepIndex((index) => index + 1);
  };

  return {
    currentStepIndex,
    currentTitle: steps[currentStepIndex].title,
    currentStep: steps[currentStepIndex].element,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    prev,
    next,
  };
}
