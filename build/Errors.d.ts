declare function LavaJsError(message: any): void;
declare namespace LavaJsError {
    var prototype: Error;
}
declare function InvalidCallback(callback: any): void;
declare namespace InvalidCallback {
    var prototype: Error;
}
declare function RenderableNotFound(label: any): void;
declare namespace RenderableNotFound {
    var prototype: Error;
}
declare function ElementIdNotFound(elemId: any): void;
declare namespace ElementIdNotFound {
    var prototype: Error;
}
declare function DataError(msg: any): void;
declare namespace DataError {
    var prototype: Error;
}
declare const _default: {
    LavaJsError: typeof LavaJsError;
    DataError: typeof DataError;
    InvalidCallback: typeof InvalidCallback;
    RenderableNotFound: typeof RenderableNotFound;
    ElementIdNotFound: typeof ElementIdNotFound;
};
export default _default;
