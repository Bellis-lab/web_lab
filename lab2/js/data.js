let authStartData = {
    currentUser: null,
    allUsers: [
        {
            username: 'test',
            email: 'test@gmail.com',
            password: '000',
            sex: 'man',
            birthday: '01.01.0001'
        }
    ]
};

let postStartData = [
    {
        title: 'ABOBA 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../images/post2.jpg',
        comments: [
            {
                username: 'Mafioznik from Spain ',
                usernameImg: '../images/kizaru-pauk-shablon.png',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet.'
            }
        ]
    },
    {
        title: 'ABOBA 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../images/post2.jpg',
        comments: [
            {
                username: 'Mafioznik from Spain ',
                usernameImg: '../images/kizaru-pauk-shablon.png',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit.'
            }
        ]
    },
    {
        title: 'ABOBA 3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../images/post2.jpg',
        comments: [
            {
                username: 'Mafioznik from Spain ',
                usernameImg: '../images/kizaru-pauk-shablon.png',
                text: 'Lorem ipsum dolor sit amet.'
            }
        ]
    }
];

if (!localStorage.getItem('authInfo')) {
    localStorage.setItem('authInfo', JSON.stringify(authStartData));
}

if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify(postStartData));
}
