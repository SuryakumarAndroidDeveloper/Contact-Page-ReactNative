import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CONTACTS = [
  {
    img: '',
    name: 'Appa',
    phone: '+91 9626672662',
  },
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Alean',
    phone: '+91 6794435794',
  },
  {
    img: '',
    name: 'Abishek',
    phone: '+91 9594223635',
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'BalaNishanth',
    phone: '+91 9146722967',
  },
  {
    img: '',
    name: 'Barho',
    phone: '+91 6478212693',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Bakeya',
    phone: '+91 9878674553',
  },
  {
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Bharathi',
    phone: '+91 6789853412',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Charli',
    phone: '+91 6655443322',
  },
  {
    img: '',
    name: 'Keerthana',
    phone: '+91 6655443322',
  },
];

export default function App() {
  const sections = React.useMemo(() => {
    const sectionsMap = CONTACTS.reduce((acc, item) => {
      const [lastName] = item.name.split(' ').reverse();

//reduce function used to accumulate the contacts into sections based on their last name initials
      return Object.assign(acc, {
        [lastName[0]]: [...(acc[lastName[0]] || []), item],
      });
    }, {});

    return Object.entries(sectionsMap)//convert the sectionsMap object into an array of [key, value] pairs
      .map(([letter, items]) => ({//transform it into an object with properties letter( last name initial) and items (array of contacts with that initial)
        letter,//last name intial
        items,//contact first Intial
      }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contacts</Text>
          <View style={styles.navicons}>
          <FeatherIcon 
          color="#000000"
          name="check-square"
          size={22}
          />
          <FeatherIcon
          color="#000000"
          name="search"
          size={22}
          />
          <FeatherIcon
          color="#000000"
          name="more-vertical"
          size={22} />
          </View>
        </View>

        {sections.map(({ letter, items }) => (
          <View style={styles.section} key={letter}>
            <Text style={styles.sectionTitle}>{letter}</Text>
            <View style={styles.sectionItems}>
              {items.map(({ img, name, phone }, index) => {
                return (
                  <View key={index} style={styles.cardWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={styles.card}>
                        {img ? (
                          <Image
                            alt=""
                            resizeMode="cover"
                            source={{ uri: img }}
                            style={styles.cardImg} />
                        ) : (
                          <View style={[styles.cardImg, styles.cardAvatar]}>
                            <Text style={styles.cardAvatarText}>{name[0]}</Text>
                          </View>
                        )}

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{name}</Text>

                          <Text style={styles.cardPhone}>{phone}</Text>
                        </View>

                        <View style={styles.cardAction}>
                          <FeatherIcon
                            color="#9ca3af"
                            name="chevron-right"
                            size={22} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0
  },
  header: {
    paddingHorizontal: 24,
    marginTop:30,
    display:"flex",
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12
   
    
  },
  /** Section */
  section: {
    marginTop: 12,
    paddingLeft: 24
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000'
  },
  sectionItems: {
    marginTop: 8
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6'
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac'
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff'
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000'
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3
  },
  cardAction: {
    paddingRight: 16
  },
  navicons:{
    display:"flex",
    flexDirection:"row",
    width: 200,
    marginStart:60,
    justifyContent:"space-evenly",
    marginLeft:"auto"
  }
 
});