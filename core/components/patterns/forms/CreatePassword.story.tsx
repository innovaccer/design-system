import * as React from 'react';
import { Input, Button, Text, Label, Icon, Card } from '@/index';

interface Validation {
  [key: string]: boolean;
}

interface CreatePasswordState {
  validations: Validation;
  password: string;
  confirmPassword: string;
  signInDisabled: boolean;
  passwordVisible: boolean;
  confirmPasswordVisible: boolean;
}

const passwordRequirements = [
  {
    key: 'minLen',
    validation: 'At least eight (8) characters in length'
  },
  {
    key: 'uppercaseChar',
    validation: 'At least one (1) uppercase character'
  },
  {
    key: 'lowercaseChar',
    validation: 'At least one (1) lowercase character'
  },
  {
    key: 'numericChar',
    validation: 'At least one (1) numeric character'
  },
  {
    key: 'specialChar',
    validation: 'At least one (1) special character (! @ # $ \ _)'
  },
];

const validations: Validation = {
  minLen: false,
  uppercaseChar: false,
  lowercaseChar: false,
  numericChar: false,
  specialChar: false,
};

class CreatePassword extends React.Component<{}, CreatePasswordState> {
  constructor(props = {}) {
    super(props);

    this.state = {
      validations,
      signInDisabled: true,
      password: '',
      confirmPassword: '',
      passwordVisible: false,
      confirmPasswordVisible: false,
    };
  }

  onPasswordChange = (event: any) => {
    const newPassword = event.target.value;
    const minLen = newPassword.length >= 8;
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(newPassword);
    const lowercaseChar = /[a-z]/.test(newPassword);
    const uppercaseChar = /[A-Z]/.test(newPassword);
    const numericChar = /\d/.test(newPassword);

    const newValidations: Validation = {
      minLen,
      specialChar,
      uppercaseChar,
      lowercaseChar,
      numericChar
    };

    const isValidated = Object.keys(newValidations).every(k => !newValidations[k]);

    this.setState({
      password: event.target.value,
      validations: { ...this.state.validations, ...newValidations },
      signInDisabled: !isValidated && event.target.value !== this.state.confirmPassword,
    });

  }

  onConfirmPasswordChange = (event: any) => {
    this.setState({
      confirmPassword: event.target.value,
      signInDisabled: event.target.value !== this.state.password
    });
  }

