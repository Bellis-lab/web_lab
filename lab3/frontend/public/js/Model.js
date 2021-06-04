class Model {
    constructor() {
        const authInfo = JSON.parse(localStorage.getItem('authInfo'));
        this.currentUser = authInfo.currentUser;
        this.allUsers = authInfo.allUsers;
        this.posts = JSON.parse(localStorage.getItem('posts'));
    }

    getPosts = () => {
        return this.posts;
    };

    getPost = id => {
        return this.posts[id];
    };

    createPost = post => {
        this.posts.push(post);
        localStorage.setItem('posts', JSON.stringify(this.posts));
        return;
    };

    createComment = (id, newComment) => {
        this.posts[id].comments.push(newComment);
        localStorage.setItem('posts', JSON.stringify(this.posts));
        return;
    };

    createUser = user => {
        this.allUsers.push(user);
        this.currentUser = user;
        localStorage.setItem(
            'authInfo',
            JSON.stringify({
                currentUser: this.currentUser,
                allUsers: this.allUsers
            })
        );
        return;
    };

    authorize = user => {
        const existedUser = this.allUsers.find(
            u => user.email === u.email && user.password === u.password
        );
        if (existedUser) {
            this.currentUser = existedUser;
            localStorage.setItem(
                'authInfo',
                JSON.stringify({
                    currentUser: this.currentUser,
                    allUsers: this.allUsers
                })
            );
            return true;
        } else return false;
    };

    logout = () => {
        this.currentUser = null;
        localStorage.setItem(
            'authInfo',
            JSON.stringify({
                currentUser: this.currentUser,
                allUsers: this.allUsers
            })
        );
        return;
    };
}
