import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CaseItem {
  id: string;
  number: string;
  dateAdded: Date;
}

export default function CasesScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [caseNumber, setCaseNumber] = useState('');
  const [cases, setCases] = useState<CaseItem[]>([]);

  function validateCaseNumber(number: string): boolean {
    // USCIS case numbers typically start with 3 letters followed by 10 digits
    const uscisPattern = /^[A-Z]{3}[0-9]{10}$/;
    return uscisPattern.test(number);
  }

  function handleAddCase() {
    if (!validateCaseNumber(caseNumber)) {
      Alert.alert(
        'Invalid Case Number',
        'Please enter a valid USCIS case number (3 letters followed by 10 digits)'
      );
      return;
    }

    const newCase: CaseItem = {
      id: Date.now().toString(),
      number: caseNumber,
      dateAdded: new Date(),
    };

    setCases([...cases, newCase]);
    setCaseNumber('');
    setIsModalVisible(false);
  }

  function renderCaseItem({ item }: { item: CaseItem }) {
    return (
      <View style={styles.caseItem}>
        <Text style={styles.caseNumber}>{item.number}</Text>
        <Text style={styles.caseDate}>
          Added: {item.dateAdded.toLocaleDateString()}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cases</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.addButtonText}>Add Case</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cases}
        renderItem={renderCaseItem}
        keyExtractor={item => item.id}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No cases added yet</Text>
        }
      />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Case</Text>
            <TextInput
              style={styles.input}
              value={caseNumber}
              onChangeText={setCaseNumber}
              placeholder="Enter USCIS Case Number"
              autoCapitalize="characters"
              maxLength={13}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={handleAddCase}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  list: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 24,
  },
  caseItem: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  caseNumber: {
    fontSize: 16,
    fontWeight: '600',
  },
  caseDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '80%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: '#ff3b30',
  },
  submitButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
}); 