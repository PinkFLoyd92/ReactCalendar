import { useContext } from 'react';
import { EditReminderContext } from './EditReminderContext';

const useEditReminder = () => {
  const [state, setState] = useContext(EditReminderContext);

  function toggleOpen() {
    setState(state => ({ ...state, isOpen: !state.isOpen }));
  }

  function setOpen(value) {
    if (!value) {
      setState(state => ({}));
    }

    setState(state => ({ ...state, isOpen: value }));
  }

  function setOpenDate(date, isOpen) {
    setState(state => ({ ...state, date, isOpen }));
  }

  const setStart = (value) => {
    setState(state => ({ ...state, start: value }));
  };

  const setEnd = (value) => {
    setState(state => ({ ...state, end: value }));
  };

  const setCity = (value) => {
    setState(state => ({ ...state, city: value }));
  };

  const setNote = (value) => {
    setState(state => ({ ...state, note: value }));
  };

  const setColor = (value) => {
    setState(state => ({ ...state, color: value }));
  };

  const reset = () => {
    setState(state => ({}));
  };

  const setOpenEditMode = (date, reminder) => {
    setState(state => ({
      ...reminder,
      date,
      editMode: true,
      isOpen: true,
    }));
  };


  return {
    toggleOpen,
    setOpen,
    setCity,
    setStart,
    setEnd,
    reset,
    setOpenDate,
    setOpenEditMode,
    setNote,
    isOpen: state.isOpen,
    reminderState: state,
    city: state.city,
    note: state.note,
    date: state.date,
    start: state.start,
    end: state.end,
    editMode: state.editMode,
    color: state.color,
    setColor,
  };
};

export default useEditReminder;
