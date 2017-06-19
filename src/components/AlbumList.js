import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import ListItem from './ListItem';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        // console.log('componentWillMount in AlbumList');
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //     .then(response => this.setState({ albums: response.data }));
        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });

        // this.dataSource = ds.cloneWithRows(this.props.albums);
    }

    renderAlbums() {
        return this.props.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />);
    }

    renderRow(album) {
        return <ListItem album={album} />;
    }

    render() {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
            // <ListView
            //     dataSource={this.dataSource}
            //     renderRow={this.renderRow}
            // />
        );
    }
}

const mapStateToProps = state => {
    return { albums: state.albums };
};

export default connect(mapStateToProps)(AlbumList);
