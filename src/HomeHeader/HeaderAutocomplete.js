import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import styles from './HomeHeader.module.css';
import { connect } from 'react-redux';
import { userSearch } from '../Actions/users';

class HeaderAutocomplete extends React.Component {
    state = {
        value: '',
        userId: null,
        usersList: [],
    };

    selectUser = (userId) => {
        let selectedUserId = typeof userId !== "undefined" ? userId : this.state.userId;
        this.props.route.history.push(`/profile-home/${selectedUserId}/`);
    };

    render() {
        return (<div className={styles.FlexBox}>
            <ReactAutocomplete
                items={this.state.usersList}
                getItemValue={item => `${item.firstName} ${item.lastName}`}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                    >
                        {`${item.firstName} ${item.lastName}`}
                    </div>
                }
                value={this.state.value}
                onChange={e => {
                    this.props.userSearch(e.target.value);
                    const usersList = this.props.searchedUsers;
                    this.setState({ value: e.target.value, usersList });
                } }
                onSelect={(value, item) => { this.setState({ ...this.state, value, userId: item.id }); this.selectUser(item.id); }}
            />
            <div><SearchIcon onClick={this.selectUser} /></div>
            
        </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userSearch: (query) => dispatch(userSearch(query))
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        searchedUsers: state.searchedUsers,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAutocomplete);