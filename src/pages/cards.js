import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import colors from './colors';
import { Container, Form, Input, SubmitButton, List, Card, Avatar, Name , Gender , Status, ProfileButton, ProfileButtonText } from './styles';
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

    handleAddCard = async () => {
        console.log("Entrou em handleaddCard")
      try {

        const {cards, newCard} = this.state;

        this.setState({ loading: true})

        const response = await api.get(`/character/?name=${newCard}`);

        const data =  {
            id:response.data.results[0].id,
            name:response.data.results[0].name,
            status:response.data.results[0].status,
            gender:response.data.results[0].gender,
            avatar:response.data.results[0].image,
            location: response.data.results[0].location,
            species: response.data.results[0].species,
            created: response.data.results[0].created,
        };
        console.log("Data:------------------------------------------------------------\n ")
        console.log(data.status)

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

