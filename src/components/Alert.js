const handleClick = ({title, text}) => {
  alert(title + "\n" + text);
}

const handleClickConfirm = ( item, action, type, title, text, confirmButtonText) => {
  const confirmation = confirm(`${title}\n${text}\n\n${confirmButtonText}`);

  if (confirmation) {
    if (type === "delete") {
      action((notes) => notes.filter((note) => note.id !== item));
      alert("Deleted!\nYour file has been deleted.");
    } else if (type === "archive" || type === "unarchive") {
      action((notes) =>
        notes.map((note) => {
          if (note.id === item) {
            return { ...note, archived: !note.archived };
          }
          return note;
        })
      );
      if (type === "archive") {
        alert("Archived!\nThe note has been archived.");
      } else {
        alert("Unarchived!\nThe note has been unarchived.");
      }
    }
  }
}

export { handleClick, handleClickConfirm };