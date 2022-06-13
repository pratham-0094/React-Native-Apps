import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, Image, View} from 'react-native';

const Category = ({route}) => {
  const [list, setList] = useState([]);

  const fetchList = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setList(response.meals);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <View style={[{marginBottom: 100}]}>
      <View style={[styles.heading]}>
        <Text style={[styles.headline]}>Food List</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={[]}>
        <View style={[styles.list]}>
          {list.map((e, i) => (
            <View key={i} style={[styles.category]}>
              <Image
                style={[{width: 220, height: 120}]}
                source={{uri: e.strMealThumb}}
              />
              <Text style={[styles.item]}>{e.strMeal}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

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
    paddingBottom: 10,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    alignItems: 'center',
    width: 220,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
  },
});
