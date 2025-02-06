import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NewsCategory } from '../../types/news';
import { NEWS_CATEGORIES } from '../../types/news';
import { useTheme } from '../../theme/hooks/useTheme';

function NewsCategoryTabs({ 
    selectedCategory, 
    onSelectCategory 
  }: { 
    selectedCategory: NewsCategory;
    onSelectCategory: (category: NewsCategory) => void;
  }) {
    const theme = useTheme();
  
    return (
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.tabsContainer}
      >
        {NEWS_CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.tab,
              selectedCategory === category && styles.selectedTab,
            ]}
            onPress={() => onSelectCategory(category)}
          >
            <Text 
              style={[
                styles.tabText,
                selectedCategory === category && styles.selectedTabText,
                { 
                  color: selectedCategory === category 
                    ? theme.colors.primary 
                    : theme.colors.text.secondary
                }
              ]}
            >
              {category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 48,
    flexGrow: 0,
    backgroundColor: '#fff',
  },
  tabsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    minWidth: 80,
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#EEF2FF',
    borderColor: '#6366F1',
  },
  tabText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  selectedTabText: {
    fontWeight: '600',
  },
});

export default NewsCategoryTabs;