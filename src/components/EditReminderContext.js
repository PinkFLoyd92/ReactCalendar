import React, { useState } from 'react';

const EditReminderContext = React.createContext([{}, () => {}]);

const EditReminderProvider = (props) => {
  const [state, setState] = useState({
    isOpen: false,
    start: '7:30',
    end: '7:30',
    date: null,
    note: '',
    city: ''
  });

  const { children } = props;
  return (
    <EditReminderContext.Provider value={[state, setState]}>
      {children}
    </EditReminderContext.Provider>
  );
};

export { EditReminderContext, EditReminderProvider };
