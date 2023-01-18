import { render, page } from './lib.js'
import { getUserData } from './util.js';
import { showCatalogVIew } from './views/catalogView.js';
import { showCreateView } from './views/createView.js';
import { showDetailsView } from './views/detailsView.js';
import { showEditView } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { updateNav } from './views/navUpdate.js';
import { showRegisterView } from './views/registerView.js';

const main = document.getElementById('content')



page(decorateCtx);


page('/', showHome);
page('/catalog', showCatalogVIew);
page('/catalog/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/create', showCreateView);
page('/login', showLoginView);
page('/register', showRegisterView);


updateNav()
page.start();


function decorateCtx(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData()

    if(user){
        ctx.user = user
    }

    next()
}

function renderMain(content) {
    render(content, main);
}



