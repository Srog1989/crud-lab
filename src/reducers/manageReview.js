import cuid from 'cuid';

export default function manageReviews(state =  {
    reviews: []
}, action)  {
  switch (action.type) {
    case 'ADD_REVIEW':
      const review = { id: Math.random(), text: action.text }
      return { ...state, reviews: [...state.reviews, review] }
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return { reviews };
    default:
      return state;
  }
};
