import React from 'react';
import Styled from 'styled-components';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

const Button = ( {iconName, onPress} ) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source= {
                    iconName === 'plus' ? require('~/assets/images/add.png') : require('~/assets/images/remove.png')
                }
             />
        </Container>
    );
};

export default Button
