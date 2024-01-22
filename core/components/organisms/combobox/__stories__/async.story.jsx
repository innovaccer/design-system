import * as React from 'react';
import { Combobox, Spinner } from '@/index';
import { action } from '@/utils/action';

export const async = () => {
  const [loading, setLoading] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);

  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(medicineList, searchTerm) : medicineList;

    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          options: searchedOptions,
        });
      }, 10000);
    });
  };

  React.useEffect(() => {
    setLoading(true);
    fetchOptions().then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  }, []);

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  const onChangeHandler = (value) => {
    setLoading(true);
    fetchOptions(value).then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'search',
      }}
      onSelect={onSelectHandler}
      onInputChange={onChangeHandler}
      className="w-25"
    >
      {() => {
        if (loading) {
          return (
            <div className="d-flex align-items-center justify-content-center py-6">
              <Spinner />
            </div>
          );
        }

        return (
          <Combobox.List>
            {optionList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        );
      }}
    </Combobox>
  );
};

const customCode = `() => {
  const [loading, setLoading] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);

  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(medicineList, searchTerm) : medicineList;

    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          options: searchedOptions,
        });
      }, 10000);
    });
  };

  React.useEffect(() => {
    setLoading(true);
    fetchOptions().then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  }, []);

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const onChangeHandler = (value) => {
    setLoading(true);
    fetchOptions(value).then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'search',
      }}
      onSelect={onSelectHandler}
      onInputChange={onChangeHandler}
      className="w-25"
    >
      {() => {
        if (loading) {
          return (
            <div className="d-flex align-items-center justify-content-center py-6">
              <Spinner />
            </div>
          );
        }

        return (
          <Combobox.List>
            {optionList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        );
      }}
    </Combobox>
  );
}`;

export default {
  title: 'Components/Combobox/Async',
  component: Combobox,
  parameters: {
    docs: {
      docPage: {
        title: 'Combobox',
        customCode,
      },
    },
  },
};
