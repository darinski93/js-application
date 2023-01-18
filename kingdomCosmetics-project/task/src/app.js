
import { logout } from './api/user.js';
import { page, render, nothing } from './lib.js'
import { getUserData } from "./util.js";
import { showCatalogView } from './views/catalog.js';
import { showCreateView } from './views/create.js';
import { showDetailsView } from './views/details.js';
import { showEditView } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLoginView } from './views/login.js';

import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';

const main = document.querySelector('main')



page(decorateContext)
page('/', showHome)
page('/catalog', showCatalogView)
page('/catalog/:id', showDetailsView)
page('/edit/:id', showEditView)
page('/create', showCreateView)
page('/login', showLoginView)
page('/register', showRegister)




updateNav()
page.start();


function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData()

    if (user) {
        ctx.user = user
    }

    next()
}

function renderMain(content) {
    render(content, main);
}

