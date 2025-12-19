
import React, { useState } from 'react';
import { getChefRecommendation } from '../services/geminiService';

const AIChefAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const rec = await getChefRecommendation(input);
    setResponse(rec);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-72 md:w-80 border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-stone-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-bold text-sm">Chef Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="p-4 bg-stone-50 min-h-[120px] max-h-60 overflow-y-auto">
            {response ? (
              <div className="animate-in fade-in slide-in-from-left-2">
                <p className="text-xs text-stone-400 mb-1 font-semibold uppercase tracking-widest">Recommendation:</p>
                <p className="text-stone-800 text-sm italic font-serif leading-relaxed">"{response}"</p>
                <button 
                  onClick={() => { setResponse(null); setInput(''); }}
                  className="mt-4 text-amber-600 text-[10px] font-bold uppercase"
                >
                  Ask something else
                </button>
              </div>
            ) : (
              <p className="text-stone-500 text-sm">Tell me what you're in the mood for! I can suggest Veg, Non-Veg, or Sweet treats.</p>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., 'Something spicy with seafood'"
              className="w-full text-sm border-none bg-stone-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <button 
              type="submit"
              disabled={loading || !input.trim()}
              className="w-full mt-2 bg-stone-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-stone-800 disabled:opacity-50"
            >
              {loading ? 'Thinking...' : 'Consult Chef'}
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-stone-900 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-semibold whitespace-nowrap">Ask the Chef</span>
        </button>
      )}
    </div>
  );
};

export default AIChefAssistant;
