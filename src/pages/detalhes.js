import React, { Component } from 'react';
import api from '../services/api'
import { Container, AvatarDetalhes,  TxtDetalhes, Header,  ProfileButton, ProfileButtonText} from './styles';
import colors from './colors'


export default class Detalhes extends Component{
    state = {
        detalhes: [],
    };

    async componentDidMount()
    {
        const {route} = this.props;
        const {card} = route.params;
        const response = api.get(`/character/${card.id}`);

        this.setState({ detalhes: response.data});
    }
   

    render()
    {
        const {route} = this.props;
        const {card} = route.params;

  
        return (
            <Container>
                <Header>
                    <AvatarDetalhes source={{ uri: card.avatar}}/>
                    <TxtDetalhes>Nome: {card.name}</TxtDetalhes>
                    <TxtDetalhes>Gênero: {card.gender} </TxtDetalhes>
                    <TxtDetalhes>Status:  {card.status}</TxtDetalhes>
                    <TxtDetalhes>Espécie: {card.species}</TxtDetalhes>
                    <TxtDetalhes>Criado em: {card.created}</TxtDetalhes>
                    <TxtDetalhes>Origem: {card.origin}</TxtDetalhes>
                </Header>
                <ProfileButton onPress={() => {
                    this.props.navigation.navigate('cards');
                    }}
                    style={{backgroundColor: colors.botaoPrincipal}}
                    >
                    <ProfileButtonText>Fechar</ProfileButtonText>
                </ProfileButton>
            </Container>
        );
    }
}