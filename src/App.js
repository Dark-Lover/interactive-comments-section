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
  // console.log("dataready= :", dataReady);
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state);

  //! come from comments
  useEffect(() => {
    console.log("comments useEffect");
    if (!dataReady) {
      const myData = fetchData();
      myData
        .then((res) => {
          dispatch(fetch_comments(res));
          // setDataReady(true);
          // console.log("dataready after fetch: ", dataReady);
          setNewChange(true);
        })
        .catch((err) => console.log(err));
    }
    // setNewChange(false);
  }, [dataReady]);
  //!

  return (
    <Comments
      data={comments}
      setNewChange={setNewChange}
      dataReady={dataReady}
    />
  );
}

export default App;
