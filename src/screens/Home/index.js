import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import MovieTheWell from '../../assets/movies/the_wheel_of_time.png';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MoviesCard } from '../../components/MoviesCard';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>

        <TouchableOpacity style={styles.movieImageBackground}>
            <Image source={MovieTheWell} style={styles.movieImage} />
        </TouchableOpacity>
      
        <Text style={styles.continueAssistindo}>Continue Assistindo</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.continueAssistindo}>Filmes policiais</Text>
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.continueAssistindo}>Assista no seu idioma</Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F3E',
    alignItems: 'flex-start',
  },

  header: {
    width: '100%',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFF',
  },

  movieImageBackground: {
    width: '100%',
    alignItems: 'center',
  },

  // movieImage: {

  // },

  continueAssistindo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
  },

  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
  },
 
});
