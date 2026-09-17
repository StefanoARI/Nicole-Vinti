/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'contact'
  | 'atelier-capelli'
  | 'sposa-immagine'
  | 'gift-card'
  | 'corsi'
  | 'booking'
  | 'bridal'
  | 'hair-design'
  | 'color'
  | 'consulting'
  | 'concept-store'
  | 'beauty-hairspa'
  | 'hair-integration'
  | 'abbigliamento'
  | 'barber-shop'
  | 'academy';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  url: string;
  alt: string;
  title?: string;
}

export interface ServiceDetail {
  id: PageId;
  title: string;
  subtitle: string;
  shortDesc: string;
  image: string;
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  approach: string; // Nicole's unique method
  durationPrice: string;
  faqs?: FAQItem[];
  gallery?: GalleryItem[];
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  type: 'image' | 'video' | 'carousel';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}
