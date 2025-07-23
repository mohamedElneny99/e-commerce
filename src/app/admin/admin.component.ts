import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

export class AdminComponent {
  name = '';
  price = 0;
  imageUrl = '';

  constructor(private firestore: Firestore, private storage: Storage) {}

  async uploadImage(event: any) {
    const file = event.target.files[0];
    const filePath = `products/${Date.now()}`;
    const storageRef = ref(this.storage, filePath);
    await uploadBytes(storageRef, file);
    this.imageUrl = await getDownloadURL(storageRef);
  }

  async addProduct() {
    const product = {
      name: this.name,
      price: this.price,
      image: this.imageUrl,
      rating: 4
    };
    const productsRef = collection(this.firestore, 'products');
    await addDoc(productsRef, product);
    alert('تمت إضافة المنتج');
    this.name = '';
    this.price = 0;
    this.imageUrl = '';
  }
}
