
const users = [
    { id: 1, username: 'admin', role: 'admin' },
    { id: 2, username: 'user', role: 'user' }
  ];
  
  const roles = {
    admin: ['public', 'user-profile', 'admin-panel'],
    user: ['public', 'user-profile']
  };
  
  module.exports = { users, roles };
  