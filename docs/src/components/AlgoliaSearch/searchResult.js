import { Link } from 'gatsby';
import React from 'react';
import { Highlight, Index, connectHits } from 'react-instantsearch-dom';
import { Popover, Subheading, Text, Icon, Badge, Tabs, Tab, EmptyState, Column } from '@innovaccer/design-system';
import './search.css';
import { getHeadingUrl } from './helpers';
import noResultImage from '../../data/components/images/noresult.png';
import classNames from 'classnames';

let SearchQuery;
const getHighlightedText = (text, query) => {
  return text.replace(new RegExp(query, 'gi'), (match) => `<b>${match}</b>`);
};

const CustomResultEntry = ({ data }) => {
  const selectedHeadings = data.headings.filter((item) => item.toLowerCase().includes(SearchQuery.toLowerCase()));
  const headingList = selectedHeadings.map((heading) => {
    return { name: heading, link: getHeadingUrl(data.slug, heading) };
  });
  const getBadgeName = (slug) => {
    if (slug.includes('mobile')) {
      return 'Mobile';
    }
    return 'Web';
  };

  return (
    <div className="pb-3">
      <Link to={`/${data.slug}`} className="search-result-link">
        <div className="search-result-entry px-6 py-5">
          <div className="Row align-items-center overflow-hidden">
            <div className="Col--11 pr-6">
              <Text>
                <Highlight attribute="title" hit={data} tagName="b" />
              </Text>
              <div className="ellipsis--noWrap mt-2">
                <Text appearance="subtle" size="small">
                  <Highlight attribute="description" hit={data} tagName="b" />
                </Text>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Badge className="web-mobile-badge position-absolute mr-6">{getBadgeName(data.slug)}</Badge>
            </div>
          </div>
        </div>
      </Link>
      {headingList &&
        headingList.map((item, id) => {
          return (
            <div>
              {id < 3 && (
                <div>
                  <Link to={`/${item.link}`} className="search-result-link">
                    <div className="py-5 pl-6 search-result-entry d-flex align-items-center">
                      <Icon className="mr-5" appearance="subtle" size={16} name="subdirectory_arrow_right" />
                      <Text dangerouslySetInnerHTML={{ __html: getHighlightedText(item.name, SearchQuery) }} />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

const ShowResults = ({ list }) => {
  let PageName = '';
  const isSamePage = (data) => {
    if (pageName(data) !== PageName) {
      PageName = pageName(data);
      return true;
    }
    return false;
  };
  return (
    <div>
      {list.map(
        (data) =>
          data.slug && (
            <div>
              {isSamePage(data) && (
                <Subheading className="mt-5 mb-3 px-6 search-category" appearance="subtle">
                  {pageName(data)}
                </Subheading>
              )}
              <CustomResultEntry data={data} />
            </div>
          )
      )}
    </div>
  );
};

const pageName = (data) => {
  const slugPath = data.slug.split('/');
  let category = '';
  if (slugPath[0] === 'mobile') {
    category = slugPath[1];
  } else {
    category = slugPath[0];
  }
  return category;
};

const ErrorTemplate = ({ size }) => {
  const EmptyStateClass = classNames({
    errorTemplate: true,
    [`errorTemplate--${size}`]: size,
  });
  return (
    <EmptyState
      size="small"
      description="Sorry! We could not find any match. Please try again"
      imageSrc={noResultImage}
      title={`No results found for '${SearchQuery}'`}
      className={EmptyStateClass}
    />
  );
};

const PageHit = ({ hits }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  if (hits.length == 0) {
    return <ErrorTemplate size="regular" />;
  }
  const components = [],
    patterns = [],
    foundations = [],
    content = [],
    resources = [],
    introduction = [],
    allContent = [],
    pagePriority = [];

  const matchSearchQuery = (item) => {
    return item.toLowerCase().includes(SearchQuery.toLowerCase());
  };

  hits.forEach((item) => {
    let PageName = '';
    if (item.slug) {
      PageName = pageName(item);
    }

    if (item.slug && !pagePriority.includes(PageName)) {
      if (matchSearchQuery(item.title)) {
        pagePriority.push(PageName);
      } else if (item.headings.findIndex((heading) => matchSearchQuery(heading)) > 0) {
        pagePriority.push(PageName);
      } else if (matchSearchQuery(item.description)) {
        pagePriority.push(PageName);
      } else if (item.keywords && item.keywords.findIndex((keyword) => matchSearchQuery(keyword)) > 0) {
        pagePriority.push(PageName);
      } else if (item.parentTab && matchSearchQuery(item.parentTab)) {
        pagePriority.push(PageName);
      }
    }
  });

  const onTabChangeHandler = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  hits.forEach((item) => {
    if (item.slug) {
      const category = pageName(item);

      switch (category) {
        case 'components':
          components.push(item);
          break;

        case 'patterns':
          patterns.push(item);
          break;

        case 'foundations':
          foundations.push(item);
          break;

        case 'content':
          content.push(item);
          break;

        case 'resources':
          resources.push(item);
          break;

        case 'introduction':
          introduction.push(item);
          break;

        default:
          break;
      }
    }
  });

  if (pagePriority.length) {
    pagePriority.forEach((item) => {
      switch (item) {
        case 'components':
          allContent.push(...components);
          break;

        case 'patterns':
          allContent.push(...patterns);
          break;

        case 'foundations':
          allContent.push(...foundations);
          break;

        case 'content':
          allContent.push(...content);
          break;

        case 'resources':
          allContent.push(...resources);
          break;

        case 'introduction':
          allContent.push(...introduction);
          break;

        default:
          break;
      }
    });
  } else {
    allContent.push(...hits);
  }

  const tabData = [[...allContent], [...components], [...patterns], [...foundations], [...content]];

  const tabResults = () => {
    const data = tabData[selectedTab];
    if (data.length > 0) {
      return <ShowResults list={data} />;
    } else {
      return <ErrorTemplate size="tiny" />;
    }
  };

  return (
    <div>
      <div className="position-sticky page-header bg-light TabBorder">
        <Tabs activeIndex={selectedTab} onTabChange={onTabChangeHandler} className="pl-4 border-bottom-0">
          <Tab label="All" icon="search" />
          <Tab label="Components" icon="widgets" />
          <Tab label="Patterns" icon="pattern" />
          <Tab label="Foundations" icon="apartment" />
          <Tab label="Content" icon="notes" />
        </Tabs>
      </div>
      {tabResults()}
    </div>
  );
};
const CustomHits = connectHits(PageHit);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <CustomHits />
  </Index>
);

const SearchResult = ({ indices, show, query, parentRef }) => {
  SearchQuery = query;

  return (
    <Popover
      position="bottom-start"
      open={show}
      className="overflow-auto search-result position-fixed Col Col--5"
      boundaryElement={parentRef}
    >
      {indices.map((index) => (
        <HitsInIndex index={index} key={index.name} />
      ))}
    </Popover>
  );
};

export default SearchResult;
