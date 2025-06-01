export interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
  image: string;
  featured: boolean;
  dateAdded: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type ThemeMode = 'light' | 'dark';