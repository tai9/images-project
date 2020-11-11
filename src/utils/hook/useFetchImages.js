import { useEffect, useState } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImages(page, searchTerm) {
  const [images, setImages] = useState([]);
  const [errors, seterrors] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const fetch = () => {
    const url =
      searchTerm === null ? "photos?" : `search/photos?query=${searchTerm}&`;
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        searchTerm === null ? fetchRandom(res) : fetchSearch(res);
      })
      .catch((e) => {
        setisLoading(false);
        seterrors("Unable to fetch images");
      });
  };

  const fetchRandom = (res) => {
    setImages([...images, ...res.data]);
    setisLoading(false);
  };

  const fetchSearch = (res) => {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);

    setisLoading(false);
  };

  useEffect(() => {
    setisLoading(true);
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchTerm]);

  return { images, setImages, errors, isLoading };
}
