import * as React from 'react';
import { Page, Heading, Text, Card, CardHeader, CardBody, Row, Column, Badge, Chip } from '@/index';

// CSF format story

export const all = () => {
  const doctorInfo = {
    name: 'Dr. Maria Rodriguez',
    licenseNumber: 'MD-2019-4578',
    specialty: 'Cardiology',
    department: 'Cardiovascular Medicine',
    email: 'maria.rodriguez@hospital.com',
    phone: '(555) 234-5678',
    yearsOfExperience: 12,
    hospital: 'Central Medical Center',
  };

  const education = [
    { period: '2008 - 2012', degree: 'Doctor of Medicine (MD)', institution: 'Harvard Medical School' },
    { period: '2012 - 2015', degree: 'Residency in Internal Medicine', institution: 'Johns Hopkins Hospital' },
    { period: '2015 - 2018', degree: 'Fellowship in Cardiology', institution: 'Mayo Clinic' },
  ];

  const currentPatients = [
    {
      name: 'John Smith',
      condition: 'Hypertension',
      lastVisit: '2024-01-20',
      nextAppointment: '2024-02-15',
      priority: 'Routine',
    },
    {
      name: 'Emily Johnson',
      condition: 'Heart Arrhythmia',
      lastVisit: '2024-01-22',
      nextAppointment: '2024-01-30',
      priority: 'Follow-up',
    },
    {
      name: 'Robert Wilson',
      condition: 'Post-Surgery Recovery',
      lastVisit: '2024-01-18',
      nextAppointment: '2024-01-25',
      priority: 'Critical',
    },
  ];

  const specializations = [
    { category: 'Clinical', areas: ['Interventional Cardiology', 'Heart Failure', 'Arrhythmia Management'] },
    { category: 'Procedures', areas: ['Cardiac Catheterization', 'Angioplasty', 'Pacemaker Implantation'] },
    { category: 'Research', areas: ['Clinical Trials', 'Cardiovascular Imaging', 'Preventive Cardiology'] },
  ];

  const achievements = [
    {
      year: '2023',
      award: 'Excellence in Patient Care',
      organization: 'American Heart Association',
      description: 'Recognized for outstanding patient outcomes and innovative treatment approaches.',
    },
    {
      year: '2022',
      award: 'Research Publication Award',
      organization: 'Journal of Cardiology',
      description: 'Published groundbreaking research on minimally invasive cardiac procedures.',
    },
  ];

  return (
    <Page className="p-6">
      <div className="mb-6">
        <Heading size="xl">Doctor Profile</Heading>
        <Text appearance="subtle">Comprehensive physician information and practice details</Text>
      </div>

      <div className="pr-2">
        {/* Doctor Information */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Doctor Information</Heading>
          </CardHeader>
          <CardBody>
            <Row className="mb-4">
              <Column size={6}>
                <div className="mb-3">
                  <Text weight="strong">Full Name</Text>
                  <br />
                  <Text>{doctorInfo.name}</Text>
                </div>

                <div className="mb-3">
                  <Text weight="strong">Specialty</Text>
                  <br />
                  <Text>{doctorInfo.specialty}</Text>
                </div>

                <div>
                  <Text weight="strong">License Number</Text>
                  <br />
                  <Text>{doctorInfo.licenseNumber}</Text>
                </div>
              </Column>
              <Column size={6}>
                <div className="mb-3">
                  <Text weight="strong">Department</Text>
                  <br />
                  <Text>{doctorInfo.department}</Text>
                </div>

                <div className="mb-3">
                  <Text weight="strong">Hospital</Text>
                  <br />
                  <Text>{doctorInfo.hospital}</Text>
                </div>

                <div>
                  <Text weight="strong">Years of Experience</Text>
                  <br />
                  <Text>{doctorInfo.yearsOfExperience} years</Text>
                </div>
              </Column>
            </Row>
            <Row>
              <Column size={6}>
                <div className="mb-3">
                  <Text weight="strong">Email</Text>
                  <br />
                  <Text>{doctorInfo.email}</Text>
                </div>
              </Column>
              <Column size={6}>
                <div className="mb-3">
                  <Text weight="strong">Phone</Text>
                  <br />
                  <Text>{doctorInfo.phone}</Text>
                </div>
              </Column>
            </Row>
          </CardBody>
        </Card>

        {/* Education & Training */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Education & Training</Heading>
          </CardHeader>
          <CardBody>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 pb-3">
                <Row>
                  <Column size={3}>
                    <div>
                      <Text weight="strong">{edu.period}</Text>
                    </div>
                  </Column>
                  <Column size={5}>
                    <div>
                      <Text weight="strong">{edu.degree}</Text>
                    </div>
                  </Column>
                  <Column size={4}>
                    <div>
                      <Text>{edu.institution}</Text>
                    </div>
                  </Column>
                </Row>
              </div>
            ))}
          </CardBody>
        </Card>

        {/* Current Patients */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Current Patients</Heading>
          </CardHeader>
          <CardBody>
            {currentPatients.map((patient, index) => (
              <div key={index} className="mb-4 pb-3">
                <Row>
                  <Column size={3}>
                    <div>
                      <Text weight="strong">{patient.name}</Text>
                    </div>
                  </Column>
                  <Column size={3}>
                    <div>
                      <Text size="small" appearance="subtle">
                        Condition
                      </Text>
                      <br />
                      <Text>{patient.condition}</Text>
                    </div>
                  </Column>
                  <Column size={3}>
                    <div>
                      <Text size="small" appearance="subtle">
                        Next Appointment
                      </Text>
                      <br />
                      <Text>{patient.nextAppointment}</Text>
                    </div>
                  </Column>
                  <Column size={3}>
                    <div>
                      <Text size="small" appearance="subtle">
                        Priority
                      </Text>
                      <br />
                      <Badge
                        appearance={
                          patient.priority === 'Critical'
                            ? 'alert'
                            : patient.priority === 'Follow-up'
                            ? 'warning'
                            : 'success'
                        }
                      >
                        {patient.priority}
                      </Badge>
                    </div>
                  </Column>
                </Row>
              </div>
            ))}
          </CardBody>
        </Card>

        {/* Specializations */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Specializations & Expertise</Heading>
          </CardHeader>
          <CardBody>
            {specializations.map((specGroup, index) => (
              <div key={index} className="mb-4 pb-3">
                <Row>
                  <Column size={3}>
                    <div>
                      <Text weight="strong">{specGroup.category}</Text>
                    </div>
                  </Column>
                  <Column size={9}>
                    <div>
                      {specGroup.areas.map((area, areaIndex) => (
                        <Chip key={areaIndex} label={area} className="mr-2 mb-2" />
                      ))}
                    </div>
                  </Column>
                </Row>
              </div>
            ))}
          </CardBody>
        </Card>

        {/* Achievements & Awards */}
        <Card shadow="light">
          <CardHeader>
            <Heading size="s">Achievements & Awards</Heading>
          </CardHeader>
          <CardBody>
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-4 pb-3">
                <div className="mb-2">
                  <Text weight="strong">
                    {achievement.year} - {achievement.award}
                  </Text>
                </div>
                <Row>
                  <Column size={4}>
                    <div>
                      <Text size="small" appearance="subtle">
                        Organization
                      </Text>
                      <br />
                      <Text>{achievement.organization}</Text>
                    </div>
                  </Column>
                  <Column size={8}>
                    <div>
                      <Text size="small" appearance="subtle">
                        Description
                      </Text>
                      <br />
                      <Text>{achievement.description}</Text>
                    </div>
                  </Column>
                </Row>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </Page>
  );
};

export default {
  title: 'Components/Page/All',
  component: Page,
  parameters: {
    docs: {
      docPage: {
        title: 'Page',
        description:
          'Page component is used to create a scrollable container with a fixed height of calc(100dvh - var(--nav-height) (47px)).',
        a11yProps: ` **aria-label:** Add \`aria-label='Page description'\` to describe the page `,
      },
    },
  },
};
