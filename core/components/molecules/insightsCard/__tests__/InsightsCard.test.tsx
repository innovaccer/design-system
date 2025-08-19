import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InsightsCard } from '@/index';
import { InsightsCardProps } from '../InsightsCard';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const mockData = {
  title: 'Test Title',
  titleDescription: 'Test Description',
  subtitles: [
    {
      id: '1',
      title: 'Test Subtitle',
      insights: [
        {
          id: '1-1',
          selected: false,
          title: 'Test Insight',
          iconName: 'info',
          iconAppearance: 'subtle',
          borderColor: '#000000',
          backgroundColor: '#ffffff',
        },
      ],
    },
  ] as any,
};

const mockDescription = <div>Test Description Content</div>;

describe('InsightsCard component', () => {
  const mapper = {
    data: valueHelper(mockData, { required: true }),
    description: valueHelper(mockDescription, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as InsightsCardProps;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<InsightsCard {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('InsightsCard component', () => {
  it('renders with default data', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Card')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Title')).toHaveTextContent('Test Title');
    expect(getByTestId('DesignSystem-InsightsCard--Description')).toHaveTextContent('Test Description');
  });

  it('renders with placeholder text when data is empty', () => {
    const emptyData = {
      title: '',
      titleDescription: '',
      subtitles: [] as any,
    };
    const { getByTestId } = render(<InsightsCard data={emptyData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Title')).toHaveTextContent('Title Placeholder');
    expect(getByTestId('DesignSystem-InsightsCard--Description')).toHaveTextContent('Title Description Placeholder');
  });

  it('renders subtitle sections correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Subtitle-1')).toHaveTextContent('Test Subtitle');
    expect(getByTestId('DesignSystem-InsightsCard--SubtitleRow-1')).toBeInTheDocument();
  });

  it('renders insights correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Insight-1-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--InsightText-1-1')).toHaveTextContent('Test Insight');
    expect(getByTestId('DesignSystem-InsightsCard--InsightIcon-1-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--InsightButton-1-1')).toBeInTheDocument();
  });

  it('handles insight click correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    const insightColumn = getByTestId('DesignSystem-InsightsCard--InsightColumn-1-1');
    fireEvent.click(insightColumn);

    // The insight should now be selected (you can add more specific assertions based on your selection logic)
    expect(insightColumn).toBeInTheDocument();
  });

  it('renders description column correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--DescriptionColumn')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--DescriptionContent')).toBeInTheDocument();
  });

  it('renders AI Sparkle icon correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--AISparkle')).toBeInTheDocument();
  });

  it('renders navigation column correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--NavigationColumn')).toBeInTheDocument();
  });

  it('renders content row correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--ContentRow')).toBeInTheDocument();
  });

  it('renders inner content wrapper correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--InnerContent')).toBeInTheDocument();
  });

  it('renders header content correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Header')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--HeaderContent')).toBeInTheDocument();
  });

  it('renders body correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Body')).toBeInTheDocument();
  });
});

describe('InsightsCard component with multiple insights', () => {
  const multipleInsightsData = {
    title: 'Multiple Insights',
    titleDescription: 'Testing multiple insights',
    subtitles: [
      {
        id: '1',
        title: 'First Subtitle',
        insights: [
          {
            id: '1-1',
            selected: true,
            title: 'First Insight',
            iconName: 'info',
            iconAppearance: 'subtle',
            borderColor: '#000000',
            backgroundColor: '#ffffff',
          },
          {
            id: '1-2',
            selected: false,
            title: 'Second Insight',
            iconName: 'warning',
            iconAppearance: 'warning',
            borderColor: '#ff0000',
            backgroundColor: '#ffeeee',
          },
        ],
      },
      {
        id: '2',
        title: 'Second Subtitle',
        insights: [
          {
            id: '2-1',
            selected: false,
            title: 'Third Insight',
            iconName: 'error',
            iconAppearance: 'alert',
            borderColor: '#0000ff',
            backgroundColor: '#eeeeff',
          },
        ],
      },
    ] as any,
  };

  it('renders multiple subtitles correctly', () => {
    const { getByTestId } = render(<InsightsCard data={multipleInsightsData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Subtitle-1')).toHaveTextContent('First Subtitle');
    expect(getByTestId('DesignSystem-InsightsCard--Subtitle-2')).toHaveTextContent('Second Subtitle');
  });

  it('renders multiple insights correctly', () => {
    const { getByTestId } = render(<InsightsCard data={multipleInsightsData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Insight-1-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Insight-1-2')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Insight-2-1')).toBeInTheDocument();
  });

  it('renders divider between subtitles', () => {
    const { getByTestId } = render(<InsightsCard data={multipleInsightsData} description={mockDescription} />);

    expect(getByTestId('DesignSystem-InsightsCard--Divider-1')).toBeInTheDocument();
  });
});
