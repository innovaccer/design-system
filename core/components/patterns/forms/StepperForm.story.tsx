import * as React from 'react';

export const stepperForm = () => <></>;

const customCode = `

() => {
  const steps = [
    {
      label: 'Define Input/Output',
      value: 'Define_Input_Output'
    },
    {
      label: 'Add Configuration',
      value: 'Add_Configuration'
    },
  ];
  const totalSteps = steps.length;

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
    });
  }

  class StepperForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        activeStep: 0,
        completedStep: -1,
        data: {},
        configuration: {},
      };

      this.onChangeStep = this.onChangeStep.bind(this);
      this.onClickNext = this.onClickNext.bind(this);
      this.onChangeOutput = this.onChangeOutput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.renderButton = this.renderButton.bind(this);
    }

    onChangeStep(activeStep) {
      this.setState({
        activeStep
      })
    }

    onChangeOutput(value, name) {
      const data = {
        ...this.state.data,
        [name]: value,
      };

      this.setState({
        data
      });
    }

    onClickNext() {
      const { activeStep, completedStep } = this.state;
      const updatedActive = activeStep > completedStep ? activeStep + 1 : completedStep + 1;
      this.setState({
        activeStep: updatedActive,
        completedStep: activeStep > completedStep ? activeStep : completedStep
      });
    }

    onSubmit(event) {
      event.preventDefault();
      console.log(this.state.data);
      console.log(this.state.configuration);
      return false;
    }

    renderButton() {
      if (this.state.activeStep + 1 === totalSteps) {
        return <Button appearance="success" type="submit">Save</Button>
      }

      return <Button appearance="primary" onClick={this.onClickNext}>Next</Button>
    }

    render() {
      const { value } = steps[this.state.activeStep];

      return (
        <div>
          <Card className="px-7 py-6">
            <form onSubmit={this.onSubmit}>
              <div className="d-flex flex-wrap justify-content-between">
                <Stepper
                  steps={steps}
                  active={this.state.activeStep}
                  completed={this.state.completedStep}
                  onChange={this.onChangeStep}
                />
                {this.renderButton()}
              </div>
              <div className={value !== 'Define_Input_Output' ? 'd-none' : ''}>
                <div className="d-flex mr-3 mt-7 mb-2">
                  <Heading size="s" className="mr-4">Source</Heading>
                  <Badge appearance="warning">2 Inputs</Badge>
                </div>
                <Text size="small" appearance="subtle">
                  The system automatically creates collection for multiple support.
                </Text>
                <div className="mt-4">
                  <Label withInput={true}>Input Collection 1</Label>
                  <Select
                    width="100%"
                    className="mb-4"
                    triggerOptions={{ placeholder: "Input Collection 1", 'aria-label': "Input Collection 1" }}
                    onSelect={(option) => this.onChangeOutput(option.value, 'collection1')}
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
                  <Label withInput={true}>Input Collection 2</Label>
                  <Select
                    width="100%"
                    triggerOptions={{ placeholder: "Input Collection 2", 'aria-label': "Input Collection 2" }}
                    onSelect={(option) => this.onChangeOutput(option.value, 'collection2')}
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
                <div className="d-flex mr-3 mt-8 mb-2">
                  <Heading size="s" className="mr-4">Destination</Heading>
                  <Badge appearance="success">8 Outputs</Badge>
                </div>
                <Text size="small" appearance="subtle">
                  The system automatically creates collection for multiple support.
                </Text>
                <div className="mt-6">
                  <Label withInput={true}>Destination Collection</Label>
                  <Select
                    width="100%"
                    triggerOptions={{ placeholder: "Select Destination", 'aria-label': "Destination Collection" }}
                    onSelect={(option) => this.onChangeOutput(option.value, 'collection')}
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
                <div className="mt-6">
                  <Label withInput={true} required htmlFor="prefix-input">Prefix</Label>
                  <InputMask
                    id="prefix-input"
                    mask={[/\\d/, '_', /\\d/, '_', /\\d/]}
                    name="prefix"
                    placeholder="ID_ID_ID"
                    placeholderChar="-"
                    onChange={(e) => this.onChangeOutput(e.target.value, e.target.name)}
                  />
                </div>
                <div className="mt-6">
                  <Label withInput={true} required>Retention Period</Label>
                  <Select
                    width="100%"
                    triggerOptions={{ 'aria-label': "Retention Period" }}
                    onSelect={(option) => this.onChangeOutput(option.value, 'retention')}
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
                  <Label className="mt-6" withInput={true}>Visibility Clarification</Label>
                  <Select
                    width="100%"
                    triggerOptions={{ 'aria-label': "Visibility Clarification" }}
                    onSelect={(option) => this.onChangeOutput(option.value, 'clarification')}
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
              <div className={value !== 'Add_Configuration' ? 'd-none' : ''}>
                <div className="d-flex mt-7">
                  <Avatar className="mr-5" firstName="A" appearance="success" />
                  <div className="d-flex flex-column">
                    <Heading size="s" className="mb-2">Job Configuration</Heading>
                    <Text size="small" appearance="subtle">
                      The system automatically creates collection for multiple support.
                    </Text>
                  </div>
                </div>
                <div className="mt-6">
                  <Label withInput={true} required>Mode</Label>
                  <Select
                    triggerOptions={{ 'aria-label': "Mode" }}
                    onSelect={(option) => {
                      this.setState({
                        configuration: { ...this.state.configuration, mode: option.value }
                      });
                    }}
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
                <div className="mt-6">
                  <Label withInput={true} required htmlFor="regex-input">Regex</Label>
                  <Textarea
                    id="regex-input"
                    rows={3}
                    onChange={(e, value) => {
                      this.setState({
                        configuration: { ...this.state.configuration, regex: value }
                      });
                    }}
                  />
                </div>
                <Label className="mt-6" withInput={true} htmlFor="enable-retention" required>Enable Retention</Label>
                <Switch id="enable-retention" appearance="primary" defaultChecked={true} className="d-flex" />
              </div>
            </form>
          </Card>
        </div>
      );
    }

  }

  return <StepperForm />
}`;

export default {
  title: 'Patterns/Forms/Stepper Form',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Stepper Form',
        noProps: true,
      },
    },
  },
};
