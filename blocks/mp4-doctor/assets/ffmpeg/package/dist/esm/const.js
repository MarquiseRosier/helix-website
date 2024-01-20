/* eslint-disable */
export const MIME_TYPE_JAVASCRIPT = "text/javascript";
export const MIME_TYPE_WASM = "application/wasm";
export const CORE_VERSION = "0.12.1";
export const CORE_URL = `https://unpkg.com/@ffmpeg/core@${CORE_VERSION}/dist/umd/ffmpeg-core.js`;
export var FFMessageType;
(function (FFMessageType) {
    FFMessageType["LOAD"] = "LOAD";
    FFMessageType["EXEC"] = "EXEC";
    FFMessageType["WRITE_FILE"] = "WRITE_FILE";
    FFMessageType["READ_FILE"] = "READ_FILE";
    FFMessageType["DELETE_FILE"] = "DELETE_FILE";
    FFMessageType["RENAME"] = "RENAME";
    FFMessageType["CREATE_DIR"] = "CREATE_DIR";
    FFMessageType["LIST_DIR"] = "LIST_DIR";
    FFMessageType["DELETE_DIR"] = "DELETE_DIR";
    FFMessageType["ERROR"] = "ERROR";
    FFMessageType["DOWNLOAD"] = "DOWNLOAD";
    FFMessageType["PROGRESS"] = "PROGRESS";
    FFMessageType["LOG"] = "LOG";
    FFMessageType["MOUNT"] = "MOUNT";
    FFMessageType["UNMOUNT"] = "UNMOUNT";
})(FFMessageType || (FFMessageType = {}));