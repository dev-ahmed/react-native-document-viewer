import {
    StyleSheet,
    Dimensions
} from 'react-native'

export const styles = StyleSheet.create({
    pdfHeaderBar: {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 23,
        width: Dimensions.get('window').width
    },
    leftControls: {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rightControls: {
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btn: {
        flexDirection: 'row',
        margin: 3,
        width: 30,
        // padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "blue",
    },
    btnDisabled: {
        flexDirection: 'row',
        margin: 3,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .6
    },
    btnClose: {
        marginLeft: 5,
        width: 40,
        height: 15
    },
    icon: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3
    },
    pageDetailsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 3,
    },
    currentPageBox: {
        flexDirection: 'row',
        marginLeft: 3,
        marginRight: 3,
        width: 40,
        // padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        backgroundColor: 'grey'
    },
    textInput: {
        height: 20,
        width: 40,
        margin: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    },
    text: {
        color: 'white',
    },
    btnText: {
        color: "#FFF",
    },
    arrowsIcon: {
        width: 15,
        height: 12,
        resizeMode: 'contain'
    },
    rightControlIcons: {
        width: 17,
        height: 15,
        resizeMode: 'contain'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});