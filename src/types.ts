/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Flavor {
  id: string;
  name: string;
  description: string;
  type: 'fruit' | 'citrus' | 'creamy' | 'special';
  ingredients: string[];
  color: string; // Tailwind color class or specific hex
  textColor: string;
  badge: string;
  imageUrl?: string;
  calories?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
}

export interface QuoteState {
  clientType: 'mayorista' | 'distribuidor' | 'evento' | 'festival';
  quantity: string;
  flavorInterests: string[];
  location: string;
  contactName: string;
  additionalNotes: string;
}

