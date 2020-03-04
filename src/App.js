import React from "react";
import { Provider } from "react-redux";

// import BlogPost from "./BlogPost/BlogPost";

import store from "./redux/store";
import BlogHook from "./BlogPost/BlogHook";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <BlogPost /> */}
        {/* <button className="btn btn-primary">Tombol</button> */}
        <BlogHook />
      </div>
    </Provider>
  );
}

export default App;
