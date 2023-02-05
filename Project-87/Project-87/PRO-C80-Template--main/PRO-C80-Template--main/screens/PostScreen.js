renderItem =({ item: post})=> {
    return < PostCard post ={post} navigation={this.PaymentResponse.navigation}/>;

    fetchUser= ( =>{
        let theme;
        firbase
          .database(
          .ref("/users/' + firbase.auth().currentUser.uid)
          .on("value", (snapshot)=> {
              theme = snapshot.val().current_theme  
              this.setState({ light_theme: theme ==="ligh"})    
              })        
            )
            constructor(props) {
                super(props);
                this.state={
                    light_theme: true,
                post_id: this.props.post.key,
            post_data: thsi.props.post.value
        };
            }
    }),
    postCardLight: {
        margin: RFValue(20),
        backgorundColor: "#eaeaea"
        borderRadius: RFValue(20)
        },

        authorNameText:{
            color: "white",
        fontSize: RFValue(20)
    },
    authorNameTextLight: {
        color:"black",
        fontSize: RFValue(20)
    },
};