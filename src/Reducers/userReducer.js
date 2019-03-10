import {
    USER_LOGIN, USER_REGISTER, USER_LOGOUT,
    USER_SEARCH, UPLOAD_PHOTO, ADD_FRIEND,
    MANAGE_FRIEND_REQUEST, DELETE_FRIEND,
    CHANGE_POST, NEW_POST, DELETE_POST
    // SORT_POST,
} from '../Actions/actionTypes';

const initialState = {
    users: (localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : []),
    // users: [{
    //     id:1,
    //     firstName: '',
    //     lastName:'',
    //     email:'',
    //     gender:'',
    //     birthday:'',
    //     friends:[],
    //     password:'',
    //     circleImgWidth: 30,
    //     coverPhoto:'',
    //     avatar: '',
    //     isFriend:false,
    //     createdPosts:[
    //         {
    //             content:'',
    //             likes:'',
    //             comments: [],
    //             isItLiked:false

    //         }
    //     ],
    //     uploadedPhotos:[{
    //         imageSrc:'',
    //         title:'',
    //         comments:[],
    //         isItLiked:false
    //     }],
    // }],
    posts: [
        { id: 1, name: 'София Геогиева', info: 'Здравейте!', time: "14:40" },
        { id: 2, name: 'Марио Стоянов', info: 'Прекрасен ден за представяне на проек! 😉 ', time: '12:18' },
    ],
    currentUser: {
        user: (JSON.parse(sessionStorage.getItem('loggedUser'))) ? JSON.parse(sessionStorage.getItem('loggedUser'))
            : null,
        isLogged: JSON.parse(sessionStorage.getItem('loggedUser')) ? true : false
    },
    logginErr: false,
    searchedUsers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            let user = state.users.filter(u => {
                if (u.password === action.password && u.email === action.email) {
                    return u;
                }
                return null;
            });

            if (user !== null && user.length === 1) {
                sessionStorage.setItem('loggedUser', JSON.stringify(user[0]));
                return {
                    ...state, currentUser: {
                        user: user[0],
                        isLogged: true,
                    }, loginErr: false
                };
            }
            return { ...state, loginErr: true };
        }

        case USER_REGISTER: {
            let user = action.user;

            if (state.users.length < 1) {
                user.id = 1;
            } else {
                const lastId = state.users[state.users.length - 1].id;
                user.id = lastId + 1;
            }

            localStorage.setItem('userList', JSON.stringify([...state.users, user]));
            sessionStorage.setItem('loggedUser', JSON.stringify(user));
            return {
                ...state, users: [...state.users, user], currentUser: {
                    user: user,
                    isLogged: true,
                }
            };
        }

        case USER_LOGOUT: {
            sessionStorage.setItem('loggedUser', null);
            return {
                ...state, currentUser: {
                    user: null,
                    isLogged: false
                }
            };
        }

        case USER_SEARCH: {
            const users = state.users;
            let searchedUsers = users.filter(u => u.firstName.toLowerCase().indexOf(action.query) === 0 || u.lastName.toLowerCase().indexOf(action.query) === 0 || u.email.toLowerCase().indexOf(action.query) === 0);

            return { ...state, searchedUsers };
        }

        case UPLOAD_PHOTO: {
            sessionStorage.setItem('loggedUser', 'cover');
            // let user = action.user
            let v = JSON.parse(sessionStorage.getItem('cover'));
            console.log(v)
            return {
                ...state, currentUser: [...state.currentUser, action.selectedFileCover]
            };
        }
        case ADD_FRIEND: {
            let users = [...state.users];
            let currentUser = { ...state.currentUser };
            let me = users[users.findIndex((u) => u.id === currentUser.user.id)];
            let friend = users[users.findIndex((u) => u.id === action.friendId)];

            // Init friends lists if needed
            if (typeof currentUser.user.pendingFriends === "undefined") {
                currentUser.user.pendingFriends = {};
            }
            if (typeof me.pendingFriends === "undefined") {
                me.pendingFriends = {};
            }
            if (typeof friend.pendingFriends === "undefined") {
                friend.pendingFriends = {};
            }
            if (typeof friend.friends === "undefined") {
                friend.friends = [];
            }

            // Friendship was already establised before or it is me
            if (
                friend.friends.findIndex(u => u.id === currentUser.user.id) !== -1 || friend.id === currentUser.user.id || typeof friend.pendingFriends[currentUser.user.id] !== "undefined"
            ) {
                return state;
            }

            // Establish friendship
            friend.pendingFriends[currentUser.user.id] = 'pending';
            currentUser.user.pendingFriends[friend.id] = 'sent';
            me.pendingFriends[friend.id] = 'sent';

            localStorage.setItem('userList', JSON.stringify(users));
            sessionStorage.setItem('loggedUser', JSON.stringify(currentUser.user));

            return { ...state, users, currentUser };
        }

        case MANAGE_FRIEND_REQUEST: {
            if (state.currentUser.user.id !== action.userId && state.currentUser.user.pendingFriends[action.userId] && state.currentUser.user.pendingFriends[action.userId] === 'pending') {
                let users = [...state.users];
                let currentUser = { ...state.currentUser };
                let me = users[users.findIndex((u) => u.id === currentUser.user.id)];
                let friend = users[users.findIndex((u) => u.id === action.userId)];

                // Init friends lists if needed
                if (typeof currentUser.user.friends === "undefined") {
                    currentUser.user.friends = [];
                }
                if (typeof me.friends === "undefined") {
                    me.friends = [];
                }
                if (typeof friend.friends === "undefined") {
                    friend.friends = [];
                }

                if (action.status === "accept") {
                    currentUser.user.friends.push(action.userId);
                    // todo figure out why currentUser.user has reference to me
                    // me.friends.push(action.userId);
                    friend.friends.push(currentUser.user.id);
                }

                delete currentUser.user.pendingFriends[action.userId];
                delete me.pendingFriends[action.userId];
                delete friend.pendingFriends[currentUser.user.id];

                localStorage.setItem('userList', JSON.stringify(users));
                sessionStorage.setItem('loggedUser', JSON.stringify(currentUser.user));

                return { ...state, users, currentUser };
            }

            return state;
        }

        case DELETE_FRIEND: {
            const myFriendIndex = state.currentUser.user.friends.findIndex(uId => uId === action.userId);
            if (myFriendIndex !== -1) {
                const users = [...state.users];
                const currentUser = { ...state.currentUser };
                const me = users[users.findIndex((u) => u.id === currentUser.user.id)];
                const friend = users[users.findIndex((u) => u.id === action.userId)];
                const myIndex = friend.friends.findIndex(uId => uId === currentUser.user.id);

                if (myIndex !== -1) {
                    currentUser.user.friends.splice(myFriendIndex, 1);
                    me.friends.splice(myFriendIndex, 1);
                    friend.friends.splice(myIndex, 1);

                    localStorage.setItem('userList', JSON.stringify(users));
                    sessionStorage.setItem('loggedUser', JSON.stringify(currentUser.user));

                    return { ...state, users, currentUser };
                }
            }

            return state;
        }

        case CHANGE_POST: {
            return {
                ...state, posts: state.posts.map((post, index) => {
                    if (index === action.index) {
                        return { ...state.posts[index], name: action.change };
                    } else {
                        return { ...post };
                    }
                })
            }
        };

        case NEW_POST: {
            return { ...state, posts: [...state.posts, action.post] };
        }

        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(a => a.id !== action.id) }
        }

        default: return state;
    };
}

export default reducer;

