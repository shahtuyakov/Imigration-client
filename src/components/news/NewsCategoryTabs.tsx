import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NewsCategory } from '../../types/news';

function NewsCategoryTabs({ 
    selectedCategory, 
    onSelectCategory 
  }: { 
    selectedCategory: NewsCategory;
    onSelectCategory: (category: NewsCategory) => void;
  }) {
    const categories: NewsCategory[] = ['for-you', 'local', 'top-stories'];
  
    return (
      <View style={styles.tabsContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.tab,
              selectedCategory === category && styles.selectedTab,
            ]}
            onPress={() => onSelectCategory(category)}
          >
            <Text style={[
              styles.tabText,
              selectedCategory === category && styles.selectedTabText,
            ]}>
              {category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tab: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
  },
  selectedTabText: {
    fontWeight: 'bold',
  },
});

export default NewsCategoryTabs;