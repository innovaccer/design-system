import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchItems } from '../../util/Search';
import { Input, Popover, Icon, Text, Subheading } from '@innovaccer/design-system';
import { Link } from "gatsby";
import "./search.css";
import { debounce } from '../../util/Helpers';

const getHighlightedText = (text, query) => {
  return text.replace(new RegExp(query, "gi"), (match) => `<b>${match}</b>`)
}

const CustomResultEntry = ({ data, query }) => {
  return (
    <div>
      <Link to={`/${data.slug}`} className="Search-result__link">
        <div className="Search-result__entry px-5 py-4">
          <div className="d-flex align-items-center overflow-hidden">
            <Text dangerouslySetInnerHTML={{ __html: getHighlightedText(data.frontmatter.title, query) }}></Text>
            {
              data.slug.includes('mobile') ?
                <Icon className="ml-4" appearance='subtle' size={16} name='phone_iphone' /> :
                <Icon className="ml-4" appearance='subtle' size={16} name='desktop_windows' />
            }
          </div>
          <div>
            <Text appearance='subtle' dangerouslySetInnerHTML={{ __html: getHighlightedText(data.frontmatter.description, query) }}></Text>
          </div>
        </div>
      </Link>
    </div>
  )
}

const ShowResults = ({ name, list, query }) => {
  return (
    <div>
      <Subheading className="pb-2 px-5" appearance="subtle">{name}</Subheading>
      {list.map((data, key) => <CustomResultEntry key={key} query={query} data={data.node} />)}
    </div>
  )
}

const PageHit = ({ searchList, query }) => {

  const components = [],
    patterns = [],
    foundations = [],
    content = [],
    resources = [],
    introduction = [];

  searchList.forEach((item) => {
    const slugPath = item.node.slug.split('/');
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
    <div className='w-100'>
      {components.length > 0 && <ShowResults query={query} name="Components" list={components} />}
      {patterns.length > 0 && <ShowResults query={query} name="Patterns" list={patterns} />}
      {foundations.length > 0 && <ShowResults query={query} name="Foundations" list={foundations} />}
      {content.length > 0 && <ShowResults query={query} name="Content" list={content} />}
      {resources.length > 0 && <ShowResults query={query} name="Resources" list={resources} />}
      {introduction.length > 0 && <ShowResults query={query} name="Introduction" list={introduction} />}
    </div>
  )
}

const NoQueryResult = () => {
  return (
    <div className="p-7 d-flex align-items-center overflow-hidden">
      <Icon className="mr-6" appearance='subtle' size={24} name='touch_app' />
      <Text weight="medium" appearance='subtle'>
        Tip: Press ’cmd + k’ to quickly start searching.
      </Text>
    </div>
  )
}

const NoResultFound = ({ query }) => {
  return (
    <div className="p-7 d-flex align-items-center overflow-hidden">
      <Icon className="mr-6" appearance='subtle' size={24} name='search_off' />
      <Text weight="medium">
        {`No results found for '${query}'`}
      </Text>
    </div>
  )
}

const ShowQueryResult = ({ query, searchResult }) => {
  return (
    <div className="pt-6 pb-4 d-flex align-items-center overflow-hidden">
      <PageHit query={query} searchList={searchResult} />
    </div>
  )
}

const Content = ({ query, searchResult }) => {
  return (
    <>
      {query === '' && <NoQueryResult />}
      {query && searchResult.length === 0 && <NoResultFound query={query} />}
      {
        query && searchResult.length != 0 &&
        <ShowQueryResult query={query} searchResult={searchResult} />
      }
    </>
  )
}

const Search = ({ parentRef }) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [openPopover, setOpenPopover] = useState(false);
  const searchList = useSearchItems();
  const searchRef = useRef();

  useEffect(() => {
    const element = document.getElementById('___gatsby');
    element.addEventListener('keydown', handleInstantSearch);

    return () => {
      element.removeEventListener('keydown', handleInstantSearch);
    }
  }, []);

  const handleInstantSearch = (e) => {
    const inputField = searchRef.current;
    if ((e.ctrltKey || e.metaKey) && (e.key === 'K' || e.key === 'k')) {
      e.preventDefault();
      inputField.click();
    }
  }

  const handleSearchQuery = debounce((target) => {
    const query = target.value;
    setOpenPopover(true);
    const list = searchList.filter((data) => {
      const { title, description } = data.node.frontmatter;
      return title.toLowerCase().includes(query?.toLowerCase()) || description.toLowerCase().includes(query?.toLowerCase());
    });
    setSearchResult(list);
  });

  const onClear = useCallback(() => {
    setQuery('');
  }, []);

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <Popover
        position="bottom-start"
        open={openPopover}
        appendToBody={false}
        boundaryElement={parentRef}
        className="pt-2 mr-4 mt-3 overflow-auto Search-result"
        trigger={
          <Input
            ref={searchRef}
            icon="search"
            name="input"
            autoComplete="off"
            value={query}
            placeholder="Search components, patterns.."
            onClear={(e) => onClear(e)}
            onBlur={() => setOpenPopover(false)}
            onChange={({ target }) => {
              setQuery(target.value);
              handleSearchQuery(target)
            }}
          />
        }
      >
        <Content query={query} searchResult={searchResult} />
      </Popover>
    </div>
  );
};

export default Search;
