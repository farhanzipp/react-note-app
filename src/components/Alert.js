const handleClick = ({text}) => {
  alert(text);
}

const handleClickConfirm = ( item, action, type, text) => {
  const confirmation = confirm(`${text}`);

  if (confirmation) {
    if (type === "delete") {
      action((notes) => notes.filter((note) => note.id !== item));
    } else if (type === "archive" || type === "unarchive") {
      action((notes) =>
        notes.map((note) => {
          if (note.id === item) {
            return { ...note, archived: !note.archived };
          }
          return note;
        })
      );
    }
  }
}

export { handleClick, handleClickConfirm };