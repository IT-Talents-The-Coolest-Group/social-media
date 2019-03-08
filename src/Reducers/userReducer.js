import { USER_LOGIN, USER_REGISTER, USER_LOGOUT} from '../Actions/actionTypes';

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
    currentUser: {
        user: (JSON.parse(sessionStorage.getItem('loggedUser'))) ? JSON.parse(sessionStorage.getItem('loggedUser'))
            : null,
        isLogged: JSON.parse(sessionStorage.getItem('loggedUser')) ? true : false
    },
    logginErr: false,
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

        // case UPLOAD_PHOTO: {
        //     let user = action.user;
        //     user.selectefFileCover = '';
        //     user.selectefFileAvatar = '';
        //     let selectefFileCover = state.users.selectefFileCover;
        //     let selectefFileAvatar = state.users.selectefFileAvatar;

        //     user.selectefFileCover = selectefFileCover;
        //     user.selectefFileAvatar = selectefFileAvatar;

        //     localStorage.setItem('userList', JSON.stringify([...state.users, user]));
        //     sessionStorage.setItem('loggedUser', JSON.stringify(user));
        //     return {
        //         ...state, users: [...state.users, user], currentUser: {
        //             user: user,
        //         }
        //     };
        // }
      
        default: return state;
    };
}

export default reducer;