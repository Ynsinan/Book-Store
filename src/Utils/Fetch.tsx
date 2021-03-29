import axios from "axios";
import { BookData } from "./Type";

const API_KEY = "AIzaSyCvz9Y7fMTgw75IW-G7E5DFI-m1ASkRkjw";
export const getBook = async (bookName: string) => {
    const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}&maxResults=40`
    );
    const { items } = await response.data
    return items as BookData[];
}

export const getSoloBook = async (bookId: string) => {
    const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );
    const data = await response.data
    return data as BookData;
}
export const getClickAuthorBook = async (clickAuthor: string) => {
    const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${clickAuthor}&key=${API_KEY}`
    );
    const { items } = await response.data
    return items as BookData[];
}
//https://www.googleapis.com/books/v1/volumes?q=inauthor:tolkien&key=AIzaSyCvz9Y7fMTgw75IW-G7E5DFI-m1ASkRkjw