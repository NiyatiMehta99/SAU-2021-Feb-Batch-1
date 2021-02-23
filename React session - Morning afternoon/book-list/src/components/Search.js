import React, { useState } from "react";
import books from "../books";
import Button from "@material-ui/core/Button";
import SearchBook from "./SearchBook";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/action/index";

export default function Search() {
  const [searchstring, changesearch] = useState("");
  const [expand, setexpand] = useState(false);

  //var [result,setresult]=useState({})

  var result = useSelector((state) => state.search) || [];
  //console.log(result);
  const dispatch = useDispatch();

  function handlechange(event) {
    changesearch(event.target.value);
  }

  function handleclick() {
    // for(let i=0;i<books.length;i++)
    // {
    //     if(books[i].title===search)
    //     {
    //         setresult(books[i])
    //     }
    // }
    dispatch(search(searchstring));
    // console.log(res);
    //console.log(result);
    result = [];
    setexpand(true);
  }

  return (
    <>
      <input
        type="text"
        onChange={handlechange}
        placeholder="Enter a word to search by Title"
        style={{ height: "30px", margin: "20px",width:"200px" }}
      />
      <Button
        variant="contained"
        onClick={handleclick}
        style={{
          margin: "20px",
          backgroundColor: "white",
          color: "tomato",
          border: "tomato solid 0.5px",
        }}
      >
        Search
      </Button>
      <div style={{ display: "flex" }}>
        {expand ? result.map((item) => <SearchBook search={item} />) : null}
      </div>
    </>
  );
}
