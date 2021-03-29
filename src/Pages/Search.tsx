import { FormEvent, useRef } from "react";
import { getBook, getSoloBook } from "../Utils/Fetch";
import { useState } from "react";
import { BookData } from "../Utils/Type";
import { motion as m } from "framer-motion";
import SelectedBook from "../Component/SelectedBook";
import {
    topFunction,
    scrollFunction
} from "../Utils/constants";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [books, setBooks] = useState<BookData[] | undefined>(undefined);
    const [selectedBook, setSelectedBook] = useState<BookData | undefined>(undefined);

    const scrollButton = useRef<HTMLButtonElement>(null);

    window.onscroll = () => {
        scrollFunction(scrollButton);
    };




    const getSelectedBook = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setBooks([]);
        const bookName = e.currentTarget.getAttribute("data-category");
        if (bookName) {
            const selectBook = await getSoloBook(bookName);
            setSelectedBook(selectBook);
            console.log(selectedBook);
        }
    }


    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (searchTerm) {
            try {
                const book = await getBook(searchTerm);
                setBooks(book);
                setSelectedBook(undefined)

                console.log(book);

            }
            catch {
                setError(error);
            }
        }
    }


    return (


        <div className="search-box">
            <form role="search" onSubmit={(e) => handleSubmit(e)}>
                <input className="search-input" type="text" placeholder="Search something..." onChange={(e) => setSearchTerm(e.target.value)}></input>
                <button className="search-btn"><i className="fas fa-search"></i></button>
            </form>
            <div className="book-content">
                {books &&
                    books?.map((book, index) => {
                        return (
                            <>{
                                book.volumeInfo.imageLinks && (
                                    <m.div className="book" key={index}
                                        whileHover={{
                                            position: "relative",
                                            zIndex: 1,
                                            scale: [1, 1.1, 1.05],
                                            rotate: [0, 5, -5, 0],
                                            transition: {
                                                duration: 0.3,
                                            },
                                        }}>
                                        <button className="book-button" data-category={book.id} onClick={(e) => getSelectedBook(e)}>
                                            <div className="book-image">
                                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />
                                            </div>
                                        </button>
                                        <div className="book-info">
                                            <h4>{book.volumeInfo.title.length > 100 ? book.volumeInfo.title.substring(0, 100) + "..." : book.volumeInfo.title}</h4>
                                        </div>

                                    </m.div>

                                )
                            }</>
                        )
                    })
                }
                {selectedBook &&

                    <SelectedBook selectedBook={selectedBook} setSelectedBook={setSelectedBook} setBooks={setBooks} />

                }


            </div>

            <button
                onClick={() => topFunction()}
                id="toTheTop"
                title="go to top"
                ref={scrollButton}
            >
                <i className="fas fa-arrow-circle-up fa-2x"></i>
            </button>

        </div>
    );
}

export default Search;