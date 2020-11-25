/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { UserList } from '../UserList/UserList';

export const User = ({ users }) => {
  useEffect(() => {

  }, []);

  return (
    <div className="Users">
      <div>
        1
      </div>

      <div>
        <UserList
          users={users}
        />
      </div>

      <div>
        3
      </div>
    </div>
  );
};
