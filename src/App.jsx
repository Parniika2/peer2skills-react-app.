import React, { useState } from 'react';

// Main App component
const App = () => {
  const [screen, setScreen] = useState('home');
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    skill: '',
  });

  // Hardcoded data to simulate a backend
  const tasks = [
    {
      id: 1,
      title: 'Help with Python Script',
      description: 'Need assistance with a Python script for data analysis. It involves pandas and numpy.',
      budget: '₹300',
      deadline: 'Due Tomorrow',
      badge: 'Gold',
      skill: 'Python',
      posterRating: 4.7,
      posterReviews: 15,
    },
    {
      id: 2,
      title: 'Chemistry Lab Report',
      description: 'Need help proofreading and formatting a chemistry lab report on titration.',
      budget: '₹500',
      deadline: '2 days left',
      badge: 'Silver',
      skill: 'Chemistry',
      posterRating: 4.5,
      posterReviews: 8,
    },
    {
      id: 3,
      title: 'Economics Micro-Theory',
      description: 'Struggling with a few concepts in microeconomics, specifically elasticity.',
      budget: '₹250',
      deadline: 'Today',
      badge: 'Bronze',
      skill: 'Economics',
      posterRating: 4.1,
      posterReviews: 3,
    },
    {
      id: 4,
      title: 'Literature Essay Edit',
      description: 'Looking for someone to review my essay on "To Kill a Mockingbird" for clarity and grammar.',
      budget: '₹400',
      deadline: '3 days left',
      badge: 'Silver',
      skill: 'Literature',
      posterRating: 4.9,
      posterReviews: 22,
    },
  ];

  const userProfile = {
    name: 'Jane Doe',
    photo: 'https://placehold.co/100x100/A0B2C3/FFFFFF?text=JD',
    expertise: ['Python', 'Data Science', 'Web Dev'],
    averageRating: '4.8',
    completedTasks: 12,
    totalEarnings: '₹5,600',
    badges: ['First Task Completed', 'Top-Rated Tutor', 'Pro Python Peer'],
  };

  const userFeedback = [
    { reviewer: 'John S.', rating: 5, comment: 'Jane helped me debug my Python script. Very quick and clear in her explanations. Highly recommend!' },
    { reviewer: 'Emily C.', rating: 4, comment: 'Great job with the chemistry report. The formatting was perfect and she caught all the typos.' },
    { reviewer: 'Mike B.', rating: 5, comment: 'Fast and efficient. Jane solved my economics problem in 10 minutes!' },
  ];

  const chatMessages = [
    { sender: 'other', text: 'Hi, I saw you accepted my task. When are you free to chat?' },
    { sender: 'self', text: 'Hi! I can connect in about 30 minutes.' },
    { sender: 'other', text: 'Sounds good. I have the notes ready.' },
  ];

  const handlePostTask = (e) => {
    e.preventDefault();
    console.log('Task submitted:', taskData);
    setScreen('home');
    alert('Task Posted Successfully!');
  };
  
  const alert = (message) => {
    // Custom alert function to display a modal instead of a native alert
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
    modal.innerHTML = `
      <div class="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full mx-auto">
        <p class="text-lg font-semibold mb-4">${message}</p>
        <button id="closeAlert" class="px-6 py-2 bg-blue-500 text-white rounded-full">OK</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeAlert').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  };

  const renderIcon = (skill) => {
    switch (skill) {
      case 'Python':
        return (
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5V14h2v3.5h-2zM12 12.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
        );
      case 'Chemistry':
        return (
          <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-10V8h2v4h-2zm0 4v-2h2v2h-2z"/>
          </svg>
        );
      case 'Economics':
        return (
          <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2-4H7.5c-.83 0-1.5.67-1.5 1.5v3.5c0 .83.67 1.5 1.5 1.5H10V10zm4 0h-2.5v7H14c.83 0 1.5-.67 1.5-1.5V11.5c0-.83-.67-1.5-1.5-1.5z"/>
          </svg>
        );
      case 'Literature':
        return (
          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 2.01L5 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 19H5V5h11v14z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
          </svg>
        );
    }
  };

  const renderBadge = (tier) => {
    switch (tier) {
      case 'Bronze':
        return <span className="inline-block px-2 py-1 text-xs font-semibold text-amber-800 bg-amber-200 rounded-full">Bronze</span>;
      case 'Silver':
        return <span className="inline-block px-2 py-1 text-xs font-semibold text-slate-800 bg-slate-300 rounded-full">Silver</span>;
      case 'Gold':
        return <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-300 rounded-full">Gold</span>;
      default:
        return null;
    }
  };
  
  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return (
          <div className="p-4">
            <div className="flex justify-between items-center py-4 px-6 bg-cyan-100 rounded-xl mb-4 shadow-sm">
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-cyan-800">Peer2Skills</span>
                </div>
                <svg className="w-6 h-6 text-cyan-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 8h2v-4h-2v4z"/>
                </svg>
            </div>

            <div className="bg-cyan-50 p-4 rounded-xl shadow-md mb-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                    <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                    <span className="font-semibold text-cyan-800">Tasks matched to your skills:</span>
                </div>
                <p className="text-sm text-cyan-700">Need help with JavaScript? Find it here!</p>
            </div>

            <h2 className="text-xl font-bold mb-4 text-gray-700">Available Tasks</h2>
            <div className="space-y-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="bg-white p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => { setSelectedTask(task); setScreen('taskDetails'); }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{renderIcon(task.skill)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-md font-semibold text-gray-800">{task.title}</h3>
                        {renderBadge(task.badge)}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{task.description}</p>
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-cyan-600">{task.budget}</span>
                        <span className="text-gray-400">{task.deadline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="fixed bottom-6 right-6 w-14 h-14 bg-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white text-3xl transition-transform transform hover:scale-110"
              onClick={() => setScreen('postTask')}
            >
              +
            </button>
          </div>
        );
      case 'postTask':
        return (
          <div className="p-4 bg-white min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Post a New Task</h2>
            <form onSubmit={handlePostTask} className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2 font-medium">Task Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={taskData.title}
                  onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                  placeholder="e.g., Help with a Python script"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-medium">Description</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={taskData.description}
                  onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                  placeholder="Describe your task in detail"
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2 font-medium">Budget (₹)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    value={taskData.budget}
                    onChange={(e) => setTaskData({ ...taskData, budget: e.target.value })}
                    placeholder="e.g., 500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 font-medium">Deadline</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    value={taskData.deadline}
                    onChange={(e) => setTaskData({ ...taskData, deadline: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-medium">Skill Category</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={taskData.skill}
                  onChange={(e) => setTaskData({ ...taskData, skill: e.target.value })}
                  required
                >
                  <option value="">Select a skill</option>
                  <option value="Python">Python</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Economics">Economics</option>
                  <option value="Literature">Literature</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-medium">File Upload</label>
                <input
                  type="file"
                  className="w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-cyan-50 file:text-cyan-700
                    hover:file:bg-cyan-100"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                Post Task
              </button>
            </form>
          </div>
        );
      case 'taskDetails':
        return (
          <div className="p-4 bg-white min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedTask.title}</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              {renderIcon(selectedTask.skill)}
              <span>{selectedTask.skill}</span>
              {renderBadge(selectedTask.badge)}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl shadow-inner mb-6">
              <p className="text-gray-700 mb-4">{selectedTask.description}</p>
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>{selectedTask.budget}</span>
                <span>{selectedTask.deadline}</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md mb-6 border-l-4 border-cyan-400">
              <h3 className="font-semibold text-gray-700 mb-2">Poster's Trust Profile</h3>
              <div className="flex items-center text-sm text-gray-600 space-x-2">
                <span className="text-lg text-yellow-400">⭐</span>
                <span>{selectedTask.posterRating} rating from {selectedTask.posterReviews} reviews</span>
              </div>
            </div>
            
            <button
              className="w-full bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 mt-4"
              onClick={() => setScreen('chat')}
            >
              Accept Task
            </button>
          </div>
        );
      case 'chat':
        return (
          <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-none p-4 bg-cyan-500 text-white shadow-md">
              <h2 className="text-lg font-bold">Python Scripting Help</h2>
              <p className="text-sm font-medium opacity-80">Status: In Progress</p>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'self' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-xs ${msg.sender === 'self' ? 'bg-cyan-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-none p-4 bg-white border-t border-gray-200 flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-cyan-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V6h1.5z"/>
                </svg>
              </button>
              <input
                type="text"
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none"
                placeholder="Type a message..."
              />
              <button className="p-2 text-cyan-500 hover:text-cyan-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>

            <button
              className="w-full bg-green-500 text-white font-bold py-4 rounded-none shadow-lg transition-transform transform hover:scale-105"
              onClick={() => setScreen('payment')}
            >
              Mark as Completed
            </button>
          </div>
        );
      case 'payment':
        return (
          <div className="p-4 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Complete & Pay</h2>
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Summary</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Task Fee</span>
                  <span className="font-bold text-gray-800">₹{selectedTask?.budget.replace('₹', '') || '0'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee (10%)</span>
                  <span className="font-bold text-gray-800">₹{Math.round(parseInt(selectedTask?.budget.replace('₹', '') || '0') * 0.1)}</span>
                </div>
                <div className="border-t border-dashed border-gray-300 my-4"></div>
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>₹{parseInt(selectedTask?.budget.replace('₹', '') || '0') + Math.round(parseInt(selectedTask?.budget.replace('₹', '') || '0') * 0.1)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Payment Options</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-cyan-50 transition-colors">
                  <span className="font-medium text-gray-700">UPI</span>
                  <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-cyan-50 transition-colors">
                  <span className="font-medium text-gray-700">Wallet</span>
                  <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-cyan-50 transition-colors">
                  <span className="font-medium text-gray-700">Card</span>
                  <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </button>
              </div>
            </div>

            <button
              className="w-full bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
              onClick={() => alert('Payment confirmed!')}
            >
              Confirm Payment
            </button>
          </div>
        );
      case 'gamification':
        const badges = [
          { name: 'First Task Completed', desc: 'Completed your very first task', icon: <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> },
          { name: 'Top-Rated Tutor', desc: 'Maintained an average rating above 4.5', icon: <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> },
          { name: 'Pro Python Peer', desc: 'Completed 5+ tasks in the Python category', icon: renderIcon('Python') },
        ];
        return (
          <div className="p-4 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Achievements</h2>
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Progress Tiers</h3>
              <div className="flex items-center space-x-2 mb-2">
                {renderBadge('Silver')}
                <span className="text-lg font-medium text-gray-800">You are a Silver Tier Peer!</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">You need 100 more points to reach Gold.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Badges Earned</h3>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="bg-cyan-50 p-4 rounded-xl text-center shadow-sm flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-2">{badge.icon}</div>
                    <span className="font-semibold text-sm text-gray-800">{badge.name}</span>
                    <p className="text-xs text-gray-500">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'review':
        return (
          <div className="p-4 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Leave a Review</h2>
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Rate your experience</h3>
              <div className="flex justify-center space-x-2 text-3xl mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">⭐</span>
                ))}
              </div>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl h-24 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Write your feedback here..."
              ></textarea>
            </div>
            <button className="w-full bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              Submit Review
            </button>
          </div>
        );
      case 'profile':
        return (
          <div className="p-4 bg-gray-50 min-h-screen">
            <div className="flex flex-col items-center mb-6">
              <img src={userProfile.photo} alt="Profile" className="w-24 h-24 rounded-full mb-4 shadow-lg"/>
              <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
              <div className="flex space-x-2 mt-2">
                {userProfile.expertise.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Stats</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="block text-xl font-bold text-gray-800">{userProfile.completedTasks}</span>
                  <span className="text-sm text-gray-500">Tasks</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-gray-800">{userProfile.totalEarnings}</span>
                  <span className="text-sm text-gray-500">Earnings</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-gray-800">{userProfile.averageRating} ⭐</span>
                  <span className="text-sm text-gray-500">Rating</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Badges</h3>
              <div className="grid grid-cols-2 gap-4">
                {userProfile.badges.map((badge, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
                    <span className="block text-md font-medium text-gray-800">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">User Feedback</h3>
              <div className="space-y-4">
                {userFeedback.map((feedback, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-cyan-700">{feedback.reviewer}</span>
                      <span className="text-yellow-400">{'⭐'.repeat(feedback.rating)}</span>
                    </div>
                    <p className="text-sm text-gray-600">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="w-full bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              Contact
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
      `}</style>
      <div className="w-full max-w-sm mx-auto bg-gray-50 shadow-lg relative min-h-screen">
        {renderScreen()}
      </div>
      
      <div className="fixed bottom-0 w-full max-w-sm bg-white border-t border-gray-200 shadow-xl flex justify-around py-2 z-50">
        <button className="flex flex-col items-center text-cyan-600 p-2" onClick={() => setScreen('home')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3 9v11c0 1.1.9 2 2 2h4v-7h6v7h4c1.1 0 2-.9 2-2V9l-9-7z"/></svg>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 p-2" onClick={() => setScreen('gamification')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 11.55l8-4.5v9l-8 4.5-8-4.5v-9l8-4.5zM12 4.09L6.5 7.15l5.5 3.08L17.5 7.15zM4 14.5v-7l5 2.8v7zM15 14.5v-7l5 2.8v7z"/></svg>
          <span className="text-xs mt-1">Badges</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 p-2" onClick={() => setScreen('review')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span className="text-xs mt-1">Reviews</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 p-2" onClick={() => setScreen('profile')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default App;
