import * as React from 'react';
import { Combobox, Spinner, Label } from '@/index';
import { action } from '@/utils/action';

function useFetchOption() {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(medicineList, searchTerm) : medicineList;

    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          options: searchedOptions,
        });
      }, 1000);
    });
  };

  return { fetchOptions };
}

export const all = () => {
  const { fetchOptions } = useFetchOption();
  const [loading, setLoading] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetchOptions().then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  }, []);

  const onChangeHandler = (item) => {
    action('selected option', item)();

    setLoading(true);
    fetchOptions(item.label).then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  };

  const PopoverContent = ({ loading, optionList }) => {
    if (loading) {
      return (
        <div className="d-flex align-items-center justify-content-center py-6">
          <Spinner />
        </div>
      );
    }

    if (optionList.length === 0) {
      return <></>;
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
  };

  return (
    <div className="w-50">
      <Label withInput={true}>Drug Name</Label>
      <Combobox onChange={onChangeHandler} icon="search" placeholder="Enter drug name">
        <PopoverContent loading={loading} optionList={optionList} />
      </Combobox>
    </div>
  );
};

const customCode = `() => {

  function useFetchOption() {
    const medicineList = [
      { label: 'Acetaminophen', value: 'Acetaminophen' },
      { label: 'Ibuprofen', value: 'Ibuprofen' },
      { label: 'Penicillin G', value: 'Penicillin G' },
      { label: 'Penbutolol', value: 'Penbutolol' },
      { label: 'Aminophenol', value: 'Aminophenol' },
      { label: 'Vancomycin', value: 'Vancomycin' },
    ];

    const getSearchedOptions = (options, searchTerm) => {
      const result = options.filter((option) => option.label.toLowerCase().startsWith(searchTerm.toLowerCase()));
      return result;
    };

    const fetchOptions = (searchTerm) => {
      const searchedOptions = searchTerm ? getSearchedOptions(medicineList, searchTerm) : medicineList;

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            options: searchedOptions,
          });
        }, 1000);
      });
    };
    
    return { fetchOptions };
  }

  const { fetchOptions } = useFetchOption();
  const [loading, setLoading] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetchOptions().then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  }, []);

  const onChangeHandler = (item) => {
    console.log('selected option', item);

    setLoading(true);
    fetchOptions(item.label).then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  };

  const PopoverContent = ({loading, optionList}) => {
    if (loading) {
      return (
        <div className="d-flex align-items-center justify-content-center py-6">
          <Spinner />
        </div>
      );
    }

    if (optionList.length === 0) {
      return <></>;
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
  };

  return (
    <div className="w-50">
      <Label withInput={true}>Drug Name</Label>
      <Combobox onChange={onChangeHandler} icon="search" placeholder="Enter drug name">
        <PopoverContent loading={loading} optionList={optionList} />
      </Combobox>
    </div>
  );
}`;

export default {
  title: 'Components/Combobox/All',
  component: Combobox,
  subcomponents: { 'Combobox.List': Combobox.List, 'Combobox.Option': Combobox.Option },
  parameters: {
    docs: {
      docPage: {
        title: 'Combobox',
        customCode,
      },
    },
  },
};
