import * as React from 'react';
import { KeyValuePair, Card, Row, Column, StatusHint, LinkButton } from '@/index';

export const columnWithFixedWidth = () => {
  return (
    <div>
      <Card className="px-6 py-7" shadow="none">
        <Row className="d-flex justify-content-between">
          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Provider" />
              <KeyValuePair.Value value="Dr. Anil Jain" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="TIN" />
              <KeyValuePair.Value value="879-79-7989" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Location" />
              <KeyValuePair.Value value="San Diego, California" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Quality score" />
              <KeyValuePair.Value value="89" />
            </KeyValuePair>
          </Column>
        </Row>

        <Row className="mt-6 d-flex justify-content-between">
          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="PCPs" />
              <KeyValuePair.Value value="2" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Risk score" />
              <KeyValuePair.Value value="1.5" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Patient count" />
              <KeyValuePair.Value value="590" />
            </KeyValuePair>
          </Column>

          <Column size={2} />
        </Row>
      </Card>

      <Card className="px-6 py-7 mt-6" shadow="none">
        <Row className="d-flex justify-content-between">
          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Ticket type" />
              <KeyValuePair.Value value="Appointment request" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Channel" />
              <KeyValuePair.Value value="Text Message" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Transfer status" />
              <KeyValuePair.Value>
                <StatusHint appearance="success">Complete</StatusHint>
              </KeyValuePair.Value>
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Location" />
              <KeyValuePair.Value>
                <LinkButton>Add</LinkButton>
              </KeyValuePair.Value>
            </KeyValuePair>
          </Column>
        </Row>
      </Card>
    </div>
  );
};

export default {
  title: 'Components/KeyValuePair/Multiple Column Layout/Column With Fixed Width',
  component: KeyValuePair,
  subcomponents: { 'KeyValuePair.Key': KeyValuePair.Key, 'KeyValuePair.Value': KeyValuePair.Value },
};
