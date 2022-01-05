import React from "react";
import ReactDom from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h1>Warning!</h1>
          <p>Are you sure, you want to do this?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 00:05pm"
          text="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jam"
          time="Today at 10:05pm"
          text="Excellent post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Lam" time="Today at 09:05pm" text="Good post!" />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
