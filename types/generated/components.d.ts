import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutIntroduction extends Schema.Component {
  collectionName: 'components_layout_introductions';
  info: {
    displayName: 'introduction';
    icon: 'layout';
  };
  attributes: {
    description: Attribute.RichText;
    picture: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.introduction': LayoutIntroduction;
    }
  }
}
