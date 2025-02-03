import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Mic, RotateCw, MoreHorizontal } from 'lucide-react-native';

interface NewsSearchHeaderProps {
  onSearch: (query: string) => void;
  onRefresh: () => void;
}

function NewsSearchHeader({ onSearch, onRefresh }: NewsSearchHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search news"
          placeholderTextColor="#666"
        />
        <TouchableOpacity>
          <Mic color="#666" size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onRefresh}>
        <RotateCw color="#666" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MoreHorizontal color="#666" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginRight: 12,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});

export default NewsSearchHeader;