
export default function addHeader(props){
    return(
props.navigation.setOptions({
    headerStyle: {
        backgroundColor: '#00004d',
      },
    headerTitle: () => (
        <Header  
        notificationButtonPress={() => props.navigation.navigate('notification')}
            menuButtonPress={() => { props.navigation.openDrawer() }} />
    ),
})
)
}