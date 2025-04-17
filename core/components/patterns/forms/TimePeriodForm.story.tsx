import * as React from 'react';

export const timePeriodForm = () => <></>;

const customCode = `

() => {
  class TimePeriodForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        time: 8,
        budget: 60
      };
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
        <div className="w-75">
          <Card className="px-7 py-6">
            <Heading className="mb-6" size="s">Configure Initiative</Heading>
            <Text weight="strong">Population Filter</Text>
            <div className="d-flex mt-5 mb-4">
              <div className="mr-6" style={{ width: 'var(--spacing-440)' }}>
                <Label withInput={true}>Region</Label>
                <Select width="100%">
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
              <div style={{ width: 'var(--spacing-640)' }}>
                <Label withInput={true}>Organization</Label>
                <Select width="100%">
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
            <Link target="_blank" href="#">Add organizations</Link>
            <div className="my-6 pt-6" style={{ borderTop: 'var(--border-width-2-5) solid var(--secondary-light)' }}>
              <Text weight="strong">Time Period</Text>
              <div className="mt-5">
                <DateRangePicker withInput />
              </div>
              <Slider
                className="mt-6 mb-7"
                label="Care Manager - Time Allocation"
                min={1}
                max={10}
                stepSize={1}
                value={this.state.time}
                onChange={(value) => this.setState({ time: value })}
                labelRenderer={(value) => this.state.time === value ? \`\${value}\` : ''}
              />
              <Paragraph appearance="subtle">Limit to <b>{this.state.time} hours</b> per day per Care Manager</Paragraph>
              <Slider
                className="mt-6 mb-7"
                label="Budget Allocation"
                min={10}
                max={100}
                stepSize={10}
                labelStepSize={10}
                value={this.state.budget}
                onChange={(value) => this.setState({ budget: value })}
                labelRenderer={(value) => this.state.budget === value ? \`$\${value}K\` : ''}
              />
              <Paragraph appearance="subtle">Allocated Budget: <b>\${this.state.budget}K</b> </Paragraph>
            </div>
            <div
              className="mt-7 pt-5 d-flex justify-content-end"
              style={{ borderTop: 'var(--border-width-2-5) solid var(--secondary-light)' }}
            >
              <Button appearance="basic" className="mr-4">Cancel</Button>
              <Button appearance="success">Initiate</Button>
            </div>
          </Card>
        </div>
      );
    }
  }

  return <TimePeriodForm />
}`;

export default {
  title: 'Patterns/Forms/Time Period Form',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Time Period Form',
        noProps: true,
      },
    },
  },
};
