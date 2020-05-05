import React, { Component } from 'react'
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import 'ern-movie-list-demo-js-api-implementation-for-class'
import { MoviesApi } from 'ern-movie-list-demo-api'

export default class App extends Component {
  state = {
    movies: [],
    showRatings: false,
  }

  async componentDidMount() {
    const movies = await MoviesApi.requests().getTopRatedMovies()
    this.setState({ movies })
  }

  handlePress() {
    this.setState({ showRatings: !this.state.showRatings })
  }

  render() {
    const { showRatings } = this.state
    const buttonLabel = showRatings ? 'Hide Ratings' : 'Show Ratings'
    return (
      <View style={styles.container}>
        <Button title={buttonLabel} onPress={this.handlePress} />
        <FlatList
          data={this.state.movies}
          extraData={showRatings}
          keyExtractor={(item) => item.title}
          renderItem={({ item, index }) => (
            <View style={styles.row}>
              <Image
                style={styles.icon}
                source={{
                  uri: item.imageUrl ? item.imageUrl : 'http://bit.ly/2yz3AYe',
                }}
              />
              <View style={styles.row2}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.releaseYear}</Text>
              </View>
              {showRatings && (
                <View style={styles.center}>
                  <Text>Rating: {item.ratings}</Text>
                </View>
              )}
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
  },
  row2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
  },
  center: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    paddingTop: 5,
    flex: 1,
    fontSize: 12,
  },
  icon: {
    width: 50,
    height: 70,
    flexShrink: 1,
    alignSelf: 'center',
  },
})
