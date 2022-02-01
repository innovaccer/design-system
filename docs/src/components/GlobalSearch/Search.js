import React, { useState, useEffect } from 'react';
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
    <div className="">
      <Link to={`/${data.slug}`} className="search-result-link">
        <div className="search-result-entry px-5 py-4">
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
      <Subheading className="pb-2 px-5 search-category" appearance="subtle">{name}</Subheading>
      {list.map((data) => <CustomResultEntry query={query} data={data} />)}
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
      {components.length > 0 && <ShowResults query={query} name="Components" list={components} />}
      {patterns.length > 0 && <ShowResults query={query} name="Patterns" list={patterns} />}
      {foundations.length > 0 && <ShowResults query={query} name="Foundations" list={foundations} />}
      {content.length > 0 && <ShowResults query={query} name="Content" list={content} />}
      {resources.length > 0 && <ShowResults query={query} name="Resources" list={resources} />}
      {introduction.length > 0 && <ShowResults query={query} name="Introduction" list={introduction} />}
    </div>
  )
}

const Search = () => {
  const [query, setQuery] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [openPopover, setOpenPopover] = useState(false);
  const searchList = useSearchItems(query);

  // useEffect(() => {
  //   document.getElementById('___gatsby').addEventListener('keydown', (e) => {
  //     if (e.code === "KeyS") {
  //       setOpenPopover(!openPopover);
  //     }
  //   })
  // }, []);

  const handleSearchQuery = debounce((target) => {
    const query = target.value;
    setQuery(query);
    setOpenPopover(true);
    const list = searchList.filter((data) => {
      const { title, description } = data.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase()) || description.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResult(list);
  });

  return (
    <div>
      <Popover
        position="bottom-start"
        open={openPopover}
        appendToBody={false}
        className="mr-6 mt-6 pt-2 overflow-auto search-result"
        trigger={<Input
          className="position-absolute search-input"
          icon="search"
          name="input"
          autoComplete="off"
          placeholder="Search components, patterns.."
          onChange={({ target }) => handleSearchQuery(target)}
        />}
      >
        {
          !query &&
          <div className="p-7 d-flex align-items-center overflow-hidden">
            <Icon className="mr-6" appearance='subtle' size={24} name='touch_app' />
            <Text weight="medium">
              Tip: Press ’s’ to quickly start searching.
            </Text>
          </div>
        }
        {
          query && searchResult.length === 0 &&
            <div className="px-7 py-6 d-flex align-items-center overflow-hidden">
              <Icon className="mr-6" appearance='subtle' size={24} name='search_off' />
              <Text weight="medium">
                {`No results found for ${query}`}
              </Text>
            </div>
        }
        {query && searchResult.length != 0 &&
          <div className="pt-6 pb-4 d-flex align-items-center overflow-hidden">
            <PageHit query={query} searchList={searchResult} />
          </div>
        }
      </Popover>
    </div>
  );
};

export default Search;
