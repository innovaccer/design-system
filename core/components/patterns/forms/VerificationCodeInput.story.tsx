import * as React from 'react';
import { VerificationCodeInput } from '@/index';

export const verificationCodeInput = () => <></>;

const customCode = `() => {
  class VerificationCodeInputCard extends React.Component {
    constructor(props) {
      super(props);

      this.correctValue = '555123';
      this.state = {
        isTimerStarted: false,
        timer: 30,
        loading: false,
        value: '',
        error: false,
      };

      this.onToogleLink = this.onToogleLink.bind(this);
      this.onCompleteHandler = this.onCompleteHandler.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
      const { timer, isTimerStarted } = this.state;

      if (isTimerStarted
        && (timer !== prevState.time || prevState.isTimerStarted !== isTimerStarted)
      ) {
        if (timer > 0) {
          setTimeout(() => {
            this.setState({
              timer: timer - 1,
            })
          }, 1000);
        }

        if (timer === 0) {
          this.setState({
            isTimerStarted: !isTimerStarted,
          });
        }
      }
    }

    onToogleLink() {
      if (this.state.loading || !!this.state.value) return;
      this.setState({
        isTimerStarted: true,
        timer: 30
      });
    };

    onCompleteHandler(value) {
      this.setState({
        loading: true,
        timer: 0,
        isTimerStarted: false,
      });

      setTimeout(() => {
        this.setState({
          value: value === this.correctValue ? value : '',
          loading: false,
          error: value !== this.correctValue
        });
      }, 2000);
    };

    render() {
      const { isTimerStarted, timer, loading, value, error } = this.state;
      const time = timer < 10 ? \`0\${timer}\` : timer;

      return (
        <div>
          <div className="mb-5">
            <Text weight="strong">Note: </Text>
            <Text weight="medium">{\`Verified value of Verification Code Input is \${this.correctValue} in this example.\`}</Text>
          </div>
          <div className="w-50">
            {(value || error) && (
              <Message
                appearance={error ? 'alert' : 'success'}
                description={error? 'The code that you have entered is invalid or incorrect. Try again.' : 'Verification Successful.'}
                className="mb-5"
              />
            )}
            <Card className="py-6 px-6">
              <div className="d-flex flex-column">
                <Text weight="strong" size="large">Enter Verification Code</Text>
                <Text className="mt-3" appearance="subtle">
                  We have sent a 6 digit verification code to your phone (555) 555-1234
                </Text>
              </div>
              <Label withInput={true} className="mt-7">Verification code</Label>
              <div className="d-flex align-items-center">
                <VerificationCodeInput
                  fields={6}
                  onComplete={this.onCompleteHandler}
                  disabled={loading || !!value}
                />
                {loading && <Spinner className="ml-5" size="medium" />}
              </div>
              {isTimerStarted ? (
                <Text className="mt-7 d-flex" weight="medium">
                  {\`Haven't recieved the code? Resend code in 0:\${time}\`}
                </Text>
              ) : (
                  <Text
                    className="mt-7 d-flex cursor-pointer"
                    appearance={loading || !!value ? 'disabled' : 'link'}
                    weight="medium"
                    onClick={this.onToogleLink}
                  >
                    Resend Code
                  </Text>
                )}
            </Card>
          </div>
        </div>
      );
    }
  };

  return <><VerificationCodeInputCard /></>
}`;

export default {
  title: 'Patterns/Forms/Verification Code Input',
  component: VerificationCodeInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Verification Code Input',
      },
    },
  },
};
