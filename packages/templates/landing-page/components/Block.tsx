import { Schema } from '@cms/packages/template-engine/types';
import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const Block: FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  id,
}) => {
  return (
    <div id={id} data-label="Block" className={twMerge('', className)}>
      {children}
    </div>
  );
};

export default Block;

export const schema: Schema = {
  component: 'Block',
  category: 'layout',
  description: 'Use Block element to vertically stack your content',
  props: [
    {
      name: 'children',
      type: 'component',
      value: [],
    },
    {
      name: 'className',
      type: 'string',
      value: '',
      displayName: 'Block classes',
      description: 'You can use Tailwind classes to style this block',
    },
  ],
};
