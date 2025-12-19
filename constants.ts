
import { MenuItem, Category } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // VEG
  {
    id: 'v1',
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms and truffle oil shavings.',
    price: 22.00,
    category: Category.VEG,
    image: 'https://picsum.photos/seed/risotto/600/400',
    isGlutenFree: true
  },
  {
    id: 'v2',
    name: 'Paneer Tikka Platter',
    description: 'Marinated cottage cheese cubes grilled to perfection with bell peppers.',
    price: 18.50,
    category: Category.VEG,
    image: 'https://picsum.photos/seed/paneer/600/400',
    isSpicy: true
  },
  {
    id: 'v3',
    name: 'Garden Harvest Pizza',
    description: 'Fresh zucchini, olives, cherry tomatoes, and mozzarella on sourdough crust.',
    price: 16.00,
    category: Category.VEG,
    image: 'https://picsum.photos/seed/vegpizza/600/400'
  },
  {
    id: 'v4',
    name: 'Quinoa Buddha Bowl',
    description: 'Nutritious quinoa base topped with avocado, chickpeas, and tahini dressing.',
    price: 14.00,
    category: Category.VEG,
    image: 'https://picsum.photos/seed/quinoa/600/400',
    isGlutenFree: true
  },

  // NON-VEG
  {
    id: 'nv1',
    name: 'Butter Chicken Masala',
    description: 'Classic tandoori chicken in a rich, buttery tomato gravy.',
    price: 24.00,
    category: Category.NON_VEG,
    image: 'https://picsum.photos/seed/chicken/600/400',
    isSpicy: true
  },
  {
    id: 'nv2',
    name: 'Grilled Atlantic Salmon',
    description: 'Pan-seared salmon fillet with lemon-dill sauce and roasted asparagus.',
    price: 32.00,
    category: Category.NON_VEG,
    image: 'https://picsum.photos/seed/salmon/600/400',
    isGlutenFree: true
  },
  {
    id: 'nv3',
    name: 'Lamb Chops with Rosemary',
    description: 'Tender lamb chops infused with rosemary and served with garlic mash.',
    price: 38.00,
    category: Category.NON_VEG,
    image: 'https://picsum.photos/seed/lamb/600/400'
  },
  {
    id: 'nv4',
    name: 'Spicy Prawn Tempura',
    description: 'Crispy battered jumbo prawns served with a wasabi mayo dip.',
    price: 21.00,
    category: Category.NON_VEG,
    image: 'https://picsum.photos/seed/prawns/600/400',
    isSpicy: true
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Valrhona Chocolate Lava Cake',
    description: 'Warm, gooey dark chocolate center served with vanilla bean gelato.',
    price: 12.00,
    category: Category.DESSERTS,
    image: 'https://picsum.photos/seed/lava/600/400'
  },
  {
    id: 'd2',
    name: 'Classic Tiramisu',
    description: 'Ladyfingers dipped in espresso, layered with mascarpone cream.',
    price: 10.50,
    category: Category.DESSERTS,
    image: 'https://picsum.photos/seed/tiramisu/600/400'
  },
  {
    id: 'd3',
    name: 'Mango Cheesecake',
    description: 'Silky smooth cheesecake topped with fresh Alphonso mango purée.',
    price: 11.00,
    category: Category.DESSERTS,
    image: 'https://picsum.photos/seed/mango/600/400'
  },
  {
    id: 'd4',
    name: 'Saffron Pistachio Kulfi',
    description: 'Traditional Indian frozen dessert flavored with exotic saffron and nuts.',
    price: 8.50,
    category: Category.DESSERTS,
    image: 'https://picsum.photos/seed/kulfi/600/400',
    isGlutenFree: true
  }
];
