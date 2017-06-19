import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
// import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
        // this.setState({ error: '', loading: true });

        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(this.onLoginSuccess.bind(this))
        //     .catch(() => {
        //         firebase.auth().createUserWithEmailAndPassword(email, password)
        //             .then(this.onLoginSuccess.bind(this))
        //             .catch(this.onLoginFail.bind(this));
        //     });
    }

    // onLoginFail() {
    //     this.setState({ error: 'Authentication Failed', loading: false });
    // }

    // onLoginSuccess() {
    //     this.setState({
    //         email: '',
    //         password: '',
    //         loading: false,
    //         error: ''
    //     });
    // }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="small" />;
        } 
            return (
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
         email,
         password,
         error,
         loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
