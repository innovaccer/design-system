import * as React from 'react';
import { action } from '@/utils/action';
import {
  Stepper,
  Button,
  Card,
  Heading,
  Text,
  Dropdown,
  Label,
  DateRangePicker,
  Row,
  Column,
  Icon,
  Checkbox,
  InputMask,
  Radio,
  List,
} from '@/index';

export const stepperWithAnimation = () => {
  const steps = [
    {
      label: 'Step',
      value: 'Step1',
    },
    {
      label: 'Step',
      value: 'Step2',
    },
    {
      label: 'Step',
      value: 'Step3',
    },
  ];
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(active - 1);
  const [card, setActiveCard] = React.useState(0);
  const [delay, setDelay] = React.useState(0);
  const requiredSteps = [0];
  const maxSteps = [steps.length];
  const [tab, setTab] = React.useState(1);

  const step1 = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push({
        label: `Option ${i}`,
        value: `Option ${i}`,
      });
    }
    const handleAnimationEnd = () => {
      if (tab === 1) {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay + 1);
        }
      } else {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay - 1);
        }
      }
    };
    const classes =
      tab === 1
        ? card !== active && delay !== active
          ? 'horizontal-nav--exit'
          : 'horizontal-nav--entrance'
        : card !== active && delay !== active
        ? 'stepper-previous--exit'
        : 'stepper-previous--entrance';
    return (
      <div
        className={`py-4 w-100 position-relative ${classes}
       `}
        onAnimationEnd={handleAnimationEnd}
      >
        <Card className="px-7 py-6">
          <Heading className="mb-6" size="s">
            Configure Initiative
          </Heading>
          <Text weight="strong">Population Filter</Text>
          <div className="d-flex mt-5 mb-4">
            <div className="mr-6" style={{ width: 'var(--spacing-8)' }}>
              <Label withInput={true}>Region</Label>
              <Dropdown options={options} />
            </div>
            <div style={{ width: 'var(--spacing-9)' }}>
              <Label withInput={true}>Organization</Label>
              <Dropdown options={options} />
            </div>
          </div>
          <div className="my-6 pt-6" style={{ borderTop: 'var(--spacing-xs) solid var(--secondary-light)' }}>
            <Text weight="strong">Time Period</Text>
            <div className="mt-5">
              <DateRangePicker withInput />
            </div>
          </div>
        </Card>
      </div>
    );
  };

  const step2 = () => {
    const languages = [
      {
        label: 'Hindi',
        value: 'Hindi',
      },
      {
        label: 'English',
        value: 'English',
        selected: true,
      },
      {
        label: 'French',
        value: 'French',
      },
    ];
    const method = [
      {
        label: 'Phone',
        value: 'Phone',
      },
      {
        label: 'Message',
        value: 'Message',
        selected: true,
      },
      {
        label: 'Email',
        value: 'Email',
      },
      {
        label: 'Letter',
        value: 'Letter',
      },
    ];
    const handleAnimationEnd = () => {
      if (tab === 1) {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay + 1);
        }
      } else {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          // setDelay(delay - 1);
        }
      }
    };
    const classes =
      tab === 1
        ? card !== active && delay !== active
          ? 'horizontal-nav--exit'
          : 'horizontal-nav--entrance'
        : card !== active && delay !== active
        ? 'stepper-previous--exit'
        : 'stepper-previous--entrance';
    return (
      <div className={`py-4 w-100 position-relative ${classes}`} onAnimationEnd={handleAnimationEnd}>
        <Card className="px-6 py-6">
          <form>
            <Row className="mb-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="language" />
                <Text>Known Languages</Text>
              </Column>
              <Column size={8} className="d-flex">
                <div className="mr-5 w-25">
                  <Dropdown options={languages} />
                </div>
                <Checkbox name="defaultLanguage" label="Set as Default" />
              </Column>
            </Row>
            <Row className="my-5">
              <Column className="d-flex align-items-center" size={3}>
                <Icon className="mr-4" name="record_voice_over" />
                <Text>Preferred Method of Contact</Text>
              </Column>
              <Column size={8} className="d-flex">
                <Dropdown options={method} />
              </Column>
            </Row>
            <Row className="mt-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="call" />
                <Text>Phone Numbers</Text>
              </Column>
              <Column size={8} className="d-flex">
                <InputMask
                  mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="primaryPhoneNumber"
                />
                <Radio name="defaultPhoneNumber" value="defaultPrimaryPhoneNumber" label="Mark as Preferred" />
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
                />
                <Radio name="defaultPhoneNumber" value="defaultSecondaryPhoneNumber" label="Mark as Preferred" />
              </Column>
            </Row>
          </form>
        </Card>
      </div>
    );
  };

  const step3 = () => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jonathandoe@gamil.com',
        owner: true,
      },
      {
        firstName: 'Katty',
        lastName: 'Perry',
        email: 'kattyperry21@gamil.com',
        edit: true,
      },
      {
        firstName: 'Daniel',
        lastName: 'Low',
        email: 'daniellow02@yahoo.com',
        view: true,
      },
    ];

    const schema = [
      {
        name: 'info',
        displayName: 'Info',
        width: '80%',
        cellType: 'AVATAR_WITH_META_LIST',
        translate: (a) => ({
          firstName: a.firstName,
          lastName: a.lastName,
          title: `${a.firstName} ${a.lastName}`,
          metaList: [a.email],
        }),
      },
      {
        name: 'rights',
        displayName: 'Rights',
        width: '20%',
        cellRenderer: (props) => {
          const renderRights = () => {
            if (props.data.owner) {
              return (
                <Text appearance="subtle" className="pr-5">
                  owner
                </Text>
              );
            }

            if (props.data.edit || props.data.view) {
              const rights = props.data.edit ? 'edit' : 'view';
              return (
                <Button
                  icon="keyboard_arrow_down"
                  iconAlign="right"
                  appearance="transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  {`can ${rights}`}
                </Button>
              );
            }

            return null;
          };

          return <div className="d-flex align-items-center justify-content-end flex-grow-1">{renderRights()}</div>;
        },
      },
    ];

    const handleAnimationEnd = () => {
      if (tab === 1) {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay + 1);
        }
      } else {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay - 1);
        }
      }
    };
    const classes =
      tab === 1
        ? card !== active && delay !== active
          ? 'horizontal-nav--exit'
          : 'horizontal-nav--entrance'
        : card !== active && delay !== active
        ? 'stepper-previous--exit'
        : 'stepper-previous--entrance';
    return (
      <div className={`py-4 w-100 position-relative ${classes} `} onAnimationEnd={handleAnimationEnd}>
        <Card className={`py-4`}>
          <Text size="large" weight="strong" className="ml-5">
            Sharing Test Manual
          </Text>
          <List
            type="resource"
            withHeader={true}
            headerOptions={{
              withSearch: true,
              dynamicColumn: false,
            }}
            separator={false}
            showMenu={false}
            data={data}
            schema={schema}
            withPagination={false}
            onSearch={(currData, searchTerm) => {
              return currData.filter(
                (d) =>
                  d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
                  d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
            onRowClick={(rowData, rowIndex) =>
              action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
            }
          />
        </Card>
      </div>
    );
  };

  const onChange = (activeStep) => {
    setActiveCard(activeStep);
    return action(`Active Index: ${activeStep}`)();
  };

  const onClickHandler = () => {
    setTab(1);
    const updatedActive = active > completed ? active + 1 : completed + 1;
    if (active > completed) setCompleted(active);
    setActive(updatedActive);
    return action(`Active Index: ${updatedActive}`)();
  };

  const onPreviousHandler = () => {
    setTab(0);
    {
      active === completed && setActive(active);
      setCompleted(completed - 1);
    }
    const updatedActive = active > completed ? active - 1 : completed - 1;
    if (active > completed) setCompleted(completed - 1);
    setActive(updatedActive);
    return action(`Active Index: ${updatedActive}`)();
  };

  const onFinishHandler = () => {
    const updatedActive = active > completed ? active + 1 : completed + 1;
    setCompleted(active);
    setActive(updatedActive);
    return action(`Active Index: ${updatedActive}`)();
  };

  const renderStep = () => {
    if (active === 0 || delay === 0) {
      return step1();
    }
    if (active === 1 || delay === 1) {
      return step2();
    }
    if (active === 2 || delay === 2) {
      return step3();
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between align-items-end py-4 px-4 bg-secondary-lightest">
      <div className="d-flex justify-content-center py-5 bg-light w-100">
        <Stepper steps={steps} active={active} completed={completed} onChange={onChange} />
      </div>
      {renderStep()}
      <br />
      <div className="w-25 d-flex justify-content-end">
        <Button
          onClick={onPreviousHandler}
          disabled={requiredSteps.includes(active) || maxSteps.includes(completed)}
          className="mr-4"
        >
          Previous
        </Button>
        {active !== maxSteps - 1 ? (
          <Button onClick={onClickHandler} disabled={maxSteps.includes(active)} appearance="primary">
            Next
          </Button>
        ) : (
          <Button onClick={onFinishHandler} disabled={maxSteps.includes(completed)} appearance="primary">
            Finish
          </Button>
        )}
      </div>
    </div>
  );
};

const customCode = `() => {
  const steps = [
    {
      label: 'Step',
      value: 'Step1'
    },
    {
      label: 'Step',
      value: 'Step2'
    },
    {
      label: 'Step',
      value: 'Step3'
    }
  ];

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(active - 1);
  const [card, setActiveCard] = React.useState(0);
  const [delay, setDelay] = React.useState(0); 
  const requiredSteps = [0];
  const maxSteps = [steps.length];
  const [tab, setTab] = React.useState(1);

  const step1 = () => {

    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push({
        label: \`Option \${i}\`,
        value: \`Option \${i}\`,
      });
    }

    const handleAnimationEnd = () => {
      if (tab === 1) {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay + 1);
        }
      } else {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay - 1);
        }
      }
    };
    
    const classes = tab === 1 ? card !== active && delay !== active ? 'horizontal-nav--exit' : 'horizontal-nav--entrance' : card !== active && delay !== active ? 'stepper-previous--exit' : 'stepper-previous--entrance' ;

  return (
    <div className={\`py-4 w-100 position-relative \${classes} \`} onAnimationEnd={handleAnimationEnd}>
      <Card className="px-7 py-6">
        <Heading className="mb-6" size="s">
          Configure Initiative
        </Heading>
        <Text weight="strong">Population Filter</Text>
        <div className="d-flex mt-5 mb-4">
          <div className="mr-6" style={{ width: 'var(--spacing-8)' }}>
            <Label withInput={true}>Region</Label>
            <Dropdown
            options={options}
            />
          </div>
          <div style={{ width: 'var(--spacing-9)' }}>
            <Label withInput={true}>Organization</Label>
            <Dropdown
            options={options}
            />
          </div>
        </div>
        <div className="my-6 pt-6" style={{ borderTop: 'var(--spacing-xs) solid var(--secondary-light)' }}>
          <Text weight="strong">Time Period</Text>
          <div className="mt-5">
            <DateRangePicker withInput />
          </div>
        </div>
      </Card>
    </div>
  );
  }

  const step2 = () => {
    const languages = [
      {
        label: 'Hindi',
        value: 'Hindi',
      },
      {
        label: 'English',
        value: 'English',
        selected: true,
      },
      {
        label: 'French',
        value: 'French',
      },
    ];
    const method = [
      {
        label: 'Phone',
        value: 'Phone',
      },
      {
        label: 'Message',
        value: 'Message',
        selected: true,
      },
      {
        label: 'Email',
        value: 'Email',
      },
      {
        label: 'Letter',
        value: 'Letter',
      },
    ];

    const handleAnimationEnd = () => {
      if (tab === 1) {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay + 1);
        }
      } else {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          // setDelay(delay - 1);
        }
      }
    };

    const classes = tab === 1 ? card !== active && delay !== active ? 'horizontal-nav--exit' : 'horizontal-nav--entrance' : card !== active && delay !== active ? 'stepper-previous--exit' : 'stepper-previous--entrance' ;
    return (
      <div className={\`py-4 w-100 position-relative \${classes}\`} onAnimationEnd={handleAnimationEnd}>
        <Card className="px-6 py-6">
          <form>
            <Row className="mb-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="language" />
                <Text>Known Languages</Text>
              </Column>
              <Column size={8} className="d-flex">
                <div className="mr-5 w-25">
                  <Dropdown
                    options={languages}
                  />
                </div>
                <Checkbox
                  name="defaultLanguage"
                  label="Set as Default"
                />
              </Column>
            </Row>
            <Row className="my-5">
              <Column className="d-flex align-items-center" size={3}>
                <Icon className="mr-4" name="record_voice_over" />
                <Text>Preferred Method of Contact</Text>
              </Column>
              <Column size={8} className="d-flex">
              <Dropdown options={method} />
              </Column>
            </Row>
            <Row className="mt-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="call" />
                <Text>Phone Numbers</Text>
              </Column>
              <Column size={8} className="d-flex">
                <InputMask
                  mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="primaryPhoneNumber"
                />
                <Radio
                  name="defaultPhoneNumber"
                  value="defaultPrimaryPhoneNumber"
                  label="Mark as Preferred"
                />
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
                />
                <Radio
                  name="defaultPhoneNumber"
                  value="defaultSecondaryPhoneNumber"
                  label="Mark as Preferred"
                />
              </Column>
            </Row>
          </form>
        </Card>
      </div>
    );
  };

  const step3 = () => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jonathandoe@gamil.com',
        owner: true
      },
      {
        firstName: 'Katty',
        lastName: 'Perry',
        email: 'kattyperry21@gamil.com',
        edit: true
      },
      {
        firstName: 'Daniel',
        lastName: 'Low',
        email: 'daniellow02@yahoo.com',
        view: true
      },
    ];
  
    const schema = [
      {
        name: 'info',
        displayName: 'Info',
        width: '80%',
        cellType: 'AVATAR_WITH_META_LIST',
        translate: a => ({
          firstName: a.firstName,
          lastName: a.lastName,
          title: \`\${a.firstName} \${a.lastName}\`,
          metaList: [a.email]
        }),
      },
      {
        name: 'rights',
        displayName: 'Rights',
        width: '20%',
        cellRenderer: (props) => {
          const renderRights = () => {
            if (props.data.owner) {
              return <Text appearance="subtle" className="pr-5">owner</Text>;
            }
  
            if (props.data.edit || props.data.view) {
              const rights = props.data.edit ? 'edit' : 'view';
              return (
                <Button
                  icon="keyboard_arrow_down"
                  iconAlign="right"
                  appearance="transparent"
                  onClick={e => e.stopPropagation()}
                >
                  {\`can \${rights}\`}
                </Button>
              );
            }
  
            return null;
          };
  
          return (
            <div className="d-flex align-items-center justify-content-end flex-grow-1">
              {renderRights()}
            </div>
          );
        }
      }
    ];

    const handleAnimationEnd = () => {
      if (tab === 1) {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay + 1);
        }
      } else {
        if (delay !== active) {
          setDelay(active);
        } else {
          setActiveCard(active);
          setDelay(delay - 1);
        }
      }
    };

    const classes = tab === 1 ? card !== active && delay !== active ? 'horizontal-nav--exit' : 'horizontal-nav--entrance' : card !== active && delay !== active ? 'stepper-previous--exit' : 'stepper-previous--entrance' ;
    return (
      <div
      className={\`w-100 py-4 position-relative \${classes}\`}
      onAnimationEnd={handleAnimationEnd}
    >
        <Card
          className={\` py-4\`}
        >
          <Text size="large" weight="strong" className="ml-5">Sharing Test Manual</Text>
          <List
            type="resource"
            withHeader={true}
            headerOptions={{
              withSearch: true,
              dynamicColumn: false
            }}
            separator={false}
            showMenu={false}
            data={data}
            schema={schema}
            withPagination={false}
            onSearch={(currData, searchTerm) => {
              return currData.filter(d =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase())
                || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
            onRowClick={(rowData, rowIndex) =>
              console.log(\`o\n-row-click:- rowIndex: \${rowIndex} data: \${JSON.stringify(rowData)}\`)
            }
          />
        </Card>
        </div>
    );  
  }
  const onChange = (activeStep) => {
    setActiveCard(activeStep);
  };

  const onClickHandler = () => {
    setTab(1);
    const updatedActive = active > completed ? active + 1 : completed + 1;
    if (active > completed) setCompleted(active);
    setActive(updatedActive);
  };
  const onPreviousHandler = () => {
    setTab(0);
    {
      active === completed && setActive(active);
      setCompleted(completed - 1);
    }
    const updatedActive = active > completed ? active - 1 : completed - 1;
    if (active > completed) setCompleted(completed - 1);
    setActive(updatedActive);
  };
  const onFinishHandler = () => {
    const updatedActive = active > completed ? active + 1 : completed + 1;
    setCompleted(active + 1);
    setActive(updatedActive);
  };
  const renderStep = () => {
    if (active === 0 || delay === 0) {
      return step1();
    }
    if (active === 1 || delay === 1) {
      return step2();
    }
    if (active === 2 || delay === 2) {
      return step3();
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-end py-4 px-4 bg-secondary-lightest"
      
    >
      <div className="d-flex justify-content-center py-5 bg-light w-100">
        <Stepper
          steps={steps}
          active={active}
          completed={completed}
          onChange={onChange}
        />
      </div>
      {renderStep()}
      <br />
      <div className="w-25 d-flex justify-content-end">
        <Button onClick={onPreviousHandler} disabled={requiredSteps.includes(active) || maxSteps.includes(completed)} className="mr-4">Previous</Button>
        {active !== maxSteps - 1 ? (
          <Button onClick={onClickHandler} disabled={maxSteps.includes(active)} appearance="primary">
            Next
          </Button>
        ) : (
          <Button onClick={onFinishHandler} disabled={maxSteps.includes(completed)} appearance="primary">
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Stepper/Variants/Stepper With Animation',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
