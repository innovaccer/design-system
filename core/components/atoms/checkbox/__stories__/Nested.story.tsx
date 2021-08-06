import * as React from 'react';
import Checkbox from '../index';

// CSF format story
export const NestedCheckboxes = () => {
  const style = {
    display: 'flex',
    'flex-direction': 'column',
    paddingLeft: '25px',
  };
  const parentObj = { checked: false, indeterminate: true };
  const labels = ['Diabetes Eye Exam', 'HbA1c Test in last 12 months', 'Falls Risk Assessment'];
  const childArray = [true, true, false];

  const [checked, setChecked] = React.useState(childArray);
  const [parentStatus, setParentStatus] = React.useState(parentObj);

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedArray = [...childArray].fill(event.target.checked);
    setChecked(updatedArray);
    setParentStatus({ indeterminate: event.target.indeterminate, checked: event.target.checked });
  };

  const handleChildChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updateCheck = [...checked];
    updateCheck[index] = event.target.checked;
    const totalCount = labels.length;
    const countT = updateCheck.filter(Boolean).length;
    const status = countT < totalCount;
    const obj = countT > 0 ? { checked: !status, indeterminate: status } : { checked: !status, indeterminate: false };
    setChecked(updateCheck);
    setParentStatus(obj);
  };

  return (
    <div>
      <Checkbox
        checked={parentStatus.checked}
        indeterminate={parentStatus.indeterminate}
        label={'Measures'}
        onChange={handleParentChange}
        value={'Measures'}
      />
      <div style={style}>
        {labels.map((label, ind) => {
          return (
            <Checkbox
              key={`checkbox-${ind}`}
              label={label}
              checked={checked[ind]}
              value={label}
              onChange={(c) => handleChildChange(c, ind)}
              defaultChecked={ind < 2}
            />
          );
        })}
      </div>
    </div>
  );
};

const customCode = `() => {
  const labels = ['Diabetes Eye Exam', 'HbA1c Test in last 12 months', 'Falls Risk Assessment'];

  const childArray = [true, true, false];

  const [checked, setChecked] = React.useState(childArray);
  const [parentStatus, setParentStatus] = React.useState({ checked: false, indeterminate: true });

  const handleParentChange = (event) => {
    const updatedArray = [...childArray].fill(event.target.checked);
    setChecked(updatedArray);
    setParentStatus({ checked: event.target.checked, indeterminate: event.target.indeterminate });
  };

  const handleChildChange = (event, index) => {
    const updateCheck = [...checked];
    updateCheck[index] = event.target.checked;
    const totalCount = labels.length;
    const countT = updateCheck.filter(Boolean).length;
    const status = countT < totalCount;
    const obj = (countT > 0) ? { checked: !status, indeterminate: status } : { checked: !status, indeterminate: false };
    setChecked(updateCheck);
    setParentStatus(obj);
  };

  return (
    <div>
      <Checkbox
        checked={parentStatus.checked}
        indeterminate={parentStatus.indeterminate}
        label={'Measures'}
        onChange={handleParentChange}
        value={'Measures'}
      />
      <div style={{
          'flex-direction': 'column',
        }} className="d-flex pl-7">
        {
          labels.map((label, ind) => {
            return (
              <Checkbox
                key={\`checkbox-\${ind}\`}
                label={label}
                checked={checked[ind]}
                value={label}
                onChange={c => handleChildChange(c, ind)}
              />
            );
          })
        }
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Checkbox/Nested Checkboxes',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
