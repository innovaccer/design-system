import React from 'react';
import { Card, Column, Icon, Toast } from '@innovaccer/design-system';
import './Logos.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { useLogoItems } from '../../util/Logos';

const ProductLogos = (props) => {
  const nodes = useLogoItems();

  const { logoData } = props;

  return logoData.map((elt) => {
    const filteredGatsbyImage = nodes.filter((img) => {
      if (img.fluid.src.includes(elt.imgName)) {
        return elt;
      }
    });

    let image;
    if (filteredGatsbyImage.length) {
      image = getImage(filteredGatsbyImage[0].gatsbyImageData);
    }

    return (
      <Column size="4">
        <Card className="mr-7 mt-7" shadow="none">
          <div className="px-6">
            <div className="mt-6 px-8 py-8 container w-auto">
              <GatsbyImage image={image} alt={elt.name} className="image" />
            </div>
            <div className="d-flex align-items-center">
              <p className="imgName mr-auto">{elt.name} </p>
              <Link href={image.images.fallback.src} download>
                <Icon
                  size={16}
                  name="download"
                  className="mr-3 imgName"
                  onClick={() => props.toggleToast(`Downloading ${elt.name}`)}
                />
              </Link>
            </div>
          </div>
        </Card>
      </Column>
    );
  });
};

export default ProductLogos;
