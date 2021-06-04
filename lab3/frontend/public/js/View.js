class View {
    LogoutBtn = () => {
        let btn = document.createElement('a');
        btn.classList.add('nav-link');
        btn.innerHTML = 'Logout';
        return btn;
    };

    Post = (id, post) => {
        let postComponent = document.createElement('div');
        postComponent.classList.add('col-12', 'col-xl-6', 'mb-5');
        postComponent.innerHTML = `
                    <div class="row g-0">
                        <div class="col-4">
                            <img class="card-img-top shadow" src="${post.img}"
                                alt="Card image cap" />
                        </div>
                        <div class="col-8 bg-light">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                </p>
                                <a href="./post.html?post=${id}" class="text-dark py-2">Details</a>
                            </div>
                        </div>
                    </div>`;
        return postComponent;
    };

    PostInfo = (title, img, description) => {
        let postInfo = document.createElement('div');
        postInfo.innerHTML = `
                <div class="row flex-column flex-lg-row ">
                <img src="${img}" class="col-12 col-lg-5 img-fluid order-1"
                    alt="Responsive image" />
            </div>
            <div class="col-12 text-light">
                <h1 class="display-1 fw-bold">${title}</h1>
                <p class="lead">
                ${description}</p>
            </div>
                `;
        return postInfo;
    };

    Comment = (username, usernameImg, text) => {
        let comment = document.createElement('div');
        comment.classList.add(
            'rounded',
            'row',
            'justify-content-md-center',
            'bg-light',
            'text-dark',
            'mb-3'
        );
        comment.innerHTML = `
                <div class="col-1 pb-3">
                    <img src="${usernameImg}" alt="avatar" class="border border-dark mt-3 rounded-circle" width="70" />
                </div>
                <div class="col-11 text-start">
                    <div class="row">
                        <div class="col mt-2  mx-2">
                            <h4>${username}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="col text-wrap">
                                ${text}
                            </p>
                        </div>
                    </div>
                </div>`;
        return comment;
    };
}
