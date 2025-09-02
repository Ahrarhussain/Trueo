export type Post = {
  id: string | number;
  author: {
    name: string;
    username: string;
    verified?: boolean;
  };
  content: string;
  topics: string[];
  timestamp: string;
  credibilityScore: number;
  biases?: string[];
  missingPerspectives?: string[];
  contextLayer?: string;
  engagement: {
    validates: number;
    contextualizes: number;
    challenges: number;
  };
  isPulse?: boolean;
};
