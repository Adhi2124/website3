import { Link, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: 'All Links', icon: 'layout-grid' },
  { id: 'design', name: 'Design', icon: 'palette' },
  { id: 'development', name: 'Development', icon: 'code-2' },
  { id: 'productivity', name: 'Productivity', icon: 'zap' },
  { id: 'tools', name: 'Tools', icon: 'tool' },
  { id: 'resources', name: 'Resources', icon: 'book-open' }
];

export const links: Link[] = [
  {
    id: '1',
    title: 'Minimal UI Kit',
    url: 'https://example.com/minimal-ui',
    description: 'Premium UI kit for designers with over 300 components',
    category: 'design',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    dateAdded: '2023-10-15'
  },
  {
    id: '2',
    title: 'DevHarbor',
    url: 'https://example.com/devharbor',
    description: 'All-in-one developer platform with integrated tools',
    category: 'development',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    dateAdded: '2023-11-20'
  },
  {
    id: '3',
    title: 'FlowSpace',
    url: 'https://example.com/flowspace',
    description: 'Task management system designed for creative professionals',
    category: 'productivity',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    dateAdded: '2023-12-05'
  },
  {
    id: '4',
    title: 'DesignVault',
    url: 'https://example.com/designvault',
    description: 'Curated collection of design resources and inspiration',
    category: 'design',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    dateAdded: '2024-01-10'
  },
  {
    id: '5',
    title: 'CodeCraft Pro',
    url: 'https://example.com/codecraft',
    description: 'Advanced IDE with AI-powered code suggestions',
    category: 'development',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    dateAdded: '2024-02-15'
  },
  {
    id: '6',
    title: 'ResourceHub',
    url: 'https://example.com/resourcehub',
    description: 'Collection of premium resources for creative professionals',
    category: 'resources',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    dateAdded: '2024-03-01'
  },
  {
    id: '7',
    title: 'ToolMaster',
    url: 'https://example.com/toolmaster',
    description: 'Suite of online tools for developers and designers',
    category: 'tools',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    dateAdded: '2024-03-10'
  },
  {
    id: '8',
    title: 'TimeWise',
    url: 'https://example.com/timewise',
    description: 'Time tracking and productivity analytics for teams',
    category: 'productivity',
    image: 'https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    dateAdded: '2024-03-20'
  }
];