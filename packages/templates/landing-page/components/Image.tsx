import { Schema } from '@cms/packages/template-engine/types';
import { FC, HTMLProps } from 'react';
import ImageComponent from '../client-components/Image';

const Image: FC<HTMLProps<HTMLImageElement>> = (props) => {
  return <ImageComponent {...props} />;
};

export default Image;

export const schema: Schema = {
  component: 'Image',
  category: 'layout',
  description:
    'Use Button components to link to other pages or add a call to action',
  props: [
    {
      name: 'src',
      type: 'string',
      value: 'https://nextui.org/images/hero-card-complete.jpeg',
      displayName: 'Image source',
    },
    {
      name: 'alt',
      type: 'string',
      value: 'Image alternative tag',
      displayName: 'Image alt tag',
    },
    {
      name: 'className',
      type: 'string',
      value: '',
      displayName: 'Button classes',
      description: 'You can use Tailwind classes to style this button',
    },
    {
      name: 'width',
      type: 'string',
      value: '100px',
      displayName: 'Width of the image',
      description: 'You can use Tailwind classes to style this button',
    },
    {
      name: 'height',
      type: 'string',
      value: '100px',
      displayName: 'Height of the image',
      description: 'You can use Tailwind classes to style this button',
    },
  ],
};
