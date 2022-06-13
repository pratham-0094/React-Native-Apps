import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const home = () => {
  const [category, setCategory] = useState([
    {strCategory: 'Beef'},
    {strCategory: 'Breakfast'},
    {strCategory: 'Chicken'},
    {strCategory: 'Dessert'},
    {strCategory: 'Goat'},
    {strCategory: 'Lamb'},
    {strCategory: 'Miscellaneous'},
    {strCategory: 'Pasta'},
    {strCategory: 'Pork'},
    {strCategory: 'Seafood'},
    {strCategory: 'Side'},
    {strCategory: 'Starter'},
    {strCategory: 'Vegan'},
    {strCategory: 'Vegetarian'},
  ]);
  const [list, setList] = useState([]);
  const [meal, setMeal] = useState([]);

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

  const fetchList = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setCategory(response.meals);
      })
      .catch(err => console.error(err));
  };

  const fetchMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setCategory(response.meals);
      })
      .catch(err => console.error(err));
  };

  return (
    <View style={[{marginBottom: 100}]}>
      <View style={[styles.heading]}>
        <Text style={[styles.headline]}>Category</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={[]}>
        <View style={[styles.list]}>
          {category.map((e, i) => (
            <View key={i} style={[styles.category]}>
              <Text style={[styles.item]}>{e.strCategory}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default home;

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
