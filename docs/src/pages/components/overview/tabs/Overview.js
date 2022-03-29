import React, { useState } from 'react';
import { Card, CardBody, Row, Column, Heading, Input,EmptyState,Button } from '@innovaccer/design-system';
import { Link } from 'gatsby';
import './overview.css';
import { debounce } from '../../../../util/Helpers';
import { data } from '../../../../data/components/index.js';
import noResultImage from '../../../home/noresult.png';


function Overview() {

  const [previewList, setPreviewList] = useState(data);
  const [searchKey , setSearchKey] = useState('')

  const onSearchHandler = debounce((target) => {
    setSearchKey(target.value)
    const searchList = data
      .filter((item) => item.name.toLowerCase().match(target.value.toLowerCase()));
    setPreviewList(searchList);
  });

  return (
    <div>
      <Input
        className="w-50 my-7"
        icon="search"
        name="input"
        placeholder="Search components"
        onChange={({ target }) => onSearchHandler(target)}
      />

      <Row>
        {
          previewList.length > 0 ?
            previewList.map(({ image = () => (<img alt='' />), name, link = '' }) => {


              return (
                <Column
                  size={4}
                  key={name}
                  className="pr-6 pb-6"
                >

                  <Link className='card-link' disabled={!link.length} to={`/components/${(link).toLowerCase()}`}>
                    <Card
                      shadow='none'
                      className='w-100 overflow-hidden overview-card pb-5'
                    >
                      <CardBody className='px-0'>
                        <div className='py-5 card-opacity'>
                          <div className='d-flex justify-content-center align-items-center' style={{ overflow: 'hidden', height: '136px' }}>
                            {React.createElement(image)}
                          </div>
                        </div>
                        <Heading size="s" className='ml-6'>
                          {name}
                        </Heading>
                      </CardBody>
                    </Card>
                  </Link>

                </Column>
              )
            }) :
            <div className="d-flex justify-content-center" style={{ transform: "translate(50%,64px)" }}>
              <EmptyState 
                description="Sorry! We could not find any match. Please try again"
                imageSrc={noResultImage}
                size="small" title={`No results found for ${"'"+searchKey+"'"}`}
              />
            </div>
        }
      </Row>
    </div>
  )
}

export default Overview;
