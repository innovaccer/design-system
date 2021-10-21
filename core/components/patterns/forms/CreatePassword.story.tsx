import * as React from 'react';

export const createPassword = () => <></>;

const customCode = `

() => {
  const passwordRequirements = [
    { key: 'minLen',validation: 'At least eight (8) characters in length' },
    { key: 'uppercaseChar', validation: 'At least one (1) uppercase character'},
    { key: 'lowercaseChar', validation: 'At least one (1) lowercase character'},
    { key: 'numericChar', validation: 'At least one (1) numeric character' },
    { key: 'specialChar', validation: 'At least one (1) special character (! @ # $ \\ _)'},
  ];

  const regex = {
    minLen: /^.{8,}$/,
    specialChar: /[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/,
    lowercaseChar: /[a-z]/,
    uppercaseChar: /[A-Z]/,
    numericChar: /\\d/
  };

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
      this.onSubmit = this.onSubmit.bind(this);
    }

    onPasswordChange(event) {
      const newPassword = event.target.value;

      const newValidations = Object.keys(this.state.validations).reduce((acc, curr) => {
        return { ...acc, [curr]: regex[curr].test(newPassword) }
      }, this.state.validations);

      const isValidated = Object.keys(newValidations).every(k => !newValidations[k]);
      const value=event.target.value;
      this.setState({
        password: value,
        validations: newValidations,
        signInDisabled: (!isValidated && value!== this.state.confirmPassword) || !value,
      });

    }

    onConfirmPasswordChange(event) {
      const value=event.target.value;
      this.setState({
        confirmPassword: value,
        signInDisabled: value !== this.state.password || !value
      });
    }

    renderRequirements() {

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

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state.password);
      return false;
    }

    render() {
      const { passwordVisible, confirmPasswordVisible } = this.state;

      return (
        <div style={{ width: '350px' }}>
          <Card className="px-6 py-6">
            <form onSubmit={this.onSubmit}>
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
            </form>
          </Card>
        </div>
      );
    }
  }

  return <CreatePassword />
}`;

export default {
  title: 'Patterns/Forms/Create Password',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Create Password Form',
        noProps: true,
      },
    },
  },
};
