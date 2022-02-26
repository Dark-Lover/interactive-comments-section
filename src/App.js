import { useState, useEffect } from "react";
import "./App.css";
import Comments from "./components/comments/Comments";

//* New Fetch to solve update UI issue

import services from "./redux/manage/axiosServices";
import { fetch_comments } from "./redux";
import { useDispatch, useSelector } from "react-redux";

const fetchData = async () => {
  try {
    const { getAll } = services;
    const jsonData = await getAll();
    console.log(jsonData.data.data[0]);
    return jsonData.data.data[0];
  } catch (error) {
    console.log("error from fetchData Func: ", error);
  }
};
//* END
function App() {
  const [newChange, setNewChange] = useState(false);
  const dataReady = useSelector((state) => state.newChange);
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state);
  const sortedComments = comments.sort(function (a, b) {
    return a.id - b.id;
  });

  useEffect(() => {
    if (!dataReady) {
      const myData = fetchData();
      myData
        .then((res) => {
          dispatch(fetch_comments(res));
          setNewChange(true);
        })
        .catch((err) => console.log(err));
    }
  }, [dataReady]);

  return (
    <Comments
      data={sortedComments}
      setNewChange={setNewChange}
      dataReady={dataReady}
    />
  );
}

export default App;
