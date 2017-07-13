import React, { Component } from 'react';
import { View , Modal , TouchableOpacity , TextInput , Icon , Image , Text } from 'react-native'
// import {RNPrint} from 'NativeModules';
import RNFetchBlob from 'react-native-fetch-blob';
import Pdf from 'react-native-pdf';
import { styles } from './src/style';
import { NativeModules } from 'react-native';

const { PDFView } = NativeModules;

const
    pageDownIcon = require('./src/images/icon-next.png'),
    pageUpIcon = require('./src/images/icon-back.png'),
    download = require('./src/images/toolbarButton-download.png'),
    print = require('./src/images/toolbarButton-print.png'),
    close = require('./src/images/buttons---close-button.png')

// const { PDF } = NativeModules;

export default class RNDocumentViewer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            page: 1,
            pageCount: 1,
            visible: false
        };
        this.pdf = null;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        })
    }

    prePage = () => {
        if (this.pdf) {
            let prePage = this.state.page > 1 ? this.state.page - 1 : 1;
            this.pdf.setNativeProps({ page: prePage });
            this.setState({ page: prePage });
            console.log(`prePage: ${prePage}`);
        }
    }

    nextPage = () => {
        if (this.pdf) {
            let nextPage = this.state.page + 1 > this.state.pageCount ? this.state.pageCount : this.state.page + 1;
            this.pdf.setNativeProps({ page: nextPage });
            this.setState({ page: nextPage });
            console.log(`nextPage: ${nextPage}`);
        }
    }

    printDocument = (url) => {
        this.downloadFile(url, (res) => {
            RNPrint.print(res.path())
                .then((jobName) => {
                    console.log(`Printing ${jobName} complete!`);
                }).catch(err => console.log(err))
        })
    }

    downloadPdf = (url) => {
        this.downloadFile(url, (res) => {
            console.log(res.path());
            Toast.show(`file downloaded to ${res.path()}`);
        })
    }

    close = () => {
        let { context } = this.props;
        context.setState({
            showDocument: false
        });

    }

    render() {
        let { visible, page, pageCount } = this.state;
        let {pdfSource} = this.props;
        let source = { uri: pdfSource };
        
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.pdfHeaderBar}>
                    <View style={styles.leftControls}>
                        <TouchableOpacity style={styles.btn} onPress={() => this.close()}>
                            <Image style={styles.btnClose} source={close} />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={page == 1} style={styles.btn} onPress={() => this.prePage()}>
                            <Image style={styles.arrowsIcon} source={pageUpIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={page == pageCount} style={styles.btn} onPress={() => this.nextPage()}>
                            <Image style={styles.arrowsIcon} source={pageDownIcon} />
                        </TouchableOpacity>

                        <View style={styles.pageDetailsBox}>
                            <Text style={styles.text}>
                                Page:
                        </Text>
                            <View style={styles.currentPageBox}>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={(text) => {
                                        let currentPage = text ? parseInt(text) : page;
                                        this.setState({ page: currentPage })
                                        this.pdf.setNativeProps({ page: currentPage });
                                    }}
                                    value={page.toString()} />
                            </View>
                            <Text style={styles.text}>
                                of:
                        </Text>
                            <Text style={styles.text}> {pageCount} </Text>
                        </View>
                    </View>


                    <View style={styles.leftControls}>
                        <TouchableOpacity style={styles.btn} onPress={() => this.printDocument(source.uri)}>
                            <Image source={print} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => this.downloadPdf(source.uri)}>
                            <Image source={download} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Pdf ref={(pdf) => { this.pdf = pdf; }}
                    source={source}
                    page={1}
                    scale={1}
                    horizontal={false}
                    onLoadComplete={(pageCount) => {
                        this.setState({ pageCount: pageCount });
                        console.log(`total page count: ${pageCount}`);
                    }}
                    onPageChanged={(page, pageCount) => {
                        this.setState({ page: page });
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    style={styles.pdf} />
            </View>
        )
    }


    downloadFile(url, callback) {
        RNFetchBlob
            .config({
                fileCache: true,
            })
            .fetch('GET', url)
            .then((res) => {
                callback(res);
            })
    }
}

