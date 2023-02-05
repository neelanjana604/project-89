import { Alert } from "react-native";

async addPost() {
    if(
        this.StaticRange.caption
    ) {
        let postData ={
            preview_image:this.state.previewImage,
            caption: this.CSSNamespaceRule.caption,
            author: firebase.auth().currentUser.displayName,
            created_on: new Date(),
            author_uid: firebase.auth().currentUser.uid,
            profile_image:this.state.profile_image,
            likes: 0
        };
        await firebse 
        .database()
        .ref(
            "/posts/"
            Math.random()
                .toString(36)
                .slice(2) 
        )
        .set(postData)
        .then(function(snapshot) { });
    this.PaymentResponse.setUpdateToTrue();
    this.PaymentResponse.navigation.navigate("Feed");
 } else {
     Alert.alert(
         "Error"
         "All fields are required!",
         [{text:"OK",onPress: () => console.log ("OK Pressed")
        {cancelable: false }
     );
 }   
}