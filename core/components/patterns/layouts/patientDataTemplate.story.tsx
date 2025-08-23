import * as React from 'react';

export const patientDataTemplate = () => <></>;

const customCode = `() => {
  const patientInfo = {
    name: 'Sarah Johnson',
    age: 34,
    gender: 'Female',
    dateOfBirth: 'March 15, 1990',
    patientId: 'PT-2024-0156',
    phoneNumber: '(555) 123-4567',
    email: 'sarah.johnson@email.com',
    address: '123 Oak Street, Springfield, IL 62701'
  };

  const vitals = [
    { date: '2024-01-25', bloodPressure: '120/80', heartRate: '72', temperature: '98.6°F', weight: '145 lbs' },
    { date: '2024-01-18', bloodPressure: '118/78', heartRate: '68', temperature: '98.4°F', weight: '144 lbs' },
    { date: '2024-01-11', bloodPressure: '122/82', heartRate: '70', temperature: '98.7°F', weight: '145 lbs' },
    { date: '2024-01-04', bloodPressure: '119/79', heartRate: '69', temperature: '98.5°F', weight: '143 lbs' }
  ];

  const medications = [
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', prescribedBy: 'Dr. Smith' },
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', prescribedBy: 'Dr. Smith' },
    { name: 'Vitamin D3', dosage: '1000 IU', frequency: 'Once daily', prescribedBy: 'Dr. Johnson' }
  ];

  const appointments = [
    { date: '2024-02-15', time: '10:30 AM', doctor: 'Dr. Smith', type: 'Follow-up Visit', status: 'Scheduled' },
    { date: '2024-01-25', time: '2:00 PM', doctor: 'Dr. Smith', type: 'Regular Checkup', status: 'Completed' },
    { date: '2024-01-18', time: '11:15 AM', doctor: 'Dr. Johnson', type: 'Lab Results Review', status: 'Completed' }
  ];

  return (
    <Page className="p-6">
      <div className="mb-6">
        <Heading size="xl">Patient Details</Heading>
        <Text appearance="subtle">Complete patient information and medical history</Text>
      </div>

      <div className="pr-2">
        {/* Patient Information */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Patient Information</Heading>
          </CardHeader>
          <CardBody>
            <Row className="mb-4">
              <Column size={6}>
                <div className="mb-3">
                  <Text weight="strong">Full Name</Text>
                  <br />
                  <Text>{patientInfo.name}</Text>
                </div>
                
                <div className="mb-3">
                  <Text weight="strong">Date of Birth</Text>
                  <br />
                  <Text>{patientInfo.dateOfBirth}</Text>
                </div>
                
                <div>
                  <Text weight="strong">Patient ID</Text>
                  <br />
                  <Text>{patientInfo.patientId}</Text>
                </div>
              </Column>
              <Column size={6}>
                <div className="mb-3">
                  <Text weight="strong">Age / Gender</Text>
                  <br />
                  <Text>{patientInfo.age} years / {patientInfo.gender}</Text>
                </div>
                
                <div className="mb-3">
                  <Text weight="strong">Phone Number</Text>
                  <br />
                  <Text>{patientInfo.phoneNumber}</Text>
                </div>
                
                <div>
                  <Text weight="strong">Email</Text>
                  <br />
                  <Text>{patientInfo.email}</Text>
                </div>
              </Column>
            </Row>
            <div className="mb-3">
              <Text weight="strong">Address</Text>
              <br />
              <Text>{patientInfo.address}</Text>
            </div>
          </CardBody>
        </Card>

        {/* Recent Vitals */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Recent Vital Signs</Heading>
          </CardHeader>
          <CardBody>
              {vitals.map((vital, index) => (
               <div key={index} className="mb-4 pb-3">
                 <div className="mb-2">
                   <Text weight="strong">{vital.date}</Text>
                 </div>
                 <Row>
                   <Column size={3}>
                     <div>
                       <Text size="small" appearance="subtle">Blood Pressure</Text>
                       <br />
                       <Text>{vital.bloodPressure} mmHg</Text>
                     </div>
                   </Column>
                   <Column size={3}>
                     <div>
                       <Text size="small" appearance="subtle">Heart Rate</Text>
                       <br />
                       <Text>{vital.heartRate} BPM</Text>
                     </div>
                   </Column>
                   <Column size={3}>
                     <div>
                       <Text size="small" appearance="subtle">Temperature</Text>
                       <br />
                       <Text>{vital.temperature}</Text>
                     </div>
                   </Column>
                   <Column size={3}>
                     <div>
                       <Text size="small" appearance="subtle">Weight</Text>
                       <br />
                       <Text>{vital.weight}</Text>
                     </div>
                   </Column>
                 </Row>
               </div>
             ))}
          </CardBody>
        </Card>

        {/* Current Medications */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Current Medications</Heading>
          </CardHeader>
          <CardBody>
                         {medications.map((med, index) => (
               <div key={index} className="mb-4 pb-3">
                 <Row>
                   <Column size={4}>
                     <div>
                       <Text weight="strong">{med.name}</Text>
                       <br />
                       <Text size="small" appearance="subtle">Prescribed by {med.prescribedBy}</Text>
                     </div>
                   </Column>
                   <Column size={3}>
                     <div>
                       <Text size="small" appearance="subtle">Dosage</Text>
                       <br />
                       <Text>{med.dosage}</Text>
                     </div>
                   </Column>
                   <Column size={5}>
                     <div>
                       <Text size="small" appearance="subtle">Frequency</Text>
                       <br />
                       <Text>{med.frequency}</Text>
                     </div>
                   </Column>
                 </Row>
               </div>
             ))}
          </CardBody>
        </Card>

        {/* Appointment History */}
        <Card shadow="light" className="mb-6">
          <CardHeader>
            <Heading size="s">Appointment History</Heading>
          </CardHeader>
          <CardBody>
                         {appointments.map((appointment, index) => (
               <div key={index} className="mb-4 pb-3">
                 <Row>
                   <Column size={3}>
                     <div>
                       <Text weight="strong">{appointment.date}</Text>
                       <br />
                       <Text size="small">{appointment.time}</Text>
                     </div>
                   </Column>
                   <Column size={3}>
                     <Text>{appointment.doctor}</Text>
                   </Column>
                   <Column size={4}>
                     <Text>{appointment.type}</Text>
                   </Column>
                   <Column size={2}>
                     <Badge appearance={appointment.status === 'Completed' ? 'success' : 'warning'}>
                       {appointment.status}
                     </Badge>
                   </Column>
                 </Row>
               </div>
             ))}
          </CardBody>
        </Card>

        {/* Medical Notes */}
        <Card shadow="light">
          <CardHeader>
            <Heading size="s">Recent Medical Notes</Heading>
          </CardHeader>
          <CardBody>
            <Text className="mb-3">
              <Text weight="strong">January 25, 2024 - Dr. Smith:</Text><br />
              Patient reports feeling well overall. Blood pressure readings are within normal range. 
              Continue current medication regimen. Advised to maintain regular exercise routine and 
              follow up in 3 weeks.
            </Text>
            <Text>
              <Text weight="strong">January 18, 2024 - Dr. Johnson:</Text><br />
              Lab results show improvement in glucose levels. Patient is responding well to current 
              treatment plan. Recommended dietary modifications discussed. Schedule next appointment 
              for medication review.
            </Text>
          </CardBody>
        </Card>
      </div>
    </Page>
  );
}`;

export default {
  title: 'Patterns/Layouts/Patient Data Template',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Patient Data Template',
        description:
          'A comprehensive patient registry layout using the Page component with scrollable patient data, detailed information cards, and summary statistics.',
        noProps: true,
      },
    },
  },
};
