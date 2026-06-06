export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ActivityImage {
  id: string;
  title: string;
  description: string;
  src: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  mockupSrc?: string;
  regularPrice: string;
  currentPrice: string;
  paymentDetails: string;
  checkoutUrl: string;
  features: PlanFeature[];
  isPopular?: boolean;
}
