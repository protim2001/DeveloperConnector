import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile_form/CreateProfile';
import EditProfile from '../profile_form/EditProfile';
import AddExperience from '../profile_form/AddExperience';
import AddEducation from '../profile_form/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

export const Routes = () => {
    return (
        <section className="container">
                <Alert />
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                    <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                    <PrivateRoute exact path="/add-experience" component={AddExperience} />
                    <PrivateRoute exact path="/add-education" component={AddEducation} /> 
                    <PrivateRoute exact path="/posts" component={Posts} /> 
                    <PrivateRoute exact path="/post/:id" component={Post} /> 
                    <Route component={NotFound}/>
                </Switch>
            </section>
    )
}

export default Routes