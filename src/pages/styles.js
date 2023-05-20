import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from './colors'

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    backgroundColor: ${colors.background};
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: ${colors.borda};
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.textoPrincipal
})`
    flex: 1;
    height: 40px;
    background: ${colors.textFundo};
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid ${colors.borda};
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: ${colors.botaoPrincipal};
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => props.loading ? 0.7 : 1};
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const Card = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: ${colors.backgroundsec};
`;

export const AvatarDetalhes = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 32px;
    background: ${colors.backgroundsec};
`;

export const Name = styled.Text`
    font-size: 18px;
    color: ${colors.textFundo};
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const InfoCharacter = styled(Name)`
    font-size: 14px;
`;

export const Gender = styled.Text`
    font-size: 14px;
    color: ${colors.textoPrincipal};
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Status = styled.Text`
    font-size: 14px;
    color:  ${colors.textoPrincipal};
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color:  ${colors.textoSecundario};
    margin-top: 5px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 5px;
    background:  ${colors.botaoSecundario};
    justify-content: center;
    align-items: center;
    height: 32px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.botaoTexto};
    text-transform: uppercase;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

/*
export const Starred = styled.View`
    background: #f5f5f5;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const OwnerAvatar = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background: #eee;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;
*/

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    font-weight: bold;
    color: ${colors.textoPrincipal};
    backgroundColor: ${colors.background};
`;

export const Author = styled.Text`
    font-size: 13px;
    color: ${colors.textoPrincipal};
    margin-top: 2px;
`;

export const Header = styled.View`
    padding-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const Avatarperfil = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: ${colors.backgroundsec};
`;

export const Nameperfil = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.textoPrincipal};
    margin-top: 4px;
    text-align: center;
`;

export const Bioperfil = styled.Text`
    font-size: 15px;
    line-height: 18px;
    color: ${colors.textoPrincipal};
    margin-top: 5px;
    text-align: center;
`;

export const Species = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.textoPrincipal};
    margin-top: 4px;
    text-align: center;
`;

export const Detalhes = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Created = styled.Text`
    font-size: 16px;
    line-height: 18px;
    color: ${colors.textoPrincipal};
    margin-top: 5px;
    text-align: center;
`;

export const TxtDetalhes = styled(Name)`
    font-size: 18px;
    line-height: 18px;
    color: ${colors.textoPrincipal};
    margin-top: 15px;
    text-align: center;
`;


