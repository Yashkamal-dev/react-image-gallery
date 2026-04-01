import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=30`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [page]);

  const galleryLoader = () => {
    if (data.length == 0) {
      return <h3>Loading...</h3>;
    } else {
      return data.map((item, idx) => {
        return (
          <a href={item.url} key={item.id} className="img-container">
            <img src={item.download_url} alt="image of art." />
            <h2>{item.author}</h2>
          </a>
        );
      });
    }
  };

  const paginationFun = () => {
    return (
      <div className="pagination">
        <button onClick={paginationPrevFun} className="paginationBtn">
          Prev
        </button>
        <h1>{page}</h1>
        <button onClick={paginationNextFun} className="paginationBtn">
          Next
        </button>
      </div>
    );
  };

  const paginationPrevFun = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const paginationNextFun = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="gallery">{galleryLoader()}</div>
      {data.length > 0 ? paginationFun() : false}
    </div>
  );
};

export default App;
