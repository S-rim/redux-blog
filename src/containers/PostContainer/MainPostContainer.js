import React, { useState, useCallback, useEffect } from "react";
import { MainPost } from "../../components";
import { useDispatch } from "react-redux";
import { WarningToast, ErrorToast, SuccessToast } from "../../lib/toast";
import { getPostList, removePost } from "../../store/modules/post/actions";

const MainPostContainer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [post, setPost] = useState([]);

  const prevPage = useCallback(() => {
    page <= 0 ? WarningToast("가장 최근 페이지입니다.") : setPage(page - 1);
  }, [page]);

  const nextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const deletePost = (postId) => {
    removePost(postId)
      .then(() => {
        SuccessToast("삭제되었습니다.");
      })
      .catch((err) => {
        switch (err.response.status) {
          case 403:
            ErrorToast("자신의 글만 삭제할 수 있습니다.");
            break;
          case 500:
            ErrorToast("서버 에러입니다.");
            break;
          default:
            ErrorToast("에러가 발생했습니다. 다시 시도하세요.");
            break;
        }
      });
  };

  useEffect(() => {
    dispatch(getPostList(page))
      .then((res) => {
        setPost(res.payload.data.data);
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
  }, [page]);

  return (
    <>
      <MainPost prevPage={prevPage} nextPage={nextPage} page={page} posts={post} deletePost={deletePost} />
    </>
  );
};

export default MainPostContainer;
