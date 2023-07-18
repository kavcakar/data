import React, { useEffect } from 'react';
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
      
    // Firestore'da restaurants koleksiyonuna veri ekleme
    const item = {
      restaurant_name: "Restaurant Name",
      description: "Description of the restaurant",
      genre: "Cuisine Genre",
      // Diğer alanları da buraya ekleyebilirsiniz
    };
    
    db.collection('restaurants')
      .add(item)
      .then((docRef) => {
        console.log('Döküman başarıyla eklendi. Döküman ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Döküman eklenirken bir hata oluştu:', error);
      });
  }, []);

  return (
    // JSX içeriği buraya gelir
    <div>
      {/* JSX içeriği */}
    </div>
  );
};

export default App;
