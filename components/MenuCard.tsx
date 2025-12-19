
import React, { useState } from 'react';
import { MenuItem } from '../types';
import { getDishStory } from '../services/geminiService';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  const [aiStory, setAiStory] = useState<string | null>(null);
  const [loadingStory, setLoadingStory] = useState(false);

  const fetchStory = async () => {
    if (aiStory) {
      setAiStory(null);
      return;
    }
    setLoadingStory(true);
    const story = await getDishStory(item.name);
    setAiStory(story);
    setLoadingStory(false);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {item.isSpicy && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Spicy</span>
          )}
          {item.isGlutenFree && (
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">GF</span>
          )}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-stone-800 leading-tight">{item.name}</h3>
          <span className="text-amber-600 font-bold">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="mt-auto space-y-3">
          <button 
            onClick={fetchStory}
            disabled={loadingStory}
            className="w-full text-xs font-semibold text-amber-700 bg-amber-50 py-2 rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-center gap-2"
          >
            {loadingStory ? (
              <span className="animate-pulse">Consulting the Chef...</span>
            ) : aiStory ? 'Hide Chef\'s Note' : '✨ Chef\'s Special Insight'}
          </button>

          {aiStory && (
            <div className="bg-stone-50 p-3 rounded-lg border-l-2 border-amber-400 animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="text-xs italic text-stone-600 font-serif leading-relaxed">
                "{aiStory}"
              </p>
            </div>
          )}

          <button 
            onClick={() => onAddToCart(item)}
            className="w-full bg-stone-900 text-white py-3 rounded-xl font-semibold hover:bg-stone-800 transition-colors shadow-sm active:scale-95"
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
