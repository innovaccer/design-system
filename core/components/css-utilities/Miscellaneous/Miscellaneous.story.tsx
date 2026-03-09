import * as React from 'react';
import { Card, Table, Heading, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const miscellaneous = () => {
  const generalData = [
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
  ];

  const visibilityData = [
    {
      className: 'visibility-show',
      properties: 'visibility: visible !important;',
    },
    {
      className: 'visibility-hidden',
      properties: 'visibility: hidden !important;',
    },
  ];

  const userSelectData = [
    {
      className: 'user-select-none',
      properties: 'user-select: none !important;',
    },
    {
      className: 'user-select-all',
      properties: 'user-select: all !important;',
    },
    {
      className: 'user-select-auto',
      properties: 'user-select: auto !important;',
    },
    {
      className: 'user-select-text',
      properties: 'user-select: text !important;',
    },
  ];

  const wordBreakData = [
    {
      className: 'word-break-normal',
      properties: 'word-break: normal !important;',
    },
    {
      className: 'word-break-all',
      properties: 'word-break: break-all !important;',
    },
    {
      className: 'word-break-word',
      properties: 'word-break: break-word !important;',
    },
    {
      className: 'word-wrap-break',
      properties: 'word-wrap: break-word !important;',
    },
  ];

  const listStyleData = [
    {
      className: 'list-style-none',
      properties: 'list-style: none !important;',
    },
    {
      className: 'list-style-disc',
      properties: 'list-style: disc !important;',
    },
    {
      className: 'list-style-circle',
      properties: 'list-style: circle !important;',
    },
    {
      className: 'list-style-square',
      properties: 'list-style: square !important;',
    },
    {
      className: 'list-style-decimal',
      properties: 'list-style: decimal !important;',
    },
    {
      className: 'list-style-decimal-leading-zero',
      properties: 'list-style: decimal-leading-zero !important;',
    },
    {
      className: 'list-style-lower-alpha',
      properties: 'list-style: lower-alpha !important;',
    },
    {
      className: 'list-style-upper-alpha',
      properties: 'list-style: upper-alpha !important;',
    },
    {
      className: 'list-style-lower-roman',
      properties: 'list-style: lower-roman !important;',
    },
    {
      className: 'list-style-upper-roman',
      properties: 'list-style: upper-roman !important;',
    },
    {
      className: 'list-style-auto',
      properties: 'list-style: auto !important;',
    },
  ];

  const pointerEventsData = [
    {
      className: 'pointer-events-none',
      properties: 'pointer-events: none !important;',
    },
    {
      className: 'pointer-events-auto',
      properties: 'pointer-events: auto !important;',
    },
  ];

  const objectFitData = [
    {
      className: 'object-fit-contain',
      properties: 'object-fit: contain !important;',
    },
    {
      className: 'object-fit-cover',
      properties: 'object-fit: cover !important;',
    },
    {
      className: 'object-fit-fill',
      properties: 'object-fit: fill !important;',
    },
    {
      className: 'object-fit-scale-down',
      properties: 'object-fit: scale-down !important;',
    },
    {
      className: 'object-fit-none',
      properties: 'object-fit: none !important;',
    },
  ];

  const resizeData = [
    {
      className: 'resize-none',
      properties: 'resize: none !important;',
    },
    {
      className: 'resize-both',
      properties: 'resize: both !important;',
    },
    {
      className: 'resize-horizontal',
      properties: 'resize: horizontal !important;',
    },
    {
      className: 'resize-vertical',
      properties: 'resize: vertical !important;',
    },
  ];

  const boxDecorationData = [
    {
      className: 'box-decoration-clone',
      properties: 'box-decoration-break: clone !important;',
    },
    {
      className: 'box-decoration-slice',
      properties: 'box-decoration-break: slice !important;',
    },
  ];

  const mixBlendModeData = [
    {
      className: 'mix-blend-normal',
      properties: 'mix-blend-mode: normal !important;',
    },
    {
      className: 'mix-blend-multiply',
      properties: 'mix-blend-mode: multiply !important;',
    },
    {
      className: 'mix-blend-screen',
      properties: 'mix-blend-mode: screen !important;',
    },
    {
      className: 'mix-blend-overlay',
      properties: 'mix-blend-mode: overlay !important;',
    },
    {
      className: 'mix-blend-darken',
      properties: 'mix-blend-mode: darken !important;',
    },
    {
      className: 'mix-blend-lighten',
      properties: 'mix-blend-mode: lighten !important;',
    },
  ];

  const backfaceVisibilityData = [
    {
      className: 'backface-visible',
      properties: 'backface-visibility: visible !important;',
    },
    {
      className: 'backface-hidden',
      properties: 'backface-visibility: hidden !important;',
    },
  ];

  const filterData = [
    {
      className: 'filter-none',
      properties: 'filter: none !important;',
    },
    {
      className: 'filter-blur-sm',
      properties: 'filter: blur(4px) !important;',
    },
    {
      className: 'filter-blur',
      properties: 'filter: blur(8px) !important;',
    },
    {
      className: 'filter-blur-lg',
      properties: 'filter: blur(12px) !important;',
    },
  ];

  const writingModeData = [
    {
      className: 'writing-mode-horizontal-tb',
      properties: 'writing-mode: horizontal-tb !important;',
    },
    {
      className: 'writing-mode-vertical-rl',
      properties: 'writing-mode: vertical-rl !important;',
    },
    {
      className: 'writing-mode-vertical-lr',
      properties: 'writing-mode: vertical-lr !important;',
    },
  ];

  const aspectRatioData = [
    {
      className: 'aspect-ratio-1x1',
      properties: 'aspect-ratio: 1 / 1 !important;',
    },
    {
      className: 'aspect-ratio-4x3',
      properties: 'aspect-ratio: 4 / 3 !important;',
    },
    {
      className: 'aspect-ratio-16x9',
      properties: 'aspect-ratio: 16 / 9 !important;',
    },
    {
      className: 'aspect-ratio-21x9',
      properties: 'aspect-ratio: 21 / 9 !important;',
    },
  ];
  return (
    <div className="p-4">
      <Heading size="xxl">Miscellaneous Utilities</Heading>
      <br />
      <Text weight="strong">
        A collection of utility classes that provide various styles and behaviors not covered by other categories.
      </Text>

      {/* General Utilities */}
      <Heading size="m" className="mt-8">
        General Utilities
      </Heading>
      <Text className="mb-4">Common utility classes for scrolling, text overflow, and cursor behavior.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={generalData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Visibility Utilities */}
      <Heading size="m" className="mt-8">
        Visibility
      </Heading>
      <Text className="mb-4">Control the visibility of elements without affecting layout.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={visibilityData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* User Select Utilities */}
      <Heading size="m" className="mt-8">
        User Select
      </Heading>
      <Text className="mb-4">Control how text can be selected by users.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={userSelectData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Word Break Utilities */}
      <Heading size="m" className="mt-8">
        Word Break
      </Heading>
      <Text className="mb-4">Control how words break when text overflows its container.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={wordBreakData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* List Style Utilities */}
      <Heading size="m" className="mt-8">
        List Style
      </Heading>
      <Text className="mb-4">Control the appearance of list item markers.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={listStyleData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Pointer Events Utilities */}
      <Heading size="m" className="mt-8">
        Pointer Events
      </Heading>
      <Text className="mb-4">Control how elements respond to pointer events.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={pointerEventsData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Object Fit Utilities */}
      <Heading size="m" className="mt-8">
        Object Fit
      </Heading>
      <Text className="mb-4">Control how replaced elements (like images) are sized within their containers.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={objectFitData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Resize Utilities */}
      <Heading size="m" className="mt-8">
        Resize
      </Heading>
      <Text className="mb-4">Control whether elements can be resized by users.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={resizeData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Box Decoration Utilities */}
      <Heading size="m" className="mt-8">
        Box Decoration
      </Heading>
      <Text className="mb-4">Control how box decorations are broken across lines.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={boxDecorationData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Mix Blend Mode Utilities */}
      <Heading size="m" className="mt-8">
        Mix Blend Mode
      </Heading>
      <Text className="mb-4">Control how elements blend with their background.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={mixBlendModeData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Backface Visibility Utilities */}
      <Heading size="m" className="mt-8">
        Backface Visibility
      </Heading>
      <Text className="mb-4">Control whether the back face of transformed elements is visible.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={backfaceVisibilityData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Filter Utilities */}
      <Heading size="m" className="mt-8">
        Filter
      </Heading>
      <Text className="mb-4">Apply visual effects like blur to elements.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={filterData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Writing Mode Utilities */}
      <Heading size="m" className="mt-8">
        Writing Mode
      </Heading>
      <Text className="mb-4">Control the text layout direction and orientation.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={writingModeData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Aspect Ratio Utilities */}
      <Heading size="m" className="mt-8">
        Aspect Ratio
      </Heading>
      <Text className="mb-4">Maintain consistent aspect ratios for responsive elements.</Text>
      <div className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={aspectRatioData}
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
      <Text appearance="default">Here are some examples of these utility classes in action:</Text>

      {/* User Select example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          User Select
        </Heading>
        <div className="d-flex flex-wrap gap-20">
          <div className="w-25 mb-3 user-select-none">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-primary-dark mb-2">
                user-select-none
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-primary">
                Try to{' '}
                <Text weight="strong" appearance="default" className="d-inline">
                  select this text
                </Text>{' '}
                - it cannot be selected
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3 user-select-all">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-accent3-dark mb-2">
                user-select-all
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-accent-3">
                Click anywhere to{' '}
                <Text weight="strong" appearance="default" className="d-inline">
                  select all of this text
                </Text>{' '}
                at once
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3 user-select-text">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-success-dark mb-2">
                user-select-text
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-success">
                This has{' '}
                <Text weight="strong" appearance="default" className="d-inline">
                  normal text selection
                </Text>{' '}
                behavior (default)
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Word Break example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Word Break
        </Heading>
        <div className="d-flex flex-wrap gap-20">
          <div className="w-25 mb-5">
            <Text weight="strong" className="mb-2 color-primary-dark">
              word-break-normal
            </Text>
            <Card className="p-3 bg-secondary-lightest position-relative vh-25">
              <div className="position-absolute bottom-0 right-0 bg-primary color-white p-1 px-2 rounded-bottom-left-1 z-index-1">
                normal
              </div>
              <div className="word-break-normal overflow-x-hidden border border-dashed border-primary p-2 pt-3 h-50 bg-white rounded-10">
                Normal: ThisIsALongWordThatWillOverflow
              </div>
              <Text appearance="subtle" size="small" className="mt-2 color-primary-dark">
                Long words continue beyond edge without breaking (overflow hidden here)
              </Text>
            </Card>
          </div>

          <div className="w-25 mb-5">
            <Text weight="strong" className="mb-2 color-accent1-dark">
              word-break-all
            </Text>
            <Card className="p-3 bg-secondary-lightest position-relative vh-25">
              <div className="position-absolute bottom-0 right-0 bg-warning color-white p-1 px-2 rounded-bottom-left-1 z-index-1">
                break-all
              </div>
              <div className="word-break-all border border-dashed border-accent-1 p-2 pt-3 h-50 bg-white rounded-10">
                Break-all: ThisIsALongWordThatWillBreakAtAnyCharacter
              </div>
              <Text appearance="subtle" size="small" className="mt-2 color-accent1-dark">
                Breaks can occur between any two characters
              </Text>
            </Card>
          </div>

          <div className="w-25 mb-5">
            <Text weight="strong" className="mb-2 color-success-dark">
              word-break-word
            </Text>
            <Card className="p-3 bg-secondary-lightest position-relative vh-25">
              <div className="position-absolute bottom-0 right-0 bg-success color-white p-1 px-2 rounded-bottom-left-1 z-index-1">
                break-word
              </div>
              <div className="word-break-word border border-dashed border-success p-2 pt-3 h-50 bg-white rounded-10">
                Break-word: ThisIsALongWordThatWillBreakAtAppropriatePoints
              </div>
              <Text appearance="subtle" size="small" className="mt-2 color-success-dark">
                Breaks at word boundaries when possible
              </Text>
            </Card>
          </div>

          <div className="w-25 mb-5">
            <Text weight="strong" className="mb-2 color-accent2-dark">
              word-wrap-break
            </Text>
            <Card className="p-3 bg-secondary-lightest position-relative vh-25">
              <div className="position-absolute bottom-0 right-0 bg-danger color-white p-1 px-2 rounded-bottom-left-1 z-index-1">
                break-word
              </div>
              <div className="word-wrap-break border border-dashed border-accent-2 p-2 pt-3 h-50 bg-white rounded-10">
                Word-wrap: ThisIsALongWordThatBreaksBeforeOverflowing
              </div>
              <Text appearance="subtle" size="small" className="mt-2 color-accent2-dark">
                Also known as overflow-wrap in modern CSS
              </Text>
            </Card>
          </div>
        </div>
      </div>

      {/* Object fit example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Object Fit
        </Heading>
        <div className="d-flex flex-wrap gap-20">
          <div className="w-25 mb-3">
            <Text weight="strong" className="mb-2 color-primary-dark">
              object-fit-cover
            </Text>
            <Card className="vh-25 overflow-hidden bg-secondary-lightest p-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Example"
                className="object-fit-cover w-100 h-100 rounded-10 border border-primary"
              />
            </Card>
            <Text appearance="subtle" size="small" className="mt-2 color-primary-dark">
              Covers entire area, maintaining aspect ratio
            </Text>
          </div>
          <div className="w-25 mb-3">
            <Text weight="strong" className="mb-2 color-accent3-dark">
              object-fit-contain
            </Text>
            <Card className="vh-25 overflow-hidden bg-secondary-lightest p-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Example"
                className="object-fit-contain w-100 h-100 rounded-10 border border-accent-3"
              />
            </Card>
            <Text appearance="subtle" size="small" className="mt-2 color-accent3-dark">
              Fits within the box without cropping
            </Text>
          </div>
          <div className="w-25 mb-3">
            <Text weight="strong" className="mb-2 color-success-dark">
              object-fit-fill
            </Text>
            <Card className="vh-25 overflow-hidden bg-secondary-lightest p-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Example"
                className="object-fit-fill w-100 h-100 rounded-10 border border-success"
              />
            </Card>
            <Text appearance="subtle" size="small" className="mt-2 color-success-dark">
              Stretches to fill the entire area
            </Text>
          </div>
        </div>
      </div>
      {/* Filter utilities example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Filter Effects
        </Heading>
        <div className="d-flex flex-wrap gap-20">
          <div className="w-25 mb-3">
            <Text weight="strong" className="mb-2 color-primary-dark">
              filter-none
            </Text>
            <Card className="p-3 bg-secondary-lightest">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="No filter"
                className="filter-none w-100 vh-15 rounded-10 border border-primary"
              />
            </Card>
            <Text appearance="subtle" size="small" className="mt-2 color-primary-dark">
              No filter applied (default)
            </Text>
          </div>
          <div className="w-25 mb-3">
            <Text weight="strong" className="mb-2 color-accent3-dark">
              filter-blur-sm
            </Text>
            <Card className="p-3 bg-secondary-lightest">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Blur SM"
                className="filter-blur-sm w-100 vh-15 rounded-10 border border-accent-3"
              />
            </Card>
            <Text appearance="subtle" size="small" className="mt-2 color-accent3-dark">
              Small blur effect (4px)
            </Text>
          </div>
          <div className="w-25 mb-3">
            <Text weight="strong" className="mb-2 color-success-dark">
              filter-blur
            </Text>
            <Card className="p-3 bg-secondary-lightest">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGRkZGRkIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1NTU1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkV4YW1wbGUgSW1hZ2U8L3RleHQ+CiA8L2c+Cjwvc3ZnPg=="
                alt="Blur"
                className="filter-blur w-100 vh-15 rounded-10 border border-success"
              />
            </Card>
            <Text appearance="subtle" size="small" className="mt-2 color-success-dark">
              Medium blur effect (8px)
            </Text>
          </div>
        </div>
      </div>

      {/* List style utilities example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          List Styles
        </Heading>
        <div className="d-flex flex-wrap gap-20">
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-primary-dark mb-2">
                list-style-disc
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-primary">
                <ul className="list-style-disc ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-accent3-dark mb-2">
                list-style-circle
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-accent-3">
                <ul className="list-style-circle ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-success-dark mb-2">
                list-style-none
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-success">
                <ul className="list-style-none">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-warning-dark mb-2">
                list-style-square
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-warning">
                <ul className="list-style-square ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-danger-dark mb-2">
                list-style-decimal
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-danger">
                <ol className="list-style-decimal ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ol>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-accent1-dark mb-2">
                list-style-decimal-leading-zero
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-accent-1">
                <ol className="list-style-decimal-leading-zero ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ol>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-accent2-dark mb-2">
                list-style-lower-alpha
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-accent-2">
                <ol className="list-style-lower-alpha ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ol>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-primary-dark mb-2">
                list-style-upper-alpha
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-primary">
                <ol className="list-style-upper-alpha ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ol>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-accent3-dark mb-2">
                list-style-lower-roman
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-accent-3">
                <ol className="list-style-lower-roman ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ol>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-success-dark mb-2">
                list-style-upper-roman
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-success">
                <ol className="list-style-upper-roman ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ol>
              </div>
            </Card>
          </div>
          <div className="w-25 mb-3">
            <Card className="p-4 bg-secondary-lightest">
              <Heading appearance="subtle" size="s" className="color-warning-dark mb-2">
                list-style-auto
              </Heading>
              <div className="bg-white p-3 rounded-10 border border-warning">
                <ol className="list-style-auto ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ol>
              </div>
            </Card>
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
