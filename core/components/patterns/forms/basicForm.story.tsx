import * as React from 'react';

export const basicForm = () => <></>;

const customCode = `

() => {
  class BasicForm extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        signInDisabled: true,
        passwordVisible: false,
        data: { email: '', password: '' }
      };

      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onActionClick = this.onActionClick.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onActionClick() {
      this.setState({
        passwordVisible: !this.state.passwordVisible
      });
    }

    onEmailChange(event) {
      const { password = '' } = this.state.data;
      const email = event.target.value;
      const disabled = !password || !email;

      this.setState({
        data: { ...this.state.data, email },
        signInDisabled: disabled
      });
    };

    onPasswordChange(event) {
      const { email = '' } = this.state.data;
      const password = event.target.value;
      const disabled = !password || !email;

      this.setState({
        data: { ...this.state.data, password },
        signInDisabled: disabled
      });
    }

    onSubmit(e) {
      e.preventDefault();
      const { email = '', password = '' } = this.state.data;
      console.log(\`email: \${email}, password: \${password}\`);
      return false;
    }

    render() {
      const { password = '' } = this.state.data;

      return (
        <div style={{ width: '350px' }}>
          <Card className="px-6 py-6">
            <form onSubmit={this.onSubmit}>
              <Heading className="mb-7" size="m">Login</Heading>
              <Label withInput={true}>Email</Label>
              <Input
                name="input"
                type="text"
                placeholder="Enter email"
                className="mb-6"
                autocomplete={'off'}
                onChange={this.onEmailChange}
              />
              <Label withInput={true}>Password</Label>
              <Input
                name="input"
                className="mb-4"
                placeholder="Enter password"
                autocomplete={'off'}
                type={this.state.passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={this.onPasswordChange}
                actionIcon={(
                  <Icon
                    name={this.state.passwordVisible ? 'visibility' : 'visibility_off'}
                    onClick={this.onActionClick}
                  />
                )}
              />
              <Link target="_blank" href="#">Forgot Password?</Link>
              <Button
                className="mt-7"
                appearance="primary"
                expanded={true}
                disabled={this.state.signInDisabled}
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </Card>
        </div>
      );
    }
  }

  return <BasicForm />
}`;

export default {
  title: 'Patterns/Forms/Basic Form',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Basic Form',
        noProps: true,
      },
    },
  },
};
