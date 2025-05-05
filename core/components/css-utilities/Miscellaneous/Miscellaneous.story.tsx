import * as React from 'react';
import { Card, Table, Heading, Paragraph } from '@/index';
import utilitiesSchema from '../Schema';

export const miscellaneous = () => {
  const data = [
    {
      className: 'hide-scroll-bar::-webkit-scrollbar',
      properties: 'height: 0px;\nbackground: transparent;',
    },
    {
      className: 'hide-scroll-bar',
      properties: '-ms-overflow-style: none;\nscrollbar-width: none;',
    },
    {
      className: 'ellipsis',
      properties: 'overflow: hidden;\ntext-overflow: ellipsis;',
    },
    {
      className: 'ellipsis--noWrap',
      properties: 'white-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;',
    },
    {
      className: 'cursor-pointer',
      properties: 'cursor: pointer;',
    },
    {
      className: 'white-space-nowrap',
      properties: 'white-space: nowrap;',
    },
    {
      className: 'bottom-0',
      properties: 'bottom: 0;',
    },
    // Visibility utilities
    {
      className: 'visible',
      properties: 'visibility: visible;',
    },
    {
      className: 'invisible',
      properties: 'visibility: hidden;',
    },
    // User select utilities
    {
      className: 'user-select-none',
      properties: 'user-select: none;',
    },
    {
      className: 'user-select-all',
      properties: 'user-select: all;',
    },
    {
      className: 'user-select-auto',
      properties: 'user-select: auto;',
    },
    {
      className: 'user-select-text',
      properties: 'user-select: text;',
    },
    // Word break utilities
    {
      className: 'word-break-normal',
      properties: 'word-break: normal;',
    },
    {
      className: 'word-break-all',
      properties: 'word-break: break-all;',
    },
    {
      className: 'word-break-word',
      properties: 'word-break: break-word;',
    },
    {
      className: 'word-wrap-break',
      properties: 'word-wrap: break-word;',
    },
    // List style utilities
    {
      className: 'list-style-none',
      properties: 'list-style: none;',
    },
    {
      className: 'list-style-disc',
      properties: 'list-style: disc;',
    },
    {
      className: 'list-style-circle',
      properties: 'list-style: circle;',
    },
    {
      className: 'list-style-square',
      properties: 'list-style: square;',
    },
    // Pointer events utilities
    {
      className: 'pointer-events-none',
      properties: 'pointer-events: none;',
    },
    {
      className: 'pointer-events-auto',
      properties: 'pointer-events: auto;',
    },
    // Object fit utilities
    {
      className: 'object-fit-contain',
      properties: 'object-fit: contain;',
    },
    {
      className: 'object-fit-cover',
      properties: 'object-fit: cover;',
    },
    {
      className: 'object-fit-fill',
      properties: 'object-fit: fill;',
    },
    {
      className: 'object-fit-scale-down',
      properties: 'object-fit: scale-down;',
    },
    {
      className: 'object-fit-none',
      properties: 'object-fit: none;',
    },
    // Resize utilities
    {
      className: 'resize-none',
      properties: 'resize: none;',
    },
    {
      className: 'resize-both',
      properties: 'resize: both;',
    },
    {
      className: 'resize-horizontal',
      properties: 'resize: horizontal;',
    },
    {
      className: 'resize-vertical',
      properties: 'resize: vertical;',
    },
    // Box decoration utilities
    {
      className: 'box-decoration-clone',
      properties: 'box-decoration-break: clone;',
    },
    {
      className: 'box-decoration-slice',
      properties: 'box-decoration-break: slice;',
    },
    // Mix blend mode utilities
    {
      className: 'mix-blend-normal',
      properties: 'mix-blend-mode: normal;',
    },
    {
      className: 'mix-blend-multiply',
      properties: 'mix-blend-mode: multiply;',
    },
    {
      className: 'mix-blend-screen',
      properties: 'mix-blend-mode: screen;',
    },
    {
      className: 'mix-blend-overlay',
      properties: 'mix-blend-mode: overlay;',
    },
    {
      className: 'mix-blend-darken',
      properties: 'mix-blend-mode: darken;',
    },
    {
      className: 'mix-blend-lighten',
      properties: 'mix-blend-mode: lighten;',
    },
    // Backface visibility utilities
    {
      className: 'backface-visible',
      properties: 'backface-visibility: visible;',
    },
    {
      className: 'backface-hidden',
      properties: 'backface-visibility: hidden;',
    },
    // Filter utilities
    {
      className: 'filter-none',
      properties: 'filter: none;',
    },
    {
      className: 'filter-blur-sm',
      properties: 'filter: blur(4px);',
    },
    {
      className: 'filter-blur',
      properties: 'filter: blur(8px);',
    },
    {
      className: 'filter-blur-lg',
      properties: 'filter: blur(12px);',
    },
    // Writing mode utilities
    {
      className: 'writing-mode-horizontal-tb',
      properties: 'writing-mode: horizontal-tb;',
    },
    {
      className: 'writing-mode-vertical-rl',
      properties: 'writing-mode: vertical-rl;',
    },
    {
      className: 'writing-mode-vertical-lr',
      properties: 'writing-mode: vertical-lr;',
    },
    // Aspect ratio utilities
    {
      className: 'aspect-ratio-1x1',
      properties: 'aspect-ratio: 1 / 1;',
    },
    {
      className: 'aspect-ratio-4x3',
      properties: 'aspect-ratio: 4 / 3;',
    },
    {
      className: 'aspect-ratio-16x9',
      properties: 'aspect-ratio: 16 / 9;',
    },
    {
      className: 'aspect-ratio-21x9',
      properties: 'aspect-ratio: 21 / 9;',
    },
  ];
  return (
    <div className="p-4">
      <Heading size="xxl">Miscellaneous Utilities</Heading>
      <br />
      <Paragraph appearance="default">
        A collection of utility classes that provide various styles and behaviors not covered by other categories.
      </Paragraph>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={data}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Examples section */}
      <Heading size="m" className="mt-8">
        Examples
      </Heading>
      <Paragraph appearance="default">Here are some examples of these utility classes in action:</Paragraph>

      {/* User Select example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          User Select
        </Heading>
        <div className="d-flex flex-wrap gap-4">
          <div className="p-4 bg-primary-lightest user-select-none w-25 mb-3 border border-primary-light rounded-20 shadow-s">
            <div className="color-primary-dark font-weight-bold mb-2">user-select-none</div>
            <div className="bg-white p-3 rounded-10 border border-primary">
              Try to <span className="font-weight-bold">select this text</span> - it cannot be selected
            </div>
          </div>
          <div className="p-4 bg-accent3-lightest user-select-all w-25 mb-3 border border-accent3-light rounded-20 shadow-s">
            <div className="color-accent3-dark font-weight-bold mb-2">user-select-all</div>
            <div className="bg-white p-3 rounded-10 border border-accent3">
              Click anywhere to <span className="font-weight-bold">select all of this text</span> at once
            </div>
          </div>
          <div className="p-4 bg-success-lightest user-select-text w-25 mb-3 border border-success-light rounded-20 shadow-s">
            <div className="color-success-dark font-weight-bold mb-2">user-select-text</div>
            <div className="bg-white p-3 rounded-10 border border-success">
              This has <span className="font-weight-bold">normal text selection</span> behavior (default)
            </div>
          </div>
        </div>
      </div>

      {/* Word Break example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Word Break
        </Heading>
        <div className="d-flex flex-wrap gap-4">
          <div className="w-25 mb-5">
            <div className="text-center mb-2 color-primary-dark font-weight-bold">word-break-normal</div>
            <div className="border border-primary-light rounded-20 p-3 bg-primary-lightest position-relative vh-25 shadow-s">
              <div className="position-absolute top-0 right-0 bg-primary color-white p-1 font-size-xs rounded-bottom-left-1">
                normal
              </div>
              <div className="word-break-normal overflow-x-hidden border border-dashed border-primary p-2 h-50 bg-white rounded-10">
                Normal: ThisIsALongWordThatWillOverflow
              </div>
              <div className="mt-2 font-size-sm color-primary-dark">
                Long words continue beyond edge without breaking (overflow hidden here)
              </div>
            </div>
          </div>

          <div className="w-25 mb-5">
            <div className="text-center mb-2 color-accent1-dark font-weight-bold">word-break-all</div>
            <div className="border border-accent1-light rounded-20 p-3 bg-accent1-lightest position-relative vh-25 shadow-s">
              <div className="position-absolute top-0 right-0 bg-accent1 color-white p-1 font-size-xs rounded-bottom-left-1">
                break-all
              </div>
              <div className="word-break-all border border-dashed border-accent1 p-2 h-50 bg-white rounded-10">
                Break-all: ThisIsALongWordThatWillBreakAtAnyCharacter
              </div>
              <div className="mt-2 font-size-sm color-accent1-dark">Breaks can occur between any two characters</div>
            </div>
          </div>

          <div className="w-25 mb-5">
            <div className="text-center mb-2 color-success-dark font-weight-bold">word-break-word</div>
            <div className="border border-success-light rounded-20 p-3 bg-success-lightest position-relative vh-25 shadow-s">
              <div className="position-absolute top-0 right-0 bg-success color-white p-1 font-size-xs rounded-bottom-left-1">
                break-word
              </div>
              <div className="word-break-word border border-dashed border-success p-2 h-50 bg-white rounded-10">
                Break-word: ThisIsALongWordThatWillBreakAtAppropriatePoints
              </div>
              <div className="mt-2 font-size-sm color-success-dark">Breaks at word boundaries when possible</div>
            </div>
          </div>

          <div className="w-25 mb-5">
            <div className="text-center mb-2 color-accent2-dark font-weight-bold">word-wrap-break</div>
            <div className="border border-accent2-light rounded-20 p-3 bg-accent2-lightest position-relative vh-25 shadow-s">
              <div className="position-absolute top-0 right-0 bg-accent2 color-white p-1 font-size-xs rounded-bottom-left-1">
                break-word
              </div>
              <div className="word-wrap-break border border-dashed border-accent2 p-2 h-50 bg-white rounded-10">
                Word-wrap: ThisIsALongWordThatBreaksBeforeOverflowing
              </div>
              <div className="mt-2 font-size-sm color-accent2-dark">Also known as overflow-wrap in modern CSS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Object fit example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Object Fit
        </Heading>
        <div className="d-flex flex-wrap gap-4">
          <div className="w-25 mb-3">
            <div className="text-center mb-2 color-primary-dark font-weight-bold">object-fit-cover</div>
            <div className="vh-25 border border-primary-light rounded-20 mb-2 overflow-hidden shadow-s bg-primary-lightest p-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Example"
                className="object-fit-cover w-100 h-100 rounded-10"
              />
            </div>
            <div className="text-center font-size-sm color-primary-dark">
              Covers entire area, maintaining aspect ratio
            </div>
          </div>
          <div className="w-25 mb-3">
            <div className="text-center mb-2 color-accent3-dark font-weight-bold">object-fit-contain</div>
            <div className="vh-25 border border-accent3-light rounded-20 mb-2 overflow-hidden shadow-s bg-accent3-lightest p-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Example"
                className="object-fit-contain w-100 h-100 rounded-10"
              />
            </div>
            <div className="text-center font-size-sm color-accent3-dark">Fits within the box without cropping</div>
          </div>
          <div className="w-25 mb-3">
            <div className="text-center mb-2 color-success-dark font-weight-bold">object-fit-fill</div>
            <div className="vh-25 border border-success-light rounded-20 mb-2 overflow-hidden shadow-s bg-success-lightest p-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Example"
                className="object-fit-fill w-100 h-100 rounded-10"
              />
            </div>
            <div className="text-center font-size-sm color-success-dark">Stretches to fill the entire area</div>
          </div>
        </div>
      </div>
      {/* Filter utilities example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Filter Effects
        </Heading>
        <div className="d-flex flex-wrap gap-4">
          <div className="w-25 text-center mb-3">
            <div className="mb-2 color-primary-dark font-weight-bold">filter-none</div>
            <div className="p-3 border border-primary-light rounded-20 bg-primary-lightest shadow-s">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="No filter"
                className="filter-none w-100 vh-15 rounded-10 border border-primary"
              />
            </div>
            <div className="mt-2 font-size-sm color-primary-dark">No filter applied (default)</div>
          </div>
          <div className="w-25 text-center mb-3">
            <div className="mb-2 color-accent3-dark font-weight-bold">filter-blur-sm</div>
            <div className="p-3 border border-accent3-light rounded-20 bg-accent3-lightest shadow-s">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Blur SM"
                className="filter-blur-sm w-100 vh-15 rounded-10 border border-accent3"
              />
            </div>
            <div className="mt-2 font-size-sm color-accent3-dark">Small blur effect (4px)</div>
          </div>
          <div className="w-25 text-center mb-3">
            <div className="mb-2 color-success-dark font-weight-bold">filter-blur</div>
            <div className="p-3 border border-success-light rounded-20 bg-success-lightest shadow-s">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Blur"
                className="filter-blur w-100 vh-15 rounded-10 border border-success"
              />
            </div>
            <div className="mt-2 font-size-sm color-success-dark">Medium blur effect (8px)</div>
          </div>
        </div>
      </div>

      {/* List style utilities example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          List Styles
        </Heading>
        <div className="d-flex flex-wrap gap-5">
          <div className="w-25 mb-3 p-4 border border-primary-light rounded-20 bg-primary-lightest shadow-s">
            <div className="color-primary-dark font-weight-bold mb-2">list-style-disc</div>
            <ul className="list-style-disc ml-4 bg-white p-3 rounded-10 border border-primary">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="w-25 mb-3 p-4 border border-accent3-light rounded-20 bg-accent3-lightest shadow-s">
            <div className="color-accent3-dark font-weight-bold mb-2">list-style-circle</div>
            <ul className="list-style-circle ml-4 bg-white p-3 rounded-10 border border-accent3">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="w-25 mb-3 p-4 border border-success-light rounded-20 bg-success-lightest shadow-s">
            <div className="color-success-dark font-weight-bold mb-2">list-style-none</div>
            <ul className="list-style-none p-3 bg-white rounded-10 border border-success">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Miscellaneous',
  component: miscellaneous,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
