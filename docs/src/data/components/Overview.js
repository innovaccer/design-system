import React, { useState } from 'react';
import { Card, CardBody, Heading, Input, EmptyState, Badge } from '@innovaccer/design-system';
import { Link } from 'gatsby';
import './overview.css';
import { debounce } from '../../util/Helpers';
import noResultImage from './images/noresult.png';

const StatusTag = ({ category }) => {
  const categoryName = category?.toUpperCase();

  const appearance = {
    'CODE UNAVAILABLE': 'accent1',
    BETA: 'accent2',
  };

  return <Badge appearance={appearance[categoryName]}>{category}</Badge>;
};

function Overview({ data, mode, path = 'components' }) {
  const [previewList, setPreviewList] = useState(data);
  const [searchKey, setSearchKey] = useState('');

  const onSearchHandler = debounce((target) => {
    setSearchKey(target.value);
    const searchList = data.filter((item) => item.name.toLowerCase().match(target.value.toLowerCase()));
    setPreviewList(searchList);
  });

  return (
    <div>
      <Input
        className="w-25 my-7"
        icon="search"
        name="input"
        placeholder="Search components"
        onChange={({ target }) => onSearchHandler(target)}
      />

      <div className="d-flex flex-wrap">
        {previewList.length > 0 ? (
          previewList.map(({ image = () => <img alt="" />, name, status, link = '' }) => {
            return (
              <div key={name} className="overview-container-card pb-6 mr-6">
                <Link
                  className="card-link"
                  disabled={!link.length}
                  to={mode === 'mobile' ? `/mobile/${path}/${link}` : `/${path}/${link}`}
                >
                  <Card shadow="none" className="w-100 overflow-hidden overview-card pb-5 h-100">
                    <CardBody className="px-0">
                      <div className="py-5 card-opacity d-flex flex-column">
                        <div className="d-flex justify-content-end mr-5">
                          {status && <StatusTag category={status} />}
                        </div>

                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ overflow: 'hidden', height: '168px' }}
                        >
                          {React.createElement(image)}
                        </div>
                      </div>
                      <Heading data-test="Docs-Card-Heading" size="s" className="ml-6 position-absolute card-heading">
                        {name}
                      </Heading>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center w-100 mt-10">
            <EmptyState
              size="small"
              description="Sorry! We could not find any match. Please try again"
              imageSrc={noResultImage}
              title={`No results found for '${searchKey}'`}
            />
          </div>
        )}
      </div>

    </div>
  );
}

export default Overview;
