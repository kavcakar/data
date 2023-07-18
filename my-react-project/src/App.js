import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




const App = () => {
  useEffect(() => {
    // Firestore örneğini oluştur
    const db = firebase.firestore();

    // Firestore işlemlerini gerçekleştir
    // Örnek: Veri ekleme
    db.collection('myCollection').add({
      title: 'Example Data',
      description: 'This is an example data entry.',
    });

    // Örnek: Veri sorgulama
    db.collection('myCollection')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      });
  }, []);

  firestore.collection('restaurants').add(item)
  .then((docRef) => {
    console.log('Döküman başarıyla eklendi. Döküman ID:', docRef.id);
  })
  .catch((error) => {
    console.error('Döküman eklenirken bir hata oluştu:', error);
  });


  


export default App
