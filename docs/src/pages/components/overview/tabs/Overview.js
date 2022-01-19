import React, { useState } from 'react';
import { Card, CardBody, Row, Column, Heading, Input, } from '@innovaccer/design-system';
import { Link } from 'gatsby';

import './overview.css';
import { debounce } from '../../../../util/Helpers';
import { data } from '../../../../data/components/index.js';

function Overview() {

  const [previewList, setPreviewList] = useState(data);

  const onSearchHandler = debounce((target) => {
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
                      <CardBody>
                        <div className='py-5'>
                          <div className='d-flex justify-content-center align-items-center' style={{ overflow: 'hidden', height: '136px' }}>
                            {React.createElement(image)}
                          </div>
                        </div>
                        <Heading size="s">
                          {name}
                        </Heading>
                      </CardBody>
                    </Card>
                  </Link>

                </Column>
              )
            }) :
            <Heading size="s" className="mb-5">
              No result found :(
            </Heading>
        }
      </Row>
    </div>
  )
}

export default Overview;
