import books from "../../books";
const search = (state = [], action) => {
  switch (action.type) {
    case "SEARCH": {
      // console.log(action,action.search+"from search function");
      // console.log(books+"inside searc function");
      state = [];
      for (let i = 0; i < books.length; i++) {
        if (
          books[i].title.toLowerCase().indexOf(action.search.toLowerCase()) >= 0
        ) {
          //state = books[i];
          state = [...state, books[i]];
          // console.log(books[i]+"inside for loop");
        }
      }
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};

export default search;
