import React, {useState} from 'react';
import { SafeAreaView, Text, Image, FlatList, StyleSheet, View } from 'react-native';

const App = () => {


  const moviesList = [
    {
      id: 1,
      name: "Transformers: La Venganza de los Caídos",
      director: "Michael Bay",
      url: 'https://media.vandal.net/m/10132/200963018266_1.jpg'
    },
    {
      id: 2,
      name: "Cars",
      director: "Disney",
      url: 'https://pics.filmaffinity.com/Cars-746710621-large.jpg'
    },
    {
      id: 3,
      name: "Los Vengadores",
      director: "Marvel",
      url: 'https://static.wikia.nocookie.net/marvels-avengers/images/5/54/Marvel%27s_Avengers_portada_provisional.jpg/revision/latest?cb=20200625110015&path-prefix=es'
    },
    {
      id: 4,
      name: "El laberinto del fauno",
      director: "Guillermo del Toro",
      url: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-195716222-large.jpg'
    },
    {
      id: 5,
      name: "El origen",
      director: "Christopher Nolan",
      url: 'https://m.media-amazon.com/images/I/81RvLBMmKiL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 6,
      name: "El caballero oscuro",
      director: "Christopher Nolan",
      url: 'https://images.justwatch.com/poster/177957318/s718/el-caballero-oscuro-la-leyenda-renace.jpg'
    },
    {
      id: 7,
      name: "Interestelar",
      director: "Christopher Nolan",
      url: 'https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg'
    },
    {
      id: 8,
      name: "Matrix",
      director: "Hermanos Wachowski",
      url: 'https://pics.filmaffinity.com/Matrix-155050517-large.jpg'
    },
    {
      id: 9,
      name: "El padrino",
      director: "Francis Ford Coppola",
      url: 'https://static.wikia.nocookie.net/doblaje/images/9/9a/Elpadrino.jpg/revision/latest?cb=20211023042804&path-prefix=es'
    },
    {
      id: 10,
      name: "Pulp Fiction",
      director: "Quentin Tarantino",
      url: 'https://pics.filmaffinity.com/Pulp_Fiction-210382116-mmed.jpg'
    },
  ];
  

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to Movies App!</Text>
        <FlatList 
          data = {movies}
          renderItem={({item}) =>{
            return (
            <View style={styles.movieItem}>
              <Image 
                style={styles.picture}
                source={{uri: item.url}} 
              />
              <View style={styles.movieInfo}>
                <Text style={styles.movieName}>{item.name}</Text>
                <Text style={styles.movieDirector}>{item.director}</Text>
              </View>
            </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    picture: {
      width: 120,
      height: 180,
      borderRadius: 5,
    },  
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 8,
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    movieItem: {
      padding: 10,
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
    },
    movieInfo: {
      marginLeft: 10,
    },
    movieName: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    movieDirector: {
      color: '#aaa',
      fontSize: 14,
    },
  }
);

export default App;