import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { Post } from '../types';

// Prop types:
type PostCardProps = {
  post: Post;
};
type actionType = 'validate' | 'contextualize' | 'challenge';

// Post Card Component
export default function PostCard({ post }: PostCardProps) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [userAction, setUserAction] = useState<'validate' | 'contextualize' | 'challenge'>();

  const credibilityColor = 
    post.credibilityScore >= 80 ? 'green' :
    post.credibilityScore >= 60 ? 'yellow' :
    'red';

  const handleEngagement = (action: actionType) => {
    setUserAction(action);
    // In real app, this would update the backend
  };

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-purple-500 rounded-full"></div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-900">{post.author.name}</p>
                {post.author.verified && (
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                )}
              </div>
              <p className="text-sm text-gray-500">
                @{post.author.username} · {post.timestamp}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setShowAnalysis(!showAnalysis)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition
              ${credibilityColor === 'green' ? 'text-green-700 bg-green-100 hover:bg-green-200' :
                credibilityColor === 'yellow' ? 'text-yellow-700 bg-yellow-100 hover:bg-yellow-200' :
                'text-red-700 bg-red-100 hover:bg-red-200'}`}
          >
            <Shield className="w-4 h-4" />
            {post.credibilityScore}%
          </button>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.topics.map(topic => (
            <span key={topic} className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              {topic}
            </span>
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-900 mb-4">{post.content}</p>

        {/* Context Layer */}
        {post.contextLayer && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">{post.contextLayer}</p>
            </div>
          </div>
        )}

        {/* AI Analysis Panel */}
        {showAnalysis && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg space-y-3">
            <h4 className="font-medium text-gray-900">AI Analysis</h4>
            
            {post.biases?.length ? (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Detected Biases:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {post.biases.map((bias, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-0.5">•</span>
                      {bias}
                    </li>
                  ))}
                </ul>
              </div>
            ): null}

            post.missingPerspectives?.length? (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Missing Perspectives:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {post.missingPerspectives?.map((perspective, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      {perspective}
                    </li>
                  ))}
                </ul>
              </div>
            )
          </div>
        )}

        {/* Engagement */}
        <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
          <button
            onClick={() => handleEngagement('validate')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition
              ${userAction === 'validate' 
                ? 'bg-green-100 text-green-700' 
                : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <CheckCircle className="w-4 h-4" />
            Validate ({post.engagement.validates})
          </button>
          
          <button
            onClick={() => handleEngagement('contextualize')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition
              ${userAction === 'contextualize' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <MessageCircle className="w-4 h-4" />
            Contextualize ({post.engagement.contextualizes})
          </button>
          
          <button
            onClick={() => handleEngagement('challenge')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition
              ${userAction === 'challenge' 
                ? 'bg-orange-100 text-orange-700' 
                : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <AlertCircle className="w-4 h-4" />
            Challenge ({post.engagement.challenges})
          </button>
        </div>
      </div>
    </article>
  );
}