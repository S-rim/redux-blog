import React from "react";
import { AddPost } from "../../components";
import useChangeInput from "../../lib/hooks/useChangeInputs";
import { useDispatch } from "react-redux";
import { writePost } from "../../store/modules/post/actions";
import { SuccessToast, ErrorToast } from "../../lib/toast";

const AddPostContainer = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useChangeInput({ title: "", content: "" });

  const onAddPost = () => {
    dispatch(writePost(postData))
      .then(() => {
        SuccessToast("글 쓰기가 정상적으로 완료되었습니다");
      })
      .catch((err) => {
        ErrorToast(err);
      });
  };

  return (
    <>
      <AddPost setPostData={setPostData} onAddPost={onAddPost} />
    </>
  );
};

export default AddPostContainer;
