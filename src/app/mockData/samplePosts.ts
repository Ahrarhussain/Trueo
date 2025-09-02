export const samplePosts = [
      {
        id: 1,
        author: { name: 'Dr. Abraham Nick', username: 'drabnick', verified: true },
        content: 'New research reveals that global temperatures are rising 20% faster than previously estimated. The implications for coastal communities are severe - we need immediate action on climate adaptation strategies.',
        topics: ['Climate Justice'],
        timestamp: '2 hours ago',
        credibilityScore: 92,
        biases: ['Western perspective dominant'],
        missingPerspectives: ['Indigenous climate knowledge not included'],
        contextLayer: 'This study focuses on North American data. Similar studies from Asia show even higher rates of warming.',
        engagement: { validates: 234, contextualizes: 56, challenges: 12 },
        isPulse: true
      },
      {
        id: 2,
        author: { name: 'Tech Weekly', username: 'techweekly' },
        content: 'Breaking: Major tech company announces they will make their AI models fully open source. This could democratize AI development but raises concerns about misuse.',
        topics: ['Technology'],
        timestamp: '4 hours ago',
        credibilityScore: 78,
        biases: ['Tech-optimist perspective'],
        missingPerspectives: ['Security researchers\' concerns', 'Developing nations\' access issues'],
        engagement: { validates: 145, contextualizes: 89, challenges: 34 }
      },
      {
        id: 3,
        author: { name: 'Human Rights Watch', username: 'hrw', verified: true },
        content: 'URGENT: Reports of internet shutdown in conflict zone preventing civilians from accessing emergency services and communicating with families. International intervention needed.',
        topics: ['Human Rights'],
        timestamp: '6 hours ago',
        credibilityScore: 88,
        biases: [],
        missingPerspectives: ['Government perspective (though contested)'],
        contextLayer: 'This is the 5th such shutdown in the region this year. UN has previously condemned these actions.',
        engagement: { validates: 567, contextualizes: 123, challenges: 8 },
        isPulse: true
      },
      {
        id: 4,
        author: { name: 'Philosophy Daily', username: 'phildaily' },
        content: 'Fascinating discussion on whether AI consciousness is possible. If machines can process information and respond adaptively, what separates that from human consciousness?',
        topics: ['Philosophy', 'Technology'],
        timestamp: '8 hours ago',
        credibilityScore: 65,
        biases: ['Materialist philosophy bias'],
        missingPerspectives: ['Eastern philosophical traditions', 'Neuroscience perspective'],
        engagement: { validates: 78, contextualizes: 145, challenges: 67 }
      }
    ];