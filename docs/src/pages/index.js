import React from 'react';
import { navigate } from 'gatsby';
import Meta from '../components/Meta';
import Homepage from '../components/templates/Homepage';
import Footer from '../components/Footer/Footer';
import { MediumBlogs, MdsChangelog, useHomeResources } from '../util';
import { StaticImage } from 'gatsby-plugin-image';
import './home/homepage.css';
import { Row, Column, Heading, Button, Card, Badge, Text, Link, Subheading } from '@innovaccer/design-system';
import HomeCard from './home/HomeCard';

const Home = () => {
  const mediumBlogList = MediumBlogs().slice(0, 3);
  const resourceSection = useHomeResources();
  const changelog = MdsChangelog();

  const releaseDate = new Date(changelog.releaseDate).toString().slice(3, 15);

  const getChangelogContent = () =>
    changelog.updatesList.slice(0, 2).map((updates) => {
      return updates.map((item, key) => {
        return (
          key < 3 &&
          (key === 0 ? (
            <div className="mt-5" key={key}>
              <Text weight="strong" size="large">
                {item}
              </Text>
            </div>
          ) : (
            <div className="list" key={key}>
              <li className="m-0">
                <Text appearance="subtle" size="small" weight="medium">
                  {item.substring(0, item.lastIndexOf('('))}
                </Text>
              </li>
            </div>
          ))
        );
      });
    });

  return (
    <Homepage relativePagePath={'/404'} is404={true}>
      <Meta titleType="page" docTitle="Masala Design System" />
      <Row className="h-100">
        <Column className="page-animation">
          <section className="pt-8">
            <Row className="align-items-center">
              <Column size={1} />
              <Column>
                <Heading size="xxl" className="mt-2 home-heading">
                  Masala Design System
                </Heading>
                <Heading size="s" className="mt-6 font-weight--normal text-width">
                  Designers, developers, product managers, and UXer's use Innovaccer's Masala Design System to build
                  products effortlessly, fearlessly, and conveniently.
                </Heading>
                <br />
                <Button
                  appearance="primary"
                  onClick={() => navigate('/introduction/get-started/designers/')}
                  className="button-size px-6"
                >
                  Get started
                </Button>
                <br />
              </Column>
              <Column>
                <StaticImage src="./home/HomeBanner.png" alt="Masala Design System" />
              </Column>
              <Column size={1} />
            </Row>
          </section>

          <HomeCard />

          <section className="home_card-padding--y">
            <Row className="card-height">
              <Column size={1} />
              <Column size={5}>
                <Card className="px-7 card-padding mr-6 h-100 overflow-visible" shadow="none">
                  <div className="d-flex">
                    <Heading size="m" className="mb-2">
                      Masala Design System v{changelog.version.trim()}
                    </Heading>
                    <div>
                      <Badge appearance="success" className="ml-4 mt-3">
                        {' '}
                        NEW{' '}
                      </Badge>
                    </div>
                  </div>
                  <div className="mb-6">
                    <Subheading appearance="subtle">{releaseDate}</Subheading>
                    <div>{getChangelogContent()}</div>
                  </div>
                  <div className="position-absolute sticky-bottom">
                    <Link href={"/introduction/what's-new/"}> View all updates</Link>
                  </div>
                </Card>
              </Column>
              <Column size={5}>
                <Card className="px-7 card-padding ml-6 h-100 overflow-visible" shadow="none">
                  <Heading size="m" className="mb-6">
                    Blogs by Innovaccer Design
                  </Heading>
                  {mediumBlogList.map((blog, key) => {
                    return (
                      <div className={`d-flex ${key === 2 ? 'mb-0' : 'mb-6'}`} key={key}>
                        <div style={{ width: '40px' }}>
                          <img
                            src={`https://miro.medium.com/fit/c/28/28/${blog.author.imageId}`}
                            alt="author_img"
                            className="border-radius--rounded mr-4"
                          />
                        </div>
                        <div>
                          <Link href={`https://medium.com/innovaccer-design/${blog.uniqueSlug}`} target="_blank">
                            {blog.title}
                          </Link>
                          <br />
                          <Text appearance="subtle" size="small" weight="medium">
                            {'by ' + blog.author.name}
                          </Text>
                        </div>
                      </div>
                    );
                  })}
                  <div className="position-absolute sticky-bottom">
                    <Link href="https://medium.com/innovaccer-tech" target="_blank">
                      More blogs
                    </Link>
                  </div>
                </Card>
              </Column>
              <Column size={1} />
            </Row>
          </section>

          <section className="home_card-padding--y bg-secondary-lightest">
            <Row>
              <Column size={1} />
              <Heading size="xl">Resources</Heading>
              <Column size={1} />
            </Row>
            <Row className="mt-8">
              <Column size={1} />
              {resourceSection.map((resource, key) => (
                <Column key={key} className={`${key === 2 ? 'mr-0': 'mr-7'}`}>
                  <Link href={resource.link} target="_blank">
                    <Card className="p-6 h-100 overflow-visible" shadow="none">
                      <Row>
                        <Column size={2} className="mr-6">
                          <img src={resource.imgSrc} className="home-img-size" alt={resource.name} />
                        </Column>
                        <Column>
                          <Heading size="m" className="mb-2">
                            {resource.name}
                          </Heading>
                          <Text appearance="subtle" className="font-weight--normal">
                            {resource.description}
                          </Text>
                        </Column>
                      </Row>
                    </Card>
                  </Link>
                </Column>
              ))}
              <Column size={1} />
            </Row>
          </section>
          <Footer relativePagePath={'/home'} />
        </Column>
      </Row>
    </Homepage>
  );
};

export default Home;
