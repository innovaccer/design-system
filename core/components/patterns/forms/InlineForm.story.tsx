import * as React from 'react';

export const inlineForm = () => <></>;

const customCode = `

() => {
  class InlineForm extends React.Component {

    constructor(props = {}) {
      super(props);

      this.state = {
        searchDisabled: true,
        data: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const updatedData = { ...this.state.data, [name]: value };

      this.setState({
        data: updatedData,
        searchDisabled: Object.keys(updatedData).every(key => !updatedData[key])
      });
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
      const options = [];
      for (let i = 1; i <= 10; i++) {
        options.push({
          label: \`Option \${i}\`,
          value: \`Option \${i}\`,
        });
      }

      return (
        <div className="w-100">
          <Card className="px-6 py-6">
            <form onSubmit={this.onSubmit}>
              <div className="d-flex flex-wrap">
                <div className="mr-6 mb-6">
                  <Label withInput={true}>Last Name</Label>
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="E.g. Doe, Smith, etc."
                    icon="person"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>First Name</Label>
                  <Input
                    name="firstName"
                    type="text"
                    placeholder="E.g. John, Will, etc."
                    icon="person"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>Gender</Label>
                  <div className="d-flex">
                    <Button className="mr-3" onClick={() => this.onChange('Male', 'gender')}>Male</Button>
                    <Button className="mr-3" onClick={() => this.onChange('Female', 'gender')}>Female</Button>
                    <Button className="mr-3" onClick={() => this.onChange('Other', 'gender')}>Other</Button>
                    <Button onClick={() => this.onChange('Unknown', 'gender')}>Unknown</Button>
                  </div>
                </div>
                <div className="mr-6 mb-6" style={{ width: 'var(--spacing-640)' }}>
                  <Label withInput={true}>Date of Birth</Label>
                  <DatePicker
                    withInput={true}
                    onDateChange={(currentDate) => this.onChange(currentDate, 'date')}
                    inputOptions={{
                      placeholder: 'MM/DD/YYYY',
                      icon: 'cake',
                      mask: [/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]
                    }}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>EMPI</Label>
                  <Input
                    name="empi"
                    type="text"
                    placeholder="P000000"
                    icon="fingerprint"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>MRN</Label>
                  <Input
                    name="mrn"
                    type="text"
                    placeholder="Medical Record Number"
                    icon="account_box"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>ZIP</Label>
                  <Input
                    name="zip"
                    type="text"
                    placeholder="00000"
                    icon="location_on"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6" style={{ width: 'var(--spacing-640)' }}>
                  <Label withInput={true}>Primary Care Physician</Label>
                  <Select
                    width="100%"
                    onSelect={(option) => this.onChange(option.value, 'pcp')}
                    triggerOptions={{ placeholder: "00000", icon: "add_box", }}
                  >
                    <Select.List>
                      {options.map((item, key) => {
                        return (
                          <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                            {item.label}
                          </Select.Option>
                        )
                      })}
                    </Select.List>
                  </Select>
                </div>
                <div className="mr-6 mb-6" style={{ width: 'var(--spacing-640)' }}>
                  <Label withInput={true}>Region</Label>
                  <Select
                    width="100%"
                    onSelect={(option) => this.onChange(option.value, 'region')}
                    triggerOptions={{ placeholder: "00000", icon: "flag", }}
                  >
                    <Select.List>
                      {options.map((item, key) => {
                        return (
                          <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                            {item.label}
                          </Select.Option>
                        )
                      })}
                    </Select.List>
                  </Select>
                </div>
              </div>
              <Button
                disabled={this.state.searchDisabled}
                appearance="primary"
                type="submit"
              >
                Search
              </Button>
            </form>
          </Card>
        </div>
      );
    }
  }

  return <InlineForm />
}`;

export default {
  title: 'Patterns/Forms/Inline Form',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Inline Form',
        noProps: true,
      },
    },
  },
};
