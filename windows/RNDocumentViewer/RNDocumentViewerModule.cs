using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNDocumentViewer
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNDocumentViewerModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNDocumentViewerModule"/>.
        /// </summary>
        internal RNDocumentViewerModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNDocumentViewer";
            }
        }
    }
}
