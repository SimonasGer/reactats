import firebase from "../firebase"

export const addImage = (data)=>{
    firebase.
    firestore()
    .collection("images")
    .add(data)
}


export const getImages = (onImgChanged)=>{
    firebase
    .firestore()
    .collection('images')
    .onSnapshot((snapshot)=>{
        const newImg = snapshot.docs.map((doc)=>({
            url:doc.url,
            ...doc.data()
        }))
        onImgChanged(newImg)

    })

}

export const deleteImage = (url)=>{
    firebase
    .firestore()
    .collection("images").
    where("url", "==", url).get()
.then(querySnapshot => {
    querySnapshot.docs[0].ref.delete();
});

}
