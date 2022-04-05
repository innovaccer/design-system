import React from 'react';
import { navigate } from 'gatsby';
import Meta from '../components/Meta';
import Homepage from '../components/templates/Homepage';
import Footer from '../components/Footer/Footer';
import { MediumBlogs, useHomeMenu, MdsChangelog, useHomeResources } from '../util';
import { StaticImage } from "gatsby-plugin-image";
import './home/homepage.css';
import {
  Row,
  Column,
  Heading,
  Button,
  Card,
  Badge,
  Text,
  Icon,
  Link,
  Subheading
} from '@innovaccer/design-system';

const Home = () => {

  const mediumBlogList = MediumBlogs().slice(0, 3);
  const menuSection = useHomeMenu();
  const resourceSection = useHomeResources();
  const changelog = MdsChangelog();

  const releaseDate = new Date(changelog.releaseDate).toString().slice(3, 15);

  const getChangelogContent = () => (
    changelog.updatesList.slice(0, 2).map((updates) => {
      return (
        updates.map((item, key) => {
          return (
            key < 3 &&
            (
              key === 0 ?
                <div className="mt-4" key={key}>
                  <Text weight='strong' className="home-text-color">{item}</Text>
                </div>
                :
                <div className="list" key={key}>
                  <li className="m-0">
                    <Text appearance='subtle' size='small' weight='medium'>
                      {item.substring(0, item.lastIndexOf('('))}
                    </Text>
                  </li>
                </div>
            )
          )
        })
      )
    })
  )

  return (
    <Homepage relativePagePath={'/404'} is404={true}>
      <Meta titleType='page' docTitle='Masala Design System' />
      <Row className="h-100">
        <Column className="page-animation">

          <section className="px-12 pt-8">
            <Row className="align-items-center">
              <Column>
                <Text weight='medium'>Welcome to</Text>
                <Heading size='xl' className='mt-2 home-text-color'>
                  Masala Design System
                </Heading>
                <Heading size='m' className='mt-4 font-weight--normal home-text-color'>
                  Designers, developers, product managers, and UXer's use
                  Innovaccer's Masala Design System to build products effortlessly,
                  fearlessly, and conveniently.
                </Heading>
                <br />
                <Button
                  appearance='primary'
                  onClick={() => navigate('/introduction/get-started/designers/')}
                >
                  Get started
                </Button>
                <br />
              </Column>
              <Column>
                <StaticImage
                  src="./home/HomeBanner.png"
                  alt="test"
                />
              </Column>
            </Row>
          </section>

          <section className="px-12 py-11 home-menu">
            <Row>
              {
                menuSection.map((menuItem, key) => {
                  return (
                    <Column size={3} key={key}>
                      <Link href={menuItem.link}>
                        <Card
                          className='mr-7 p-6 h-100 overflow-visible'
                          shadow='none'
                        >
                          <div className='d-flex'>
                            <div className='mr-6'>
                              <span
                                className='border-radius--rounded p-4 d-inline-flex'
                                style={{ backgroundColor: `var(--${menuItem.appearance}-lightest)` }}
                              >
                                <Icon
                                  name={menuItem.icon}
                                  appearance={menuItem.appearance}
                                  size={24}
                                />
                              </span>
                            </div>

                            <div>
                              <Heading size='s' className='mb-4 home-text-color'>
                                {menuItem.name}
                              </Heading>
                              <Text appearance='subtle' className='font-weight--normal'>
                                {menuItem.content}
                              </Text>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </Column>
                  )
                })
              }
            </Row>
          </section>

          <section className="px-12 py-11">
            <Row>
              <Column size={6}>
                <Card
                  className='p-6 mr-6 h-100 overflow-visible'
                  shadow='none'
                >
                  <div className='d-flex'>
                    <Heading size='m' className='mb-3 home-text-color'>
                      Masala Design System v{(changelog.version).trim()}
                    </Heading>
                    <div>
                      <Badge appearance="success" className='ml-4 mt-3'> NEW </Badge>
                    </div>
                  </div>
                  <div className='mb-6'>
                    <Subheading appearance="subtle">{releaseDate}</Subheading>
                    <div>
                      {getChangelogContent()}
                    </div>
                  </div>

                  <Link href={'/introduction/what\'s-new/'}> View all updates</Link>
                </Card>
              </Column>
              <Column size={6}>
                <Card
                  className='p-6 mr-6 h-100 overflow-visible'
                  shadow='none'
                >
                  <Heading size='m' className="home-text-color mb-5">Blogs by Innovaccer Design</Heading>
                  {
                    mediumBlogList.map((blog, key) => {
                      return (
                        <div className={`d-flex ${key === 2 ? 'mb-0' : 'mb-5'}`} key={key}>
                          <div style={{ width: '40px' }}>
                            <img
                              src={`https://miro.medium.com/fit/c/28/28/${blog.author.imageId}`}
                              alt="author_img"
                              className="border-radius--rounded mr-4"
                            />
                          </div>
                          <div>
                            <Link href={`https://medium.com/innovaccer-design/${blog.uniqueSlug}`} target="_blank" >
                              {blog.title}
                            </Link>
                            <br />
                            <Text appearance='subtle' size='small' weight='medium'>
                              {'by ' + blog.author.name}
                            </Text>
                          </div>
                        </div>
                      )
                    })
                  }
                  <div
                    className="position-absolute sticky-bottom"
                  >
                    <Link
                      href='https://medium.com/innovaccer-tech'
                      target="_blank"
                    >
                      More blogs
                    </Link>
                  </div>
                </Card>
              </Column>
            </Row>
          </section>

          <section className="px-12 py-11 bg-secondary-lightest">
            <Heading size='xl' className="home-text-color">Resources</Heading>
            <Row className="mt-7">
              {resourceSection.map((resource, key) => (
                <Column key={key}>
                  <Link href={resource.link} target="_blank">
                    <Card
                      className='mr-6 p-6 h-100 overflow-visible'
                      shadow='none'
                    >
                      <Row>
                        <Column size={2} className='mr-6'>
                          <img src={resource.imgSrc} width="100%" height="100%" alt={resource.name} />
                        </Column>
                        <Column>
                          <Heading size='m' className="mb-2 home-text-color">{resource.name}</Heading>
                          <Text appearance='subtle' className='font-weight--normal'>
                            {resource.description}
                          </Text>
                        </Column>
                      </Row>
                    </Card>
                  </Link>
                </Column>
              ))}
            </Row>
          </section>

          <Footer relativePagePath={'/home'} />
        </Column>
      </Row>
    </Homepage>
  );
};

export default Home;
