
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Firebase yapılandırma ayarlarınızı burada yapın
const firebaseConfig = {
  // Firebase yapılandırma bilgileri
};

// Firebase projenizi başlatın
firebase.initializeApp(firebaseConfig);

// Firestore örneğini alın
const firestore = firebase.firestore();

// Firestore kullanarak veritabanı işlemlerini gerçekleştirin
// Örnek: Veri ekleme
firestore.collection('myCollection').add({
  title: 'Example Data',
  description: 'This is an example data entry.',
});

// Örnek: Veri sorgulama
firestore
  .collection('myCollection')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  });

