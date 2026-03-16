export interface BlogDate {
  day: string;
  month: string;
  year?: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subSections?: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogComment {
  name: string;
  time: string;
  text: string;
  avatar: string;
  isReply?: boolean;
}

export interface Blog {
  id: number;
  imgSrc: string;
  imgWidth?: number;
  imgHeight?: number;
  category?: string;
  title?: string;
  description?: string;
  date?: BlogDate;
  slug?: string;
}

export interface DetailedBlogPost extends Blog {
  title: string;
  category: string;
  date: BlogDate;
  slug: string;
  author: string;
  publisher: string;
  readTime: string;
  excerpt: string;
  intro: string[];
  keyTakeaways?: string[];
  sections: BlogSection[];
  tags: string[];
  faqs: BlogFaq[];
  comments: BlogComment[];
  recommendedIds: number[];
}
