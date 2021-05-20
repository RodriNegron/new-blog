import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../auth/actions/users';

//agregar datos de usuario al dropdown

const NavBar = ({logoutUser}) => {
    const history = useHistory();
    return (
        <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
            <a href='/NewPost'>NewPost</a>
            <button to='#' onClick={()=> logoutUser(history)}>Logout</button>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item dropdown no-arrow'>
                    <a className='nav-link dropdown-toggle' href='/' id='userDropdown'>
                        <span className='mr-5 d-lg-inline text-gray-600'>User</span>
                        <img className='image-profile rounded-circle ml'  src='https://www.labicok.com/wp-content/uploads/2020/09/default-user-image.png'   alt='user-img' width='60'/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect(null, {logoutUser})( NavBar);