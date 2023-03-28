import React from 'react';
import { Card } from './Card';

export default {
  title: 'Button',
  component: Card,
  argTypes: {
    Title: {control: 'text'},
    paragraph: {control: 'text'},
    backgroundColor: { control: 'color' },
    btnColor:{ control: 'color' },
    btnTextColor:{control:'color'},
    likeButton: {control: 'text'},
    shareButton: {control: 'text'},
    textColor : {control: 'color'},
    paragraphColor : {control: 'color'},
    
  },
};

const abc = (args) => <Card {...args} />;

export const card = abc.bind({});

card.args = {
    shareButton: 'Share',
    likeButton: 'Like',
};

