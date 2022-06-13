import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  const [category, setCategory] = useState([]);

  const fetchCategory = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setCategory(response.meals);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <View style={[{marginBottom: 100}]}>
      <View style={[styles.heading]}>
        <Text style={[styles.headline]}>Category</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={[]}>
        <View style={[styles.list]}>
          {category.map((e, i) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Category', {category: e.strCategory});
              }}
              key={i}
              style={[styles.category]}>
              <Text style={[styles.item]}>{e.strCategory}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headline: {
    fontSize: 26,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  list: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    backgroundColor: 'skyblue',
    width: 200,
    paddingVertical: 16,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
