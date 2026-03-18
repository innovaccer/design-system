import * as React from 'react';

export const InlineLabelForm = () => <></>;

const customCode = `

() => {
  const languages = [
    {
      label: 'Hindi',
      value: 'Hindi',
    },
    {
      label: 'English',
      value: 'English',
      selected: true
    },
    {
      label: 'French',
      value: 'French',
    }
  ];

  class InlineLabelForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        data: {
          language: 'English',
          defaultLanguage: 'English',
          defaultPhoneNumber: 'primaryPhoneNumber'
        },
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const { defaultLanguage = '' } = this.state.data;

      const updatedData = {
        ...this.state.data,
        [name]: value,
      };

      this.setState({
        data: updatedData,
      });
    }

    onSubmit(event) {
      event.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
      const { defaultLanguage, language, defaultPhoneNumber } = this.state.data;

      return (
      <div className="w-100">
        <Card className="px-6 py-6">
          <form onSubmit={this.onSubmit}>
            <Row className="mb-6" role="group" aria-labelledby="known-languages-label">
              <Column size={3} className="d-flex align-items-center">
                <Icon aria-hidden="true" className="mr-4" name="language" />
                <Text id="known-languages-label">Known Languages</Text>
              </Column>
              <Column size={8} className="d-flex">
                <div className="mr-5 w-25">
                  <Select
                    width="100%"
                    triggerOptions={{ withClearButton: false, 'aria-label': "Known Languages" }}
                    onSelect={(option) => {
                      const updatedData = {
                        ...this.state.data,
                        language: option.value,
                        defaultLanguage: defaultLanguage !== '' ? option.value : defaultLanguage,
                      };
                      this.setState({data: updatedData})
                    }}
                  >
                    <Select.List>
                      {languages.map((item, key) => {
                        return (
                          <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                            {item.label}
                          </Select.Option>
                        )
                      })}
                    </Select.List>
                  </Select>
                </div>
                <Checkbox
                  name="defaultLanguage"
                  label="Set as Default"
                  defaultChecked={!!defaultLanguage}
                  onChange={(e) => {
                    const updatedData = {
                      ...this.state.data,
                      defaultLanguage: e.target.checked ? language : '',
                    };
                    this.setState({data: updatedData})
                  }}
                />
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Button icon="delete" appearance="transparent" aria-label="Delete known language" />
              </Column>
            </Row>
            <Row className="my-5" role="group" aria-labelledby="contact-method-label">
              <Column className="d-flex align-items-center" size={3}>
                <Icon aria-hidden="true" className="mr-4" name="record_voice_over" />
                <Text id="contact-method-label">Preferred Method of Contact</Text>
              </Column>
              <Column size={8} className="d-flex" role="group" aria-label="Contact method options">
                <Button className="mr-3" icon="call" onClick={() => this.onChange('phone', 'contact')}>Phone</Button>
                <Button className="mr-3" icon="chat" onClick={() => this.onChange('message', 'contact')}>Message</Button>
                <Button className="mr-3" icon="email" onClick={() => this.onChange('email', 'contact')}>Email</Button>
                <Button
                  className="mr-3"
                  icon="markunread_mailbox"
                  onClick={() => this.onChange('letter', 'contact')}
                >
                  Letter
                </Button>
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Button icon="delete" appearance="transparent" aria-label="Delete contact method" />
              </Column>
            </Row>
            <div role="group" aria-labelledby="phone-numbers-label">
            <Row className="mt-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon aria-hidden="true" className="mr-4" name="call" />
                <Text id="phone-numbers-label">Phone Numbers</Text>
              </Column>
              <Column size={8} className="d-flex">
                <InputMask
                  mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="primaryPhoneNumber"
                  aria-label="Primary phone number"
                  onChange={(e, value) => this.onChange(value, e.target.name)}
                />
                <Radio
                  defaultChecked={defaultPhoneNumber === 'primaryPhoneNumber'}
                  name="defaultPhoneNumber"
                  value="defaultPrimaryPhoneNumber"
                  label="Mark primary as preferred"
                  onChange={(e) => {
                    const updatedData = {
                      ...this.state.data,
                      defaultPhoneNumber: e.target.checked ? 'primaryPhoneNumber' : defaultPhoneNumber
                    };
                    this.setState({data: updatedData})
                  }}
                />
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Button icon="delete" appearance="transparent" aria-label="Delete primary phone number" />
              </Column>
            </Row>
            <Row className="my-5">
              <Column size={3} className="d-flex align-items-center" />
              <Column size={8} className="d-flex">
                <InputMask
                  mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="secondaryPhoneNumber"
                  aria-label="Secondary phone number"
                  onChange={(e, value) => this.onChange(value, e.target.name)}
                />
                <Radio
                  defaultChecked={defaultPhoneNumber === 'secondaryPhoneNumber'}
                  name="defaultPhoneNumber"
                  value="defaultSecondaryPhoneNumber"
                  label="Mark secondary as preferred"
                  onChange={(e) => {
                    const updatedData = {
                      ...this.state.data,
                      defaultPhoneNumber: e.target.checked ? 'secondaryPhoneNumber' : defaultPhoneNumber
                    };
                    this.setState({data: updatedData})
                  }}
                />
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Icon name="flag" appearance="warning" className="mr-4"/>
              </Column>
            </Row>
            </div>
          <div className="d-flex">
            <Button className="mr-4" type="submit" appearance="success">Save</Button>
            <Button>Cancel</Button>
          </div>
          </form>
        </Card>
      </div>
      );
    }
  }

  return <InlineLabelForm />
}`;

export default {
  title: 'Patterns/Forms/Inline Label Form',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Inline Label Form',
        noProps: true,
      },
    },
  },
};
