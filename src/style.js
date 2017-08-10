import {
    StyleSheet,
    Dimensions
} from 'react-native'

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    pdfHeaderBar: {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 23,
        width
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
    centerControls: {
        marginLeft: - width * 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 40
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
    zoomBtns: {
        flexDirection: 'row',
        marginTop: 3,
        marginBottom: 3,
        width: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    zoomSegment: {
        width: 8
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
        width: 60,
        // padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        backgroundColor: 'white'
    },
    totalPageBox: {
        height: 20,
        width: 60,
        backgroundColor: '#172727',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#9b9b9b',
    },
    textInput: {
        height: 20,
        width: 60,
        margin: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 15
    },
    text: {
        color: 'white',
    },
    zoomIcons: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
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
        width,
        backgroundColor: "#ffffff"
    }
});