import React from 'react';
import { AIResponse, Text } from '@/index';

export const GlowEffect = () => {
  const showGlowValues = [true, false];

  return (
    <div className="d-flex justify-content-between">
      {showGlowValues.map((showGlow, index) => (
        <AIResponse showGlow={showGlow} key={index} className="w-50 mr-8">
          <AIResponse.Body>
            <Text>
              Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute
              sinusitis makes it hard for the sinuses to drain. Mucus builds up.
            </Text>
          </AIResponse.Body>
        </AIResponse>
      ))}
    </div>
  );
};

const customCode = `() => {
  const showGlowValues = [true, false];

  return (
    <div className="d-flex justify-content-between">
      {showGlowValues.map((showGlow, index) => (
        <AIResponse showGlow={showGlow} key={index} className="w-50 mr-8">
          <AIResponse.Body>
            <Text>
              Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute
              sinusitis makes it hard for the sinuses to drain. Mucus builds up.
            </Text>
          </AIResponse.Body>
        </AIResponse>
      ))}
    </div>
  );
}`;

export default {
  title: 'Components/AI/AI Response/Glow Effect',
  component: AIResponse,
  subcomponents: {
    'AIResponse.Button': AIResponse.Button,
    'AIResponse.ActionBar': AIResponse.ActionBar,
    'AIResponse.Body': AIResponse.Body,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'AIResponse',
        customCode,
      },
    },
  },
};
