import React from 'react';
import { reduxForm, Field } from "redux-form";

const renderInput = (props) => {
    console.log(props);
    return (
        <input {...props} type="text" />
    );
};

const ReduxFormLearn = () => {
    return (
        <div>
            <h6>Redux Form</h6>
            <form action=''>
                <Field
                    name='user-name'
                    component={renderInput}
                />
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'this is my first redux form'
})(ReduxFormLearn);
