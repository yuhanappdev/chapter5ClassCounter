import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '~/components/button';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');

        this.state = {
            count: props.initValue
        };
    }

    render() {
        const { title } = this.props;
        const { count } = this.state;

        return (
            <Container>
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
                <CountContainer>
                    <CountLabel>{count}</CountLabel>
                </CountContainer>
                <ButtonContainer>
                    <Button 
                        iconName="plus" onPress={ () => this.setState({ count: count + 1})}
                        />
                    <Button 
                        iconName="minus" onPress={ () => this.setState({ count: count -1 })}
                        />
                </ButtonContainer>
            </Container>
        );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");

        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");

        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    
}

export default Counter