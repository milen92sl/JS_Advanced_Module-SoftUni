import { page } from './lib.js'
import { decorateContext, updateUserNav } from './middlewares/decirateContext.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { mybooksPage } from './views/my-books.js';
import { registerPage } from './views/register.js';


page(decorateContext);
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/my-books', mybooksPage)






updateUserNav();

page.start();
