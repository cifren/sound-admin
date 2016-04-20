import _EditPage from "./EditPage";
export {_EditPage as EditPage};
import _CreatePage from "./CreatePage";
export {_CreatePage as CreatePage};
import _ListPage from "./ListPage";
export {_ListPage as ListPage};
import _ShowPage from "./ShowPage";
export {_ShowPage as ShowPage};

const components = {
  "EditPage": _EditPage,
  "CreatePage": _CreatePage,
  "ListPage": _ListPage,
  "ShowPage": _ShowPage
};

export default components;