/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import "/src/css/pages/bookfind.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingSpin from "react-loading-spin";
import { ThemeContext } from "../../App";

export const BookFind = () => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext)
  useEffect(()=>{
    Aos.init()
    Aos.refresh();

  },[])
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
const[loader,setLoader] = useState(false);
  const handleChange = (e) => {
    const searchVal = e.target.value;
    setBook(searchVal);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoader(true);
    await axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=AIzaSyBTVJK-uh0NI2i-G2GUtNUAK81xsBeACY4&maxResults=30"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
    };
  return (
    <div className="bookFindMain">
      <div className="wrapperBookPage">
      <h1 className="pageHeading">Book Finder
      <Link to='/home' className="homeBtn"><KeyboardBackspaceRoundedIcon/></Link>
      </h1>
      <form className="formWrapper" onSubmit={handleSubmit}>
        <input
          className="inputText"
          type="text"
          onChange={handleChange}
          placeholder="Search for Books"
          autoComplete="off"
        />
        <button className="inputButton" type="submit">
          Search
        </button>
      </form>
      {
        loader? <LoadingSpin primaryColor="rgb(9, 86, 209)"/>:<div className="bookWrapper">
        {result.map((book) => {
          return (
            <div className="book" data-aos="fade-up">
              <Link to={book.volumeInfo.previewLink}>
                <div className="bookImage">
                  <img
                    src={
                      book.volumeInfo.imageLinks === undefined
                        ? ""
                        : `${book.volumeInfo.imageLinks.thumbnail}`
                    }
                    alt={book.title}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      }
    </div>
    </div>
  );
};
