// import React from 'react';
import { AppRegistry, View } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { Header } from './src/components/common';
// import AlbumList from './src/components/AlbumList';
import App from './src/App';
// import reducers from './src/reducers';

// const App = () => (
//   <Provider store={createStore(reducers)}>
//     <View style={{ flex: 1 }}>
//       <Header headerText={'Albums'} />
//       <AlbumList />
//     </View>
//   </Provider>
//   );

AppRegistry.registerComponent('ReactMobile', () => App);
