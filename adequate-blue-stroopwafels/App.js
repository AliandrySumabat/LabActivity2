import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Aliandry J. Sumabat</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>21</Text>

        <Text style={styles.label}>Course/Year/Section:</Text>
        <Text style={styles.info}>BSCS</Text>

        <Text style={styles.label}>About Me:</Text>
        <Text style={styles.info}>
          I am a passionate student who loves gaming, and learning new technologies.
        </Text>

        <Text style={styles.label}>Achievements:</Text>
        <Text style={styles.info}>
          - Pro Player{"\n"}
          - Employed{"\n"}
        </Text>

        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.info}>
          Good communication, Collaboration, Relying on others
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F0FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A237E',
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    color: '#0D47A1',
  },
  info: {
    fontSize: 16,
    marginLeft: 10,
    color: '#424242',
  },
});
