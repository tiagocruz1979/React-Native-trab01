import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import colors from './colors';
import { Container, Form, Input, SubmitButton, List, Card, Avatar, Name , Gender , Status, ProfileButton, ProfileButtonText, InfoCharacter } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cards extends Component {

    state = {
        newCard: '',
        cards: [],
        loading: false,
    }

    async componentDidMount () {
        const cards = await AsyncStorage.getItem('cards');

        if(cards) {
            this.setState( {cards: JSON.parse(cards)});
        }
    }

    componentDidUpdate(_, prevState) {
        const { cards } = this.state;

        if(prevState.cards !== cards) {
            AsyncStorage.setItem('cards', JSON.stringify(cards));
        }
    }

    checkIfItemExists = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          const itemExists = value !== null;
          return itemExists;
        } catch (error) {
          console.error('Erro ao verificar a existência do item:', error);
          return false;
        }
      };

    handleAddCard = async () => {
        
      try {

        const {cards, newCard} = this.state;

        this.setState({ loading: true})
        
        const response = await api.get(`/character/?name=${newCard}`);
        

        const res = response.data.results[0];

          
        const data =  {
            id:res.id,
            name:res.name,
            status:res.status,
            gender:res.gender,
            avatar:res.image,
            location: res.name,
            species: res.species,
            created: res.created,
            origin: res.origin.name,
            episode: res.episode[0]
        };


        this.setState({
            cards: [...cards, data],
            newCard: '',
            loading: false,
        });

        Keyboard.dismiss();

    }
    catch(error)
    {
        this.setState({loading: false});
        Keyboard.dismiss();
    }
}

    render() {
         const { cards, newCard, loading } = this.state;

         return (
            <Container>
                <Form>
                    <Input
                        autoCorrecnt={false}
                        autoCapitalize='none'
                        placeholder='Adicionar Personagem'
                        value={newCard}
                        onChangeText={text => this.setState({ newCard: text})}
                        returnKeyType='send'
                        onSubmitEditing={this.handleAddCard}
                    />
                    <SubmitButton Loading={loading} onPress={this.handleAddCard}>
                        {loading ? (<ActivityIndicator color='#fff' />): (<Icon name='add' size={20} color='#fff'/>)}
                    </SubmitButton>
                </Form>

                <List
                    showVerticalScrollIndicator={false}
                    data={cards}
                    keyExtractor={card => (card.id)}
                    renderItem={({item}) => (
                        <Card>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('detalhes', { card: item});
                            }}>
                              <Avatar source={{ uri: item.avatar}} />
                            </TouchableOpacity>
                            <Name>{ item.name }</Name>
                            <InfoCharacter> {item.status} </InfoCharacter>
                            <InfoCharacter> {item.location} </InfoCharacter>
                            <InfoCharacter>Episódio:  {item.episode} </InfoCharacter>

                            <ProfileButton onPress={() => {
                                this.props.navigation.navigate('detalhes', { card: item});
                            }}
                            style={{backgroundColor: colors.botaoPrincipal}}
                            >
                               <ProfileButtonText>Ver Detalhes</ProfileButtonText>
                            </ProfileButton>

                            <ProfileButton onPress={() => {
                                this.setState({ cards: cards.filter(card => card.name !== item.name)})
                            }}
                            style={{backgroundColor: colors.botaoSecundario }}
                            >
                                <ProfileButtonText>Excluir</ProfileButtonText>
                            </ProfileButton>

                        </Card>
                    )}
                />

            </Container>
         );
    }
}

