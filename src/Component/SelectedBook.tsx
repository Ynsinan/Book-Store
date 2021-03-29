import { Dispatch, SetStateAction } from "react"
import { BookData } from "../Utils/Type"
import { getClickAuthorBook } from "../Utils/Fetch";


type bookProps = {
    selectedBook: BookData;
    setSelectedBook: Dispatch<SetStateAction<BookData | undefined>>;
    setBooks: Dispatch<SetStateAction<BookData[] | undefined>>;

}



export default function SelectedBook({ selectedBook, setSelectedBook, setBooks }: bookProps) {

    const getSelectedAuthor = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setBooks([]);
        const authorName = e.currentTarget.getAttribute("data-category");
        if (authorName) {
            const selectAuthor = await getClickAuthorBook(authorName);
            console.log(selectAuthor);
            setSelectedBook(undefined);
            setBooks(selectAuthor)

        }
    }

    return (
        <div className="selected-book">
            <div className="left-area">
                <div className="image">
                    <img src={selectedBook?.volumeInfo?.imageLinks?.thumbnail} alt="" />
                </div>
                <div className="info">
                    <button className="author-button" data-category={selectedBook.volumeInfo.authors} onClick={(e) => getSelectedAuthor(e)}
                    ><h4>Author : {selectedBook.volumeInfo.authors}</h4></button>
                    <h6>Public Date : {selectedBook.volumeInfo.publishedDate}</h6>
                    <h6>Publisher : {selectedBook.volumeInfo.publisher}</h6>
                    <h6>Page Count : {selectedBook.volumeInfo.pageCount}</h6>
                    {selectedBook.accessInfo.pdf.downloadLink && (
                        <h6>Pdf :
                            <a href={selectedBook.accessInfo.pdf.downloadLink}>
                                <i className="fa fa-download"></i>
                            </a>
                        </h6>
                    )}
                    {selectedBook.saleInfo.buyLink && (
                        <h6 >Sale :
                            <a href={selectedBook.saleInfo.buyLink}>
                                <i className="fas fa-book-open"></i>
                            </a>
                        </h6>
                    )}
                </div>
            </div>
            <div className="right-area">
                <h1 style={{ color: "white" }}>
                    {selectedBook.volumeInfo.title.length > 100 ? selectedBook.volumeInfo.title.substring(0, 100) + "..." : selectedBook.volumeInfo.title}
                </h1>

                {selectedBook.volumeInfo.description && (
                    <p className="description" dangerouslySetInnerHTML={{ __html: selectedBook.volumeInfo.description }} />
                )}
                {!selectedBook.volumeInfo.description && (
                    <p className="description">
                        Description text not found ...</p>
                )}


            </div>

        </div>
    )
}


