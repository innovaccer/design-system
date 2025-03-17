import React from 'react';
import { AIResponse, Text, PlaceholderParagraph } from '@/index';
import figma from '@figma/code-connect';

figma.connect(AIResponse, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=49482-18194', {
  imports: ["import { AIResponse } from '@innovaccer/design-system'"],
  props: {
    content: figma.enum('State', {
      Generating: (
        <div>
          <PlaceholderParagraph length="large" />
          <PlaceholderParagraph length="medium" />
        </div>
      ),
      Default: <Text>Hello, would you like to book an appointment with your cardiologist?</Text>,
      Hover: <Text>Hello, would you like to book an appointment with your cardiologist?</Text>,
    }),
    actionBar: figma.enum('State', {
      Default: (
        <AIResponse.ActionBar>
          <AIResponse.Button>AI Response Button</AIResponse.Button>
        </AIResponse.ActionBar>
      ),
      Hover: (
        <AIResponse.ActionBar>
          <AIResponse.Button>AI Response Button</AIResponse.Button>
        </AIResponse.ActionBar>
      ),
    }),
    showAvatar: figma.enum('Type', {
      'With Avatar and Metadata': true,
    }),
    metaData: figma.enum('Type', {
      'With Avatar and Metadata': () => {
        return (
          <Text appearance="subtle" size="small" weight="medium">
            1:00 PM
          </Text>
        );
      },
      'With Metadata': () => {
        return (
          <Text appearance="subtle" size="small" weight="medium">
            1:00 PM
          </Text>
        );
      },
    }),
  },
  example: ({ content, actionBar, showAvatar }) => {
    return (
      <AIResponse showGlow={true} showAvatar={showAvatar}>
        <AIResponse.Body>{content}</AIResponse.Body>
        {actionBar}
      </AIResponse>
    );
  },
});
