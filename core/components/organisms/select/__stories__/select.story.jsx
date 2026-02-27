import * as React from 'react';
import { Select, Label, Button } from '@/index';
import { action } from '@/utils/action';

const medicineList = [
  { label: 'Aspirin', value: 'Aspirin' },
  { label: 'Paracetamol', value: 'Paracetamol' },
  { label: 'Lisinopril', value: 'Lisinopril' },
  { label: 'Simvastatin', value: 'Simvastatin' },
  { label: 'Amoxicillin', value: 'Amoxicillin' },
  { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
  { label: 'Metformin', value: 'Metformin' },
  { label: 'Omeprazole', value: 'Omeprazole' },
  { label: 'Diazepam', value: 'Diazepam' },
  { label: 'Levothyroxine', value: 'Levothyroxine' },
];

const searchMedicineList = [
  { label: 'Acetaminophen', value: 'Acetaminophen', id: 'acet' },
  { label: 'Ibuprofen', value: 'Ibuprofen', id: 'ibu' },
  ...medicineList.map((item, i) => ({ ...item, id: `med-${i}` })),
];

// CSF format story: single, multi with search + footer, search and custom trigger
export const all = () => {
  const multiSelectRef = React.useRef(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(searchMedicineList);
  const [isCustomOpen, setCustomOpen] = React.useState(false);

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMedicines(searchMedicineList);
    } else {
      setFilteredMedicines(searchMedicineList.filter((m) => m.label.toLowerCase().includes(searchTerm.toLowerCase())));
    }
  }, [searchTerm]);

  const setLabelHandler = (count) => (count > 2 ? `${count} Medicines` : undefined);
  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  const onApplyMulti = () => {
    if (multiSelectRef.current) multiSelectRef.current.setOpen(false);
  };

  const onCancelMulti = () => {
    if (multiSelectRef.current) multiSelectRef.current.setOpen(false);
  };

  const hasResults = filteredMedicines.length > 0;

  return (
    <div className="d-flex flex-wrap" style={{ gap: '2rem', maxWidth: 900 }}>
      <div style={{ minWidth: 260 }}>
        <Label className="mb-2">Single select</Label>
        <Select onSelect={onSelectHandler}>
          <Select.List>
            {medicineList.map((item, key) => (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
      </div>

      <div style={{ minWidth: 260 }}>
        <Label className="mb-2">Multi select with search and footer</Label>
        <Select
          ref={multiSelectRef}
          multiSelect={true}
          triggerOptions={{ setLabel: setLabelHandler }}
          onSelect={onSelectHandler}
        >
          <Select.SearchInput
            value={searchTerm}
            placeholder="Search"
            onChange={(v) => setSearchTerm(v || '')}
            onClear={() => setSearchTerm('')}
          />
          {hasResults ? (
            <Select.List>
              {filteredMedicines.map((item) => (
                <Select.Option
                  key={item.id || item.value}
                  option={{ label: item.label, value: item.value, id: item.id }}
                >
                  {item.label}
                </Select.Option>
              ))}
            </Select.List>
          ) : (
            <Select.EmptyTemplate title="No results" description="Try a different search." />
          )}
          <Select.Footer>
            <Button size="tiny" appearance="basic" className="mr-2" type="button" onClick={onCancelMulti}>
              Cancel
            </Button>
            <Button size="tiny" appearance="primary" type="button" onClick={onApplyMulti}>
              Apply
            </Button>
          </Select.Footer>
        </Select>
      </div>

      <div style={{ minWidth: 260 }}>
        <Label className="mb-2">Search and custom trigger</Label>
        <Select
          onSelect={onSelectHandler}
          onToggle={(open) => setCustomOpen(open)}
          trigger={
            <Button appearance="basic" icon={isCustomOpen ? 'expand_less' : 'expand_more'} iconAlign="right">
              Choose option
            </Button>
          }
        >
          <Select.List>
            {medicineList.slice(0, 5).map((item, key) => (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
      </div>
    </div>
  );
};

const customCode = `() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
  ];
  const searchList = [{ label: 'Acetaminophen', value: 'Acetaminophen', id: 'acet' }, { label: 'Ibuprofen', value: 'Ibuprofen', id: 'ibu' }].concat(medicineList.map((item, i) => ({ ...item, id: 'med-' + i })));
  const multiSelectRef = React.useRef(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filtered, setFiltered] = React.useState(searchList);
  const [isCustomOpen, setCustomOpen] = React.useState(false);
  React.useEffect(() => {
    if (searchTerm.trim() === '') setFiltered(searchList);
    else setFiltered(searchList.filter((m) => m.label.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm]);
  const setLabel = (count) => (count > 2 ? count + ' Medicines' : undefined);
  const onApplyMulti = () => { if (multiSelectRef.current) multiSelectRef.current.setOpen(false); };
  const onCancelMulti = () => { if (multiSelectRef.current) multiSelectRef.current.setOpen(false); };
  return (
    <div className="d-flex flex-wrap" style={{ gap: '2rem', maxWidth: 900 }}>
      <div style={{ minWidth: 260 }}><Label className="mb-2">Single select</Label><Select onSelect={() => {}}><Select.List>{medicineList.map((item, key) => <Select.Option key={key} option={{ label: item.label, value: item.value }}>{item.label}</Select.Option>)}</Select.List></Select></div>
      <div style={{ minWidth: 260 }}><Label className="mb-2">Multi select with search and footer</Label><Select ref={multiSelectRef} multiSelect={true} triggerOptions={{ setLabel }} onSelect={() => {}}><Select.SearchInput value={searchTerm} placeholder="Search" onChange={(v) => setSearchTerm(v || '')} onClear={() => setSearchTerm('')} />{filtered.length ? <Select.List>{filtered.map((item) => <Select.Option key={item.id || item.value} option={{ label: item.label, value: item.value, id: item.id }}>{item.label}</Select.Option>)}</Select.List> : <Select.EmptyTemplate title="No results" description="Try a different search." />}<Select.Footer><Button size="tiny" appearance="basic" className="mr-2" type="button" onClick={onCancelMulti}>Cancel</Button><Button size="tiny" appearance="primary" type="button" onClick={onApplyMulti}>Apply</Button></Select.Footer></Select></div>
      <div style={{ minWidth: 260 }}><Label className="mb-2">Search and custom trigger</Label><Select onSelect={() => {}} onToggle={(open) => setCustomOpen(open)} trigger={<Button appearance="basic" icon={isCustomOpen ? 'expand_less' : 'expand_more'} iconAlign="right">Choose option</Button>}><Select.List>{medicineList.slice(0, 5).map((item, key) => <Select.Option key={key} option={{ label: item.label, value: item.value }}>{item.label}</Select.Option>)}</Select.List></Select></div>
    </div>
  );
};`;

export default {
  title: 'Components/Select/All',
  component: Select,
  subcomponents: {
    'Select.List': Select.List,
    'Select.Option': Select.Option,
    'Select.SearchInput': Select.SearchInput,
    'Select.EmptyTemplate': Select.EmptyTemplate,
    'Select.Footer': Select.Footer,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Select',
        customCode,
      },
    },
  },
};
