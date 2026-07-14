import * as React from 'react';

export const createUser = () => <></>;

const customCode = `

() => {
  const genderOptions = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    }
  ];

  const userOptions = [
    {
      label: 'User A',
      value: 'UserA',
    },
    {
      label: 'User B',
      value: 'UserB',
    }
  ];

  class CreateUser extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        updateDisabled: true,
        data: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const updatedData = { ...this.state.data, [name]: value };

      this.setState({
        data: updatedData,
        updateDisabled: Object.keys(updatedData).every(key => !updatedData[key])
      });
    }

    onSubmit(event) {
      event.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
      return (
      <div className="w-100">
        <Card className="px-6 py-6">
          <Text appearance="subtle" weight="strong">Primary Details</Text>
          <form onSubmit={this.onSubmit}>
            <Row className="mt-6">
              <Column sizeXL={4} sizeL={4} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true} required={true}>Last Name</Label>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="E.g. Doe, Smith, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true}>Middle Name</Label>
                <Input
                  name="middleName"
                  type="text"
                  placeholder="E.g. Doe, Smith, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={3} sizeL={3} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true} required={true}>First Name</Label>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="E.g. John, Will, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true}>Gender</Label>
                <Select 
                  width="100%"
                  onSelect={(option) => this.onChange(option.value, 'gender')}
                  triggerOptions={{ placeholder: "Select Gender", }}
                >
                  <Select.List>
                    {genderOptions.map((item, key) => {
                      return (
                        <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                          {item.label}
                        </Select.Option>
                      )
                    })}
                  </Select.List>
                </Select>
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true}>Date of Birth</Label>
                <DatePicker
                  withInput={true}
                  onDateChange={(currentDate) => this.onChange(currentDate, 'dob')}
                  inputOptions={{
                    placeholder: 'MM/DD/YYYY',
                    icon: 'cake',
                    mask: [/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]
                  }}
                />
              </Column>
              <Column sizeXL={3} sizeL={3} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true} >Maiden Name</Label>
                <Input
                  name="MaidenName"
                  type="text"
                  placeholder="E.g. Roe, Will, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true} required={true}>Email Address</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="E.g. abc@gmail.com"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true}>User Type</Label>
                <Select 
                  width="100%"
                  onSelect={(option) => this.onChange(option.value, 'userType')}
                  triggerOptions={{ placeholder: "Select User Type", }}
                >
                  <Select.List>
                    {userOptions.map((item, key) => {
                      return (
                        <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                          {item.label}
                        </Select.Option>
                      )
                    })}
                  </Select.List>
                </Select>
              </Column>
              <Column sizeXL={3} sizeL={3} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true} >NPI</Label>
                <Input
                  name="npi"
                  type="text"
                  placeholder="E.g. 000000"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
            </Row>
            <div className="d-flex justify-content-end">
              <Button className="mr-4">Cancel</Button>
              <Button type="submit" appearance="success" disabled={this.state.updateDisabled}>Update Account</Button>
            </div>
          </form>
        </Card>
      </div>
      );
    }
  }

  return <CreateUser />
}`;

export default {
  title: 'Patterns/Forms/Create User',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Create User Form',
        noProps: true,
      },
    },
  },
};
