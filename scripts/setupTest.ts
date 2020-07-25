import '@testing-library/jest-dom';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const ReactTestingLibrary = require('@testing-library/react');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Configure React Testing Library
const { configure } = ReactTestingLibrary;

configure({ testIdAttribute: 'data-test' });