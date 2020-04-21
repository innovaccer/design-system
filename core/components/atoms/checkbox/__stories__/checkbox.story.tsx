import * as React from 'react';
import Checkbox from '../index';

// CSF format story
export const checkbox = () => {
  const style = {
    display: 'flex',
    'flex-direction': 'column',
    paddingLeft: '25px',
    paddingTop: '5px',
  };
  const parentObj = { checked: false, indeterminate: false };
  const labels = ['InConnect', 'InGraph', 'InReport'];
  const childArray = Array(labels.length).fill(false);

  const [checked, setChecked] = React.useState(childArray);
  const [parentStatus, setParentStatus] = React.useState(parentObj);

  const handleParentChange = (checkedValue: boolean) => {
    const updatedArray = [...childArray].fill(checkedValue);
    setChecked(updatedArray);
    if (checkedValue) {
      setParentStatus({ checked: checkedValue, indeterminate: !checkedValue });
    }
  };

  const handleChildChange = (checkedValue: boolean, index: number) => {
    const updateCheck = [...checked];
    updateCheck[index] = checkedValue;
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
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
      <div style={style}>
        {
          labels.map((label, ind) => {
            return (
              <Checkbox
                key={`checkbox-${ind}`}
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
};

const customCode = `() => {
  const labels = ['InConnect', 'InGraph', 'InReport'];

  const childArray = Array(labels.length).fill(false);
  const [checked, setChecked] = React.useState(childArray);
  const [parentStatus, setParentStatus] = React.useState({ checked: false, indeterminate: false });

  const handleParentChange = (checkedValue) => {
    const updatedArray = [...childArray].fill(checkedValue);
    setChecked(updatedArray);
    if (checkedValue) {
      setParentStatus({ checked: checkedValue, indeterminate: !checkedValue });
    }
  };

  const handleChildChange = (checkedValue, index) => {
    const updateCheck = [...checked];
    updateCheck[index] = checkedValue;
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
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
      <div style={{
          display: 'flex',
          'flex-direction': 'column',
          paddingLeft: '25px',
          paddingTop: '5px'
        }}>
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
  title: 'Atoms|Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
