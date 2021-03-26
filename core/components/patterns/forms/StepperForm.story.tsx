import * as React from 'react';

export const stepperForm = () => <></>;

const customCode = `
// import * as React from 'react';
// import { Button, Label, Card, Stepper, Text, Heading, DateRangePicker, Dropdown, Link, Paragraph } from 'design-system';

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

      return <Button appearance="primary" type="button" onClick={this.onClickNext}>Next</Button>
    }

    render() {
      const { value } = steps[this.state.activeStep];

      return (
        <div className="w-75">
          <Card className="px-7 py-6">
            <form onSubmit={this.onSubmit}>
              <div className="d-flex justify-content-between">
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
                  <Text weight="strong" className="mr-4">Source</Text>
                  <Badge appearance="warning">2 Inputs</Badge>
                </div>
                <Text size="small" appearance="subtle">
                  The system automatically creates collection for multiple support.
                </Text>
                <div className="w-50 mt-4">
                  <Dropdown
                    options={options}
                    placeholder="Input Collection 1"
                    className="mb-4"
                    onChange={(value) => this.onChangeOutput(value, 'collection1')}
                  />
                  <Dropdown
                    options={options}
                    placeholder="Input Collection 2"
                    onChange={(value) => this.onChangeOutput(value, 'collection2')}
                  />
                </div>
                <div className="d-flex mr-3 mt-8 mb-2">
                  <Text weight="strong" className="mr-4">Destination</Text>
                  <Badge appearance="success">8 Outputs</Badge>
                </div>
                <Text size="small" appearance="subtle">
                  The system automatically creates collection for multiple support.
                </Text>
                <div className="w-50 mt-6">
                  <Label withInput={true}>Destination Collection</Label>
                  <Dropdown
                    options={options}
                    placeholder="Select Destination"
                    onChange={(value) => this.onChangeOutput(value, 'collection')}
                  />
                </div>
                <div className="mt-6 w-50">
                  <Label withInput={true} required>Prefix</Label>
                  <InputMask
                    mask={[/\\d/, '_', /\\d/, '_', /\\d/]}
                    name="prefix"
                    placeholder="<workspace_id>_<workflow_id>_<pipeline_id>"
                    placeholderChar="-"
                    onChange={(e) => this.onChangeOutput(e.target.value, e.target.name)}
                  />
                </div>
                <div className="w-25 mt-6">
                  <Label withInput={true} required>Retention</Label>
                  <Dropdown options={options} onChange={(value) => this.onChangeOutput(value, 'retention')} />
                  <Label className="mt-6" withInput={true}>Visibility Clarification</Label>
                  <Dropdown options={options} onChange={(value) => this.onChangeOutput(value, 'clarification')} />
                </div>
              </div>
              <div className={value !== 'Add_Configuration' ? 'd-none' : ''}>
                <div className="d-flex mt-7">
                  <Avatar className="mr-5" firstName="A" appearance="success" />
                  <div className="d-flex flex-column">
                    <Text weight="strong" className="mb-2">Job Configuration</Text>
                    <Text size="small" appearance="subtle">
                      The system automatically creates collection for multiple support.
                    </Text>
                  </div>
                </div>
                <div className="w-25 mt-6">
                  <Label withInput={true} required>Mode</Label>
                  <Dropdown
                    options={options}
                    onChange={(value) => {
                      this.setState({
                        configuration: { ...this.state.configuration, mode: value }
                      });
                    }}
                  />
                </div>
                <div className="mt-6 w-50">
                  <Label withInput={true} required>Regex</Label>
                  <Textarea
                    rows={3}
                    onChange={(e, value) => {
                      this.setState({
                        configuration: { ...this.state.configuration, regex: value }
                      });
                    }}
                  />
                </div>
                <Label className="mt-6" withInput={true} required>Retention</Label>
                <Switch appearance="primary" defaultChecked={true} className="d-flex" />
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
        noProps: true
      }
    }
  }
};
