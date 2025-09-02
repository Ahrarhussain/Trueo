"use client";
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, TrendingUp, Globe, Settings, Plus, X } from 'lucide-react';
import { Post } from './types';
import PostCard from './components/PostCard';
import { samplePosts } from './mockData/samplePosts';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeView, setActiveView] = useState<"pulse" | "feed">("feed");
  const [noiseLevel, setNoiseLevel] = useState<number>(50);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Technology', 'Climate Justice']);
  const [showTopicSelector, setShowTopicSelector] = useState(false);
  const [user] = useState({ name: 'Ahrar Hussain', username: 'ahrarh' });

  // Sample topics database
  const allTopics = [
    { name: 'Technology', category: 'tech', followers: 124500 },
    { name: 'Climate Justice', category: 'environment', followers: 89200 },
    { name: 'Human Rights', category: 'social', followers: 156000 },
    { name: 'Philosophy', category: 'culture', followers: 45300 },
    { name: 'Global Health', category: 'health', followers: 78900 },
    { name: 'Economic Policy', category: 'politics', followers: 67400 },
    { name: 'Space Exploration', category: 'science', followers: 93100 },
    { name: 'Indigenous Rights', category: 'social', followers: 34200 }
  ];

  // Generate sample posts
  useEffect(() => {
    // Filter posts based on noise level
    const filteredPosts: Post[] = samplePosts.filter((post, index) => {
      if (noiseLevel < 30) return post.isPulse; // Only critical posts
      if (noiseLevel < 70) return index < 3;    // Balanced feed
      return true;                              // All posts
    });

    // Filter by view type
    if (activeView === "pulse") {
      setPosts(filteredPosts.filter((p) => p.isPulse));
    } else {
      setPosts(
        filteredPosts.filter(
          (p) => Array.isArray(p.topics) && p.topics.some((t) => selectedTopics.includes(t))
        )
      );
    }

  }, [activeView, noiseLevel, selectedTopics]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                Trueo
              </h1>
              <div className="hidden md:flex space-x-6">
                <button 
                  onClick={() => setActiveView('feed')}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                    activeView === 'feed' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Your Feed
                </button>
                <button 
                  onClick={() => setActiveView('pulse')}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                    activeView === 'pulse' 
                      ? 'text-red-600 bg-red-50' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Reality Pulse
                  </span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-black rounded-full" />
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Topic Selector */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-900">Your Topics</h3>
                <button 
                  onClick={() => setShowTopicSelector(!showTopicSelector)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                {selectedTopics.map(topic => (
                  <div key={topic} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                    <span className="text-sm font-medium text-gray-700">{topic}</span>
                    <button 
                      onClick={() => setSelectedTopics(selectedTopics.filter(t => t !== topic))}
                      className="text-gray-700 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              {showTopicSelector && (
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <p className="text-xs text-gray-700 mb-2">Add topics:</p>
                  <div className="space-y-1 max-h-48 overflow-y-auto text-gray-600">
                    {allTopics
                      .filter(t => !selectedTopics.includes(t.name))
                      .map(topic => (
                        <button
                          key={topic.name}
                          onClick={() => {
                            setSelectedTopics([...selectedTopics, topic.name]);
                            setShowTopicSelector(false);
                          }}
                          className="w-full text-left p-2 text-sm hover:bg-gray-50 rounded-md transition"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{topic.name}</span>
                            <span className="text-xs text-gray-700">
                              {(topic.followers / 1000).toFixed(0)}k
                            </span>
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Noise Filter */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Noise Filter</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <VolumeX className="w-4 h-4 text-gray-600" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={noiseLevel}
                    onChange={(e) => setNoiseLevel(Number(e.target.value))}
                    className="flex-1"
                  />
                  <Volume2 className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-xs text-gray-500">
                  {noiseLevel < 30 && "Essential updates only"}
                  {noiseLevel >= 30 && noiseLevel < 70 && "Balanced feed"}
                  {noiseLevel >= 70 && "Rich feed with discussions"}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">{"Today's Reality"}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Verified Facts</span>
                  <span className="font-medium text-green-600">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bias Alerts</span>
                  <span className="font-medium text-yellow-600">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Global Issues</span>
                  <span className="font-medium text-red-600">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-4">
            {activeView === 'pulse' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900">Reality Pulse</h3>
                    <p className="text-sm text-red-700 mt-1">
                      Important global issues that need attention
                    </p>
                  </div>
                </div>
              </div>
            )}

            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}

            {posts.length === 0 && (
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-gray-500">
                  {activeView === 'pulse' 
                    ? "No critical issues requiring immediate attention"
                    : "Adjust your noise filter or follow more topics to see content"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

