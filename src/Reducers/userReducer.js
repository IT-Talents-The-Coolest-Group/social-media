import { ADD_POST, USER_LOGIN, USER_REGISTER } from '../Actions/actionTypes';

const initialState = {
    users: (localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) :  []),
    users: [{
        id:1,
        firstName: '',
        lastName:'',
        email:'',
        gender:'',
        birthday:'',
        friends:[],
        password:'',
        circleImgWidth: 30,
        coverPhoto:'',
        avatar: '',
        isFriend:false,
        createdPosts:[
            {
                content:'',
                likes:'',
                comments: [],
                isItLiked:false

            }
        ],
        uploadedPhotos:[{
            imageSrc:'',
            title:'',
            comments:[],
            isItLiked:false
        }],
    }],
    currentUser: {
        user : (JSON.parse(sessionStorage.getItem('loggedUser'))) ? JSON.parse(sessionStorage.getItem('loggedUser'))
        : null,
        isLogged: JSON.parse(sessionStorage.getItem('loggedUser')) ? true : false
    },
    logginErr: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newStateOfUsers = [...state.users];
            return { ...state }

        }

        case USER_LOGIN: {
            let user = state.users.filter(u => {
                if (u.password === action.password && u.email === action.email) {
                    return u;
                }
                return null;
            });

            if (user !== null && user.length === 1) {
                sessionStorage.setItem('loggedUser', JSON.stringify(user[0]));
                return {...state, currentUser: {
                    user: user[0],
                    isLogged: true,
                }, loginErr: false};
            }
            return {...state, loginErr: true};
        }

        case USER_REGISTER: {
            localStorage.setItem('userList', JSON.stringify([...state.users, action.user]));
            sessionStorage.setItem('loggedUser', JSON.stringify(action.user));
            return {...state, users: [...state.users, action.user], currentUser: {
                user: action.user,
                isLogged: true,
            }};
        }

        default: return state;
    };
}

export default reducer;