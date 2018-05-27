import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.117159, 
          longitude: 115.091026
        },
        title: 'Taman Kota Singaraja',
        subtitle: 'Berlokasi di Jl. Ngurah Rai, Kecamatan Buleleng, Banjar Jawa, Banjar Jawa Kecamatan Buleleng, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81117'
      },
      {
        key:2,
        latlng: {
          latitude:-8.134401, 
          longitude:  115.100511
        },
        title: 'Taman Bung Karno',
        subtitle: 'Berlokasi di Jl. Jelantik Gingsir, Sukasada, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:3,
        latlng: {
          latitude: -8.742254, 
          longitude: 115.183565
        },
        title: 'Taman Ngurah Rai',
        subtitle: 'Berlokasi di Jl. By Pass Ngurah Rai No.1b, Tuban, Kuta, Kabupaten Badung, Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.765264, 
          longitude: 115.221889
        },
        title: 'Taman Bhagawan',
        subtitle: 'Berlokasi di Nusa Dua, Jl. Pratama No.70, Benoa, Kuta Sel., Kabupaten Badung, Bali 80361'
      },
      {
        key:5,
        latlng: {
          latitude:-8.541293, 
          longitude: 115.172623
        },
        title: 'Taman Ayun Temple',
        subtitle: 'Berlokasi di Jl. Ayodya No.10, Mengwi, Kabupaten Badung, Bali 80351'
      },
      {
        key:6,
        latlng: {
          latitude:-8.808074, 
          longitude: 115.167460
        },
        title: 'Garuda Wisnu Kencana Cultural Park',
        subtitle: 'Berlokasi di Jl. Raya Uluwatu, Ungasan, Kuta Sel., Kabupaten Badung, Bali 80364'
      },
      {
        key:7,
        latlng: {
          latitude:-8.357801,
          longitude:  114.636756
        },
        title: 'Taman Pecangakan - Negara',
        subtitle: 'Berlokasi di Jl. Surapati, Dauhwaru, Kec. Jembrana, Kabupaten Jembrana, Bali 82218'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Lokasi Taman-Taman di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>HadiKurniawan@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
