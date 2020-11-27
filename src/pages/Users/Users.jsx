import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EditUser } from '../EditUser/EditUser';
import { Header } from '../../components/Header';
import { UserList } from '../UserList/UserList';
import { Text } from '../Text';

export const Users = () => (
  <div className="Users">
    <Header />

    <Switch>
      <Route exact path={['/users', '/users/edit']}>
        <EditUser />
      </Route>

      <Route path="/users/list">
        <UserList />
      </Route>

      <Route path="/users/text">
        <Text />
      </Route>
    </Switch>
  </div>
);
