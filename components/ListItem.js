import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const ListItem = (props) =>{
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.Title}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  box:{
    flex: 1,
    padding: 10
  }
  , row: {
    backgroundColor: '#ccc',
    flexDirection: "row",
    marginBottom: 10
  },
  image: {
    flex: 1
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15
  }
});
ListItem.propTypes = {
  singleMedia: PropTypes.object,
}
export default ListItem;

