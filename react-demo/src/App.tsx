import React from 'react';
import './App.css';
import HardcodedUserCard from './components/hardcoded-user-card/hardcoded-user-card.component';
import WithpropsUserCard from './components/withprops-user-card/withprops-user-card.component';
import UserCard from './components/user-card/user-card.component';
import UserCardList from './components/user-card-list/user-card-list.component';
import SearchUserCardContainer from './components/user-card-container/user-card-container.component';
import users from './users.json';


function App() {
  return (
    <div className="App">
      
      {/* <HardcodedUserCard />
      <WithpropsUserCard firstName="Ricardo2" lastName="Medina2" email="Ricardo_Medina2@epam.com" />
      <UserCard firstName="Ricardo2" lastName="Medina2" email="Ricardo_Medina2@epam.com" /> */}
      
      {/* <UserCardList users={users}/> */}
      <SearchUserCardContainer users={users} />
    </div>
  );
}

export default App;
