using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNReactNativeDocumentViewer
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeDocumentViewerModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeDocumentViewerModule"/>.
        /// </summary>
        internal RNReactNativeDocumentViewerModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeDocumentViewer";
            }
        }
    }
}
