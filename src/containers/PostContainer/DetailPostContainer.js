import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DetailPost } from "../../components";
import { getDetailPost } from "../../store/modules/post/actions";
import { useLocation } from "react-router-dom";
import { ErrorToast } from "../../lib/toast";

const DetailPostContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [postData, setPostData] = useState({});

  useEffect(() => {
    dispatch(getDetailPost(postId))
      .then((res) => {
        setPostData(res.payload.data.data);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 500:
            ErrorToast("서버 에러입니다.");
            break;
          default:
            ErrorToast("에러가 발생했습니다. 다시 시도하세요.");
            break;
        }
      });
  }, []);
  return <DetailPost postData={postData}></DetailPost>;
};

export default DetailPostContainer;
