"use client"
import { useState } from 'react';
import { db, addDoc, collection } from '../../firebaseConfig'; // Import Firebase methods

const Newsletter = () => {
  const [idea, setIdea] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setIdea(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idea) {
      alert('Please enter a valid idea.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Add the idea to Firestore under the 'usersIdeas' collection
      await addDoc(collection(db, 'usersIdeas'), {
        idea: idea,
        timestamp: new Date(),
      });

      alert('Your idea has been submitted!');
      setIdea('');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('There was an error submitting your idea. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="join-section" className="-mt-32 relative z-10">
      <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
          <div>
            <h3 className="text-5xl font-bold mb-3">Your Idea</h3>
            <h4 className="text-lg font-medium mb-7">Share Your Valuable Ideas With Us</h4>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                name="idea"
                className="py-4 text-sm w-full text-black bg-white rounded-md pl-4"
                placeholder="Write here"
                autoComplete="off"
                value={idea}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-purple hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;