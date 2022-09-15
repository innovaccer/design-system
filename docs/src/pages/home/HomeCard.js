import React, { useState } from 'react';
import { useHomeMenu } from '../../util';
import { Row, Column, Heading, Card, Text, Link, Icon } from '@innovaccer/design-system';
import * as HomeIcons from '../../util/HomeIcons';

const MenuIcons = ({ name }) => {
  const SvgIcons = HomeIcons[name] || (() => <div></div>);
  return <SvgIcons />;
};

const HomeCard = () => {
  const menuSection = useHomeMenu();
  const [hoveredCardId, sethoveredCardId] = useState('');
  return (
    <section className="home_card-padding--y home-menu">
      <Row>
        <Column size={1} />
        {menuSection.map((menuItem, key) => {
          return (
            <Column key={key} className={`${key === 3 ? 'mr-0': 'mr-7'}`}>
              <div
                className="h-100 overflow-visible"
                onMouseEnter={() => sethoveredCardId(key)}
                onMouseLeave={() => sethoveredCardId('')}
              >
                <Link href={menuItem.link}>
                  <Card className="p-6 h-100" shadow="none">
                    <div className="d-flex">
                      <div className="mr-6">
                        <Icon>
                          <MenuIcons name={menuItem.img} />
                        </Icon>
                      </div>
                      <div>
                        <Heading size="s" className="mb-2">
                          {menuItem.name}
                          {hoveredCardId === key && (
                            <Icon
                              type="filled"
                              size={16}
                              name="arrow_forward"
                              className="ml-3 mt-3 position-absolute"
                            />
                          )}
                        </Heading>
                        <Text appearance="subtle" className="font-weight--normal">
                          {menuItem.content}
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </Column>
          );
        })}
        <Column size={1} />
      </Row>
    </section>
  );
};

export default HomeCard;