  renderRequirements = () => {
    return (
      <div>
        {
          passwordRequirements.map((item, index) => {
            const { validation, key } = item;

            return (
              <div className="d-flex mb-4 align-items-center" key={index}>
                <Icon
                  className="mr-4"
                  name={this.state.validations[key] ? 'check_circle' : 'fiber_manual_record'}
                  appearance={this.state.validations[key] ? 'success' : 'default'}
                />
                <Text>{validation}</Text>
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    const { passwordVisible, confirmPasswordVisible } = this.state;

    return (
      <div style={{ width: '350px' }}>
        <Card className="px-6 py-6">
          <Label withInput={true}>Password</Label>
          <Input
            name="input"
            className="mb-4"
            placeholder="Enter password"
            type={this.state.passwordVisible ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.onPasswordChange}
            autocomplete="off"
            actionIcon={(
              <Icon
                name={this.state.passwordVisible ? 'visibility' : 'visibility_off'}
                onClick={() => this.setState({ passwordVisible: !passwordVisible })}
              />
            )}
          />
          {this.renderRequirements()}
          <Label withInput={true} className="mt-6">Confirm Password</Label>
          <Input
            name="input"
            placeholder="Enter password"
            type={this.state.confirmPasswordVisible ? 'text' : 'password'}
            value={this.state.confirmPassword}
            onChange={this.onConfirmPasswordChange}
            autocomplete="off"
            actionIcon={(
              <Icon
                name={this.state.confirmPasswordVisible ? 'visibility' : 'visibility_off'}
                onClick={() => this.setState({ confirmPasswordVisible: !confirmPasswordVisible })}
              />
            )}
          />
          <Button
            className="mt-7"
            appearance="primary"
            disabled={this.state.signInDisabled}
          >
            Next
          </Button>
        </Card>
      </div>
    );
  }
}

export const createPassword = () => <CreatePassword />;

const customCode = `
// import * as React from 'react';
// import { Input, Button, Text, Label, Icon, Card } from 'design-system';

class CreatePassword extends React.Component {
  constructor(props = {}) {
    super(props);

    const validations = {
      minLen: false,
      uppercaseChar: false,
      lowercaseChar: false,
      numericChar: false,
      specialChar: false,
    };

    this.state = {
      validations,
      signInDisabled: true,
      password: '',
      confirmPassword: '',
      passwordVisible: false,
      confirmPasswordVisible: false,
    };

    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.renderRequirements = this.renderRequirements.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
  }

  onPasswordChange(event) {
    const newPassword = event.target.value;
    const minLen = newPassword.length >= 8;
    const specialChar = /[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/;
    const lowercaseChar = /[a-z]/.test(newPassword);
    const uppercaseChar = /[A-Z]/.test(newPassword);
    const numericChar = /\\d/.test(newPassword);

    const newValidations = {
      minLen,
      specialChar,
      uppercaseChar,
      lowercaseChar,
      numericChar
    };

    const isValidated = Object.keys(newValidations).every((k) => !newValidations[k]);

    this.setState({
      password: event.target.value,
      validations: { ...this.state.validations, ...newValidations },
      signInDisabled: !isValidated && event.target.value !== this.state.confirmPassword,
    });

  }

  onConfirmPasswordChange(event) {
    this.setState({
      confirmPassword: event.target.value,
      signInDisabled: event.target.value !== this.state.password
    });
  }

  renderRequirements() {
    const passwordRequirements = [
      { key: 'minLen',validation: 'At least eight (8) characters in length' },
      { key: 'uppercaseChar', validation: 'At least one (1) uppercase character'},
      { key: 'lowercaseChar', validation: 'At least one (1) lowercase character'},
      { key: 'numericChar', validation: 'At least one (1) numeric character' },
      { key: 'specialChar', validation: 'At least one (1) special character (! @ # $ \ _)'},
    ];

    return (
      <div>
        {
          passwordRequirements.map((item, index) => {
            const { validation, key } = item;

            return (
              <div className="d-flex mb-4 align-items-center" key={index}>
                <Icon
                  className="mr-4"
                  name={this.state.validations[key] ? 'check_circle' : 'fiber_manual_record'}
                  appearance={this.state.validations[key] ? 'success' : 'default'}
                />
                <Text>{validation}</Text>
              </div>
            );
          })
        }
      </div>
    )
  }

  render() {
    const { passwordVisible, confirmPasswordVisible } = this.state;

    return (
      <div style={{ width: '350px' }}>
        <Card className="px-6 py-6">
          <Label withInput={true}>Password</Label>
          <Input
            name="input"
            className="mb-4"
            placeholder="Enter password"
            type={this.state.passwordVisible ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.onPasswordChange}
            autocomplete="off"
            actionIcon={
              <Icon
                name={this.state.passwordVisible ? 'visibility' : 'visibility_off'}
                onClick={() => this.setState({ passwordVisible: !passwordVisible })}
              />
            }
          />
          {this.renderRequirements()}
          <Label withInput={true} className="mt-6">Confirm Password</Label>
          <Input
            name="input"
            placeholder="Enter password"
            type={this.state.confirmPasswordVisible ? 'text' : 'password'}
            value={this.state.confirmPassword}
            onChange={this.onConfirmPasswordChange}
            autocomplete="off"
            actionIcon={
              <Icon
                name={this.state.confirmPasswordVisible ? 'visibility' : 'visibility_off'}
                onClick={() => this.setState({ confirmPasswordVisible: !confirmPasswordVisible })}
              />
            }
          />
          <Button
            className="mt-7"
            appearance="primary"
            disabled={this.state.signInDisabled}
          >
            Next
        </Button>
        </Card>
      </div>
    );
  }
}`;

export default {
  title: 'Patterns|Forms',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Create Password Form',
        noProps: true
      }
    }
  }
};
