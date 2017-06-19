import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    View, 
    Text, 
    Image, 
    Linking, 
    TouchableWithoutFeedback, 
    LayoutAnimation 
} from 'react-native';

import { Button, Card, CardSection } from './common';
import * as actions from '../actions';

class AlbumDetail extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderButton() {
        const { album, expanded } = this.props;
        if (expanded) {
            return (<Button onPress={() => Linking.openURL(album.url)}>Buy Now</Button>);
        }
    }

    render() {
        const { title, artist, thumbnail_image, image, url } = this.props.album;
        const {
         thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
        } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{ uri: image }} />
                </CardSection>
                
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
                </CardSection>
                
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedAlbumTitle === ownProps.album.title;
    return { expanded };
};



export default connect(mapStateToProps, actions)(AlbumDetail);
