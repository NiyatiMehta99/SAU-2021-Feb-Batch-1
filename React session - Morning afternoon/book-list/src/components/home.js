import React from "react";
import { useState } from "react";
import books from "../books";
import SimpleCard from "./book-intro";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import Search from "./Search";

export default function Home() {
  //console.log(books);

  const [expand, setExpand] = useState(false);
  return (
    <>
      <Header />
      <Search />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setExpand(!expand)}
        style={{
          margin: "20px",
          backgroundColor: "white",
          color: "tomato",
          border: "tomato solid 0.5px",
        }}
      >
        List Books
      </Button>
      <div style={{ display: "flex", marginBottom: "50px" }}>
        {expand
          ? books.map((book) => (
              <SimpleCard
                title={book.title}
                author={book.author}
                key={book.id}
                id={book.id}
              />
            ))
          : null}
      </div>
    </>
  );
}
