import { useState, useEffect } from "react";

/* It takes key and defaultValue if the data is not present */
const useBookmarkBlogs = (key, defaultValue) => {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState(() => {
    let currentValue;

    /* trying to get te data from local storage */
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || defaultValue);
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  /* trying to get te data from local storage */
  function getValue() {
    var data = JSON.parse(localStorage.getItem(key));
    if (data === null) {
      localStorage.setItem(key, JSON.stringify([]));
      return JSON.parse(localStorage.getItem(key));
    }
    return data;
  }

  /* add blog as bookmark */
  function addToBookmark(blogToBookmark) {
    var data = getValue();
    if (!data.includes(blogToBookmark)) {
      data.unshift(blogToBookmark); // add blog to the starting of the array
      setBookmarkedBlogs(data);
    }
  }

  function removeFromBookmark(blogToRemove) {
    var data = getValue();
    setBookmarkedBlogs(data.filter((blog) => blog.slug != blogToRemove));
  }

  /* it check if the bookmark is already present or not if yes then return true else false */
  function isAlreadyBookmarked(searchBySlug) {
    return bookmarkedBlogs
      .map((bookmarkedBlog) => bookmarkedBlog.slug === searchBySlug)
      .includes(true);
  }

  /* update the local storage as bookmarkedBlogs value change */
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(bookmarkedBlogs));
  }, [bookmarkedBlogs]);

  return {
    bookmarkedBlogs,
    addToBookmark,
    removeFromBookmark,
    isAlreadyBookmarked,
  };
};

export default useBookmarkBlogs;
