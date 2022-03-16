import { Link } from "gatsby";
import React from "react";
import {
  Highlight,
  Index,
  connectHits,
} from "react-instantsearch-dom";
import { Popover, Subheading, Text, Icon, Badge } from '@innovaccer/design-system';
import './search.css';
import { removeDuplicate, getHeadingUrl } from "./helpers";

let SearchQuery;

const CustomResultEntry = ({ data }) => {
  const selectedHeadings = data.headings.filter((item) => item.toLowerCase().includes(SearchQuery.toLowerCase()))
  const headingList = selectedHeadings.map((heading) => {
    return { name: heading, link: getHeadingUrl(data.slug, heading) }
  });

  return (
    <div className="pb-3">
      <Link to={`/${data.slug}`} className="search-result-link">
        <div className="search-result-entry px-5 py-4">
          <div className="d-flex align-items-center overflow-hidden">
            <Text>
              <Highlight attribute="title" hit={data} tagName="b" />
            </Text>
            {
              data.slug.includes('mobile') ?
                <Icon className="ml-4" appearance='subtle' size={16} name='phone_iphone' /> :
                <Icon className="ml-4" appearance='subtle' size={16} name='desktop_windows' />
            }
            {
              data.tabs?.length > 0 && data.slug.substring(data.slug.lastIndexOf('/') + 1, data.slug.length).length > 0 &&
              <Badge className="ml-4" appearance="primary" subtle={true}>
                {data.slug.substring(data.slug.lastIndexOf('/') + 1, data.slug.length)}
              </Badge>
            }
          </div>
          <div>
            <Text appearance='subtle'>
              <Highlight attribute="description" hit={data} tagName="b" />
            </Text>
          </div>
        </div>
      </Link>
      {headingList && headingList.map((item) => {
        return (
          <div className="px-4">
            <Link
              to={`/${item.link}`}
              className="search-result-link">
              <div className="p-4 search-result-entry d-flex align-items-center">
                <Icon className="mx-4" appearance='subtle' size={16} name='tag' />
                <Text appearance='subtle'>{item.name}</Text>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

const ShowResults = ({ name, list }) => {
  return (
    <div>
      <Subheading className="pb-4 px-5" appearance="subtle">{name}</Subheading>
      {list.map((data) => <CustomResultEntry data={data} />)}
    </div>
  )
}

const PageHit = ({ hits }) => {
  console.log('hits', hits);
  if (hits.length == 0) {
    return (
      <div className="px-7 py-6 d-flex align-items-center overflow-hidden">
        <Icon className="mr-6" appearance='subtle' size={24} name='search_off' />
        <Text weight="medium">
          {`No results found for ${SearchQuery}`}
        </Text>
      </div>
    )
  }
  const components = [],
    patterns = [],
    foundations = [],
    content = [],
    resources = [],
    introduction = [],
    mobile = [],
    web = [];

  hits.forEach((item) => {
    item.slug.includes('mobile') && mobile.push(item);
    !item.slug.includes('mobile') && web.push(item);
  });

  // const updatedWebList = removeDuplicate(web);
  // const updatedMobileList = removeDuplicate(mobile);

  hits.forEach((item) => {
    const slugPath = item.slug.split('/');
    let category = '';
    if (slugPath[0] === 'mobile') {
      category = slugPath[1];
    } else {
      category = slugPath[0];
    }

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
  })

  return (
    <div>
      {components.length > 0 && <ShowResults name="Components" list={components} />}
      {patterns.length > 0 && <ShowResults name="Patterns" list={patterns} />}
      {foundations.length > 0 && <ShowResults name="Foundations" list={foundations} />}
      {content.length > 0 && <ShowResults name="Content" list={content} />}
      {resources.length > 0 && <ShowResults name="Resources" list={resources} />}
      {introduction.length > 0 && <ShowResults name="Introduction" list={introduction} />}
    </div>
  )
}
const CustomHits = connectHits(PageHit);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <CustomHits />
  </Index>
)

const SearchResult = ({ indices, show, query, parentRef }) => {
  SearchQuery = query;
  return (
    <Popover
      position="bottom-start"
      open={show}
      className="py-4 overflow-auto search-result"
      boundaryElement={parentRef}
    >
      {indices.map(index => (
        <HitsInIndex index={index} key={index.name} />
      ))}
    </Popover>
  )
}

export default SearchResult;
