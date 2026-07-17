/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, MessageCircle, Play, Layers, Eye, ExternalLink } from 'lucide-react';
import { INSTAGRAM_FEED, SALON_INFO } from '../data';

export default function InstagramGallery() {
  return (
    <div className="bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-amber-400 font-mono text-xs tracking-[0.25em] uppercase block mb-3">
              Social Inspiration
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-[0.05em] uppercase">
              Vivi l'Atelier su Instagram
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl font-light leading-relaxed">
              Segui Nicole Vinti nel suo quotidiano lavorativo: retroscena delle preparazioni sposa, video trasformazioni ed anteprime delle nuove collezioni di tagli e sfumature.
            </p>
          </div>
          <a
            href={SALON_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-amber-300 px-6 py-3 border border-neutral-800 transition-all text-xs uppercase tracking-[0.15em] font-semibold"
          >
            <span>@nicole.vinti_official</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_FEED.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-[3/4] bg-neutral-900 border border-neutral-900/60 overflow-hidden cursor-pointer shadow-lg"
              onClick={() => window.open(SALON_INFO.instagram, '_blank')}
            >
              {/* Post Image */}
              <img
                src={post.imageUrl}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Type Overlay Badge */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                {post.type === 'video' ? (
                  <Play className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                ) : post.type === 'carousel' ? (
                  <Layers className="w-3.5 h-3.5 text-amber-300" />
                ) : (
                  <Eye className="w-3.5 h-3.5 text-neutral-300" />
                )}
              </div>

              {/* Full Hover Mask */}
              <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                {/* Stats */}
                <div className="flex items-center gap-6 text-white pt-2">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold tracking-wider">{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-neutral-300" />
                    <span className="text-sm font-semibold tracking-wider">{post.comments}</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="space-y-4">
                  <p className="text-xs text-neutral-300 font-light line-clamp-4 leading-relaxed italic">
                    "{post.caption}"
                  </p>
                  <span className="inline-block text-[10px] text-amber-400 uppercase tracking-[0.2em] font-semibold border-b border-amber-400/30 pb-0.5">
                    Visualizza Post
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
