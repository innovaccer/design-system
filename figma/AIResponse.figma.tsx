import React from 'react';
import { AIResponse, Text, Sara } from '@/index';
import figma from '@figma/code-connect';

figma.connect(AIResponse, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=49482-18194', {
  imports: ["import { AIResponse } from '@innovaccer/design-system'"],
  props: {},
  example: () => {
    return (
      <div className="d-flex w-50">
        <Sara />
        <div className="ml-4">
          <AIResponse>
            <AIResponse.Body>
              <Text>Hello, would you like to book an appointment with your cardiologist?</Text>
            </AIResponse.Body>

            <AIResponse.ActionBar>
              <AIResponse.Button>AI Response Button</AIResponse.Button>
            </AIResponse.ActionBar>
          </AIResponse>
          <Text appearance="subtle" size="small" weight="medium">
            1:00 PM
          </Text>
        </div>
      </div>
    );
  },
});
