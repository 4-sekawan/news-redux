import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; // Pages
import { Provider } from "react-redux";

import store from "./redux/store";

import BlogHook from "./BlogPost/BlogHook";
import NewsPage from "./BlogPost/NewsPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={BlogHook} />
        <Route path="/news/:newsId" component={NewsPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
