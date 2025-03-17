import React from 'react';
import { AIResponse, Text } from '@/index';
import Image from '../assets/media.png';

export const CustomContent = () => {
  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  return (
    <AIResponse showAvatar={true} metaData={metaDataRenderer} className="w-50">
      <AIResponse.Body>
        <Text>
          Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute
          sinusitis makes it hard for the sinuses to drain. Mucus builds up.
        </Text>
        <img alt="placeholder" src={Image} className="mt-4" />
      </AIResponse.Body>
    </AIResponse>
  );
};
const ImagePath = JSON.stringify(Image);

const customCode = `() => {

  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };

  return (
    <AIResponse showAvatar={true} metaData={metaDataRenderer} className="w-50">
      <AIResponse.Body>
        <Text>
          Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute
          sinusitis makes it hard for the sinuses to drain. Mucus builds up.
        </Text>
        <img alt="placeholder" src={${ImagePath}} className="mt-4" />
      </AIResponse.Body>
    </AIResponse>
  );
  
}`;

export default {
  title: 'Components/AI/AI Response/Custom Content',
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
