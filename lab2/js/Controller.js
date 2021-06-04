class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    renderHome = () => {
        const posts = this.model.getPosts();
        posts.forEach((post, id) => {
            const postElem = this.view.Post(id, post);
            document.querySelector('#posts-container').appendChild(postElem);
        });
        return;
    };

    postForm = () => {
        document.querySelector('#post-form').onsubmit = () => {
            const title = document.querySelector('#title').value;
            const img = document.querySelector('#image').value;
            const description = document.querySelector('#description').value;
            const post = { title, img, description, comments: [] };
            this.model.createPost(post);
        };
        return;
    };

    renderInfoPost = id => {
        const post = this.model.getPost(id);
        const postElem = this.view.PostInfo(
            post.title,
            post.img,
            post.description
        );
        document.querySelector('#post-container').appendChild(postElem);

        post.comments.forEach(comment => {
            const commentElem = this.view.Comment(
                comment.username,
                comment.usernameImg,
                comment.text
            );
            document
                .querySelector('#comments-container')
                .appendChild(commentElem);
        });

        document.querySelector('#comment-form').onsubmit = event => {
            event.preventDefault();
            const text = document.querySelector('#text').value;
            const comment = {
                username: 'Nikolay',
                text,
                usernameImg: '../images/kizaru-pauk-shablon.png'
            };
            this.model.createComment(id, comment);
            location.reload();
        };
        return;
    };

    loginForm = () => {
        document.querySelector('#login-form').onsubmit = () => {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const user = { email, password };
            this.model.authorize(user);
            !this.model.currentUser
                ? alert('Incorrect login or password')
                : null;
        };
        return;
    };

    registerForm = () => {
        document.querySelector('#registration-form').onsubmit = () => {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const sex = [...document.getElementsByName('sex')].find(
                btn => btn.checked
            ).value;
            const birthday = document.querySelector('#birthday').value;
            const newUser = { email, password, sex, birthday };
            this.model.createUser(newUser);
        };
        return;
    };

    auth = () => {
        if (!this.model.currentUser) {
            [...document.querySelectorAll('.profile')].map(
                link => (link.style.display = 'none')
            );
            if (window.location.href.includes('/new_post')) {
                document.getElementById('comment-form').style.display = 'none';
            }
        } else {
            const logoutBtn = this.view.LogoutBtn();
            logoutBtn.onclick = () => {
                this.model.logout();
                location.replace('/index.html');
            };
            document.querySelector('#login-logout').innerHTML = '';
            document.querySelector('#login-logout').appendChild(logoutBtn);
        }
        return;
    };
}

const appController = new Controller();

appController.auth();

const url = window.location.href;
if (url.includes('/new_post')) {
    appController.postForm();
}
if (url.includes('/post')) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('post');
    appController.renderInfoPost(id);
}
if (url.includes('/login')) {
    appController.loginForm();
}
if (url.includes('/registration')) {
    appController.registerForm();
}
if (url.includes('/index.html')) {
    appController.renderHome();
}
