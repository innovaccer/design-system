import * as React from 'react';
import {
  KeyValuePair,
  Card,
  CardHeader,
  CardBody,
  Heading,
  StatusHint,
  Column,
  MetaList,
  Avatar,
  Text,
  Icon,
  Badge,
} from '@/index';

export const leftRightWidth = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="w-50 pr-10">
        <Text weight="strong">40:60 Key-Value Width Ratio (Recommended)</Text>
        <Card className="mt-5" shadow="none">
          <CardHeader>
            <Heading size="s">Case details</Heading>
          </CardHeader>

          <CardBody className="pb-6">
            <KeyValuePair className="d-flex">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Status" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="flex-column">
                  <StatusHint appearance="info">Status Hint</StatusHint>
                  <MetaList list={[{ label: 'Just now' }, { label: 'Clinical' }]} />
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Assigned to" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Avatar appearance="primary" firstName="Molly" lastName="Daniels" size="tiny" />
                  <Text className="ml-4">Daniels, Molly</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Referred on" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Icon name="event" className="my-2" />
                  <Text className="ml-3">08/23/2023</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="All programs" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Badge>Asthma</Badge>
                  <Badge className="ml-4">HIV</Badge>
                  <Badge className="ml-4">Hepatitis</Badge>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Additional given comments" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
              </Column>
            </KeyValuePair>
          </CardBody>
        </Card>
      </div>

      <div className="w-50">
        <Text weight="strong">50:50 Key-Value Width Ratio</Text>
        <Card className="mt-5" shadow="none">
          <CardHeader>
            <Heading size="s">Case details</Heading>
          </CardHeader>

          <CardBody className="pb-6">
            <KeyValuePair className="d-flex">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Status" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="flex-column">
                  <StatusHint appearance="info">Status Hint</StatusHint>
                  <MetaList list={[{ label: 'Just now' }, { label: 'Clinical' }]} />
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Assigned to" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Avatar appearance="primary" firstName="Molly" lastName="Daniels" size="tiny" />
                  <Text className="ml-4">Daniels, Molly</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Referred on" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Icon name="event" className="my-2" />
                  <Text className="ml-3">08/23/2023</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="All programs" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Badge>Asthma</Badge>
                  <Badge className="ml-4">HIV</Badge>
                  <Badge className="ml-4">Hepatitis</Badge>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Additional given comments" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
              </Column>
            </KeyValuePair>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex justify-content-between">
      <div className="w-50 pr-10">
        <Text weight="strong">40:60 Key-Value Width Ratio (Recommended)</Text>
        <Card className="mt-5" shadow="none">
          <CardHeader>
            <Heading size="s">Case details</Heading>
          </CardHeader>

          <CardBody className="pb-6">
            <KeyValuePair className="d-flex">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Status" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="flex-column">
                  <StatusHint appearance="info">Status Hint</StatusHint>
                  <MetaList list={[{ label: 'Just now' }, { label: 'Clinical' }]} />
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Assigned to" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Avatar appearance="primary" firstName="Molly" lastName="Daniels" size="tiny" />
                  <Text className="ml-4">Daniels, Molly</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Referred on" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Icon name="event" className="my-2" />
                  <Text className="ml-3">08/23/2023</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="All programs" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Badge>Asthma</Badge>
                  <Badge className="ml-4">HIV</Badge>
                  <Badge className="ml-4">Hepatitis</Badge>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Additional given comments" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
              </Column>
            </KeyValuePair>
          </CardBody>
        </Card>
      </div>

      <div className="w-50">
        <Text weight="strong">50:50 Key-Value Width Ratio</Text>
        <Card className="mt-5" shadow="none">
          <CardHeader>
            <Heading size="s">Case details</Heading>
          </CardHeader>

          <CardBody className="pb-6">
            <KeyValuePair className="d-flex">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Status" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="flex-column">
                  <StatusHint appearance="info">Status Hint</StatusHint>
                  <MetaList list={[{ label: 'Just now' }, { label: 'Clinical' }]} />
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Assigned to" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Avatar appearance="primary" firstName="Molly" lastName="Daniels" size="tiny" />
                  <Text className="ml-4">Daniels, Molly</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Referred on" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Icon name="event" className="my-2" />
                  <Text className="ml-3">08/23/2023</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="All programs" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Badge>Asthma</Badge>
                  <Badge className="ml-4">HIV</Badge>
                  <Badge className="ml-4">Hepatitis</Badge>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Additional given comments" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
              </Column>
            </KeyValuePair>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/KeyValuePair/Width/Left Right Width',
  component: KeyValuePair,
  subcomponents: { 'KeyValuePair.Key': KeyValuePair.Key, 'KeyValuePair.Value': KeyValuePair.Value },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
