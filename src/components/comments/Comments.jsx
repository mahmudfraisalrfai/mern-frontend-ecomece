import React, { useState } from "react";
import "./Comments.css";
import { getcartData, patchServerData } from "../../helper/Helper";
import { useParams } from "react-router-dom";

function Comments({ objComments }) {
  const { ProductId } = useParams();
  const [comments, setComments] = useState(objComments || []);

  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const handleAddComment = () => {
    if (text) {
      if (localStorage.getItem("auth-token")) {
        const headers = { "auth-token": localStorage.getItem("auth-token") };
        getcartData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/name`,
          (data) => {
            if (data.success) {
              setName(data.name);
              const newComment = { text, name: data.name };

              // تحديث الحالة مع التعليق الجديد
              setComments([...comments, newComment]);

              const query = {
                text: text,
                name: data.name,
                productId: ProductId,
              };

              // إرسال البيانات للخادم
              patchServerData(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/api/product`,
                (data) => data,
                query
              );
            } else {
            }
          },
          headers
        );

        setText("");
      } else {
        window.alert("please login or signup");
      }
    } else {
      window.alert("please write in the text field");
    }
  };

  return (
    <div className="comment-container">
      <h2>Comments</h2>

      <div className="comment-input">
        <textarea
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={handleAddComment}>Post Comment</button>
      </div>

      <div className="comments-list">
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="user-avatar">{comment.name[0]}</div>
              <div className="comment-content">
                <span className="user-name">{comment.name}</span>
                <p>{comment.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </div>
  );
}

export default Comments;
