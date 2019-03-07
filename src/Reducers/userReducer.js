import { ADD_POST } from '../ActionTypes/actions';

const initialState = {
    users: [
        {
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
           

    currentUser: {
        user : (JSON.parse(sessionStorage.getItem('loggedUser'))) ? JSON.parse(sessionStorage.getItem('loggedUser'))
         : null,
        isLogged : false
    }
}]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newStateOfUsers = [...state.users];
            return {...state}

        }

        default: return state;
    };
    

}

export default reducer;