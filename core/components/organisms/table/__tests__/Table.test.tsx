import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Table, { TableProps as Props } from '../Table';
import { Schema } from '../interfaces';

const BooleanValue = [true, false];

const users = [
  { firstName: 'Brooke', lastName: 'Heeran', email: 'bheeran0@altervista.org', gender: 'Female' },
  { firstName: 'Frazer', lastName: 'Cathro', email: 'fcathro1@ucla.edu', gender: 'Male' },
  { firstName: 'Lemmie', lastName: 'Ciric', email: 'lciric2@dmoz.org', gender: 'Male' },
  { firstName: 'Randy', lastName: 'Boatwright', email: 'rboatwright3@arstechnica.com', gender: 'Male' },
  { firstName: 'Rolando', lastName: 'Cyples', email: 'rcyples4@biglobe.ne.jp', gender: 'Male' },
  { firstName: 'Lem', lastName: 'Males', email: 'lmales5@admin.ch', gender: 'Male' },
  { firstName: 'Sayres', lastName: 'Adelberg', email: 'sadelberg6@uol.com.br', gender: 'Male' },
  { firstName: 'Murray', lastName: 'Bravington', email: 'mbravington7@drupal.org', gender: 'Male' },
  { firstName: 'Jena', lastName: 'Swatheridge', email: 'jswatheridge8@npr.org', gender: 'Female' },
  { firstName: 'Annabel', lastName: 'Nelsey', email: 'anelsey9@google.com', gender: 'Female' }
];

const schema: Schema[] = [
  {
    width: 200,
    template: (row: any) => (
      <div className="cell-wrapper">
        {row.firstName} {row.lastName}
      </div>
    ),
    pinned: 'LEFT',
    get: ({ firstName, lastName }: any) => ({
      firstName,
      lastName,
    }),
    name: 'name',
    displayName: 'Name',
  },
  {
    width: 200,
    name: 'gender',
    displayName: 'Gender',
  },
  {
    width: 200,
    name: 'email',
    displayName: 'Email',
  },
  {
    width: 200,
    name: 'note',
    displayName: 'Note',
  },
];

describe('Table component', () => {
  const mapper: Record<string, any> = {
    data: valueHelper(users, { required: true }),
    schema: valueHelper(schema, { required: true }),
    loading: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    
    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Table
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Table component', () => {
  const mapper: Record<string, any> = {
    data: valueHelper(users, { required: true }),
    schema: valueHelper(schema, { required: true }),
    pagination: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Table
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
