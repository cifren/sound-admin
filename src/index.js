// Components
"use strict";

import {pool as _PoolReducer} from "./reducers/adminReducer";
export {_PoolReducer as poolReducer};

import _AdminConfig from "./models/AdminConfig";
export { _AdminConfig as AdminConfig };

import _AdminPage from "./containers/AdminPage";
export { _AdminPage as AdminPage };

import _Rest from "./rests/rest";
export { _Rest as rest };

import _components, {EditPage as _EditPage, CreatePage as _CreatePage, ListPage as _ListPage, ShowPage as _ShowPage} from "./components/index";
export { _components as components };
export { _EditPage as EditPage };
export { _CreatePage as CreatePage };
export { _ListPage as ListPage };
export { _ShowPage as ShowPage };