declare module "react-native-image-picker" {
  export interface Response {
    customButton: string;
    didCancel: boolean;
    error: string;
    data: string;
    uri: string;
    origURL?: string;
    isVertical: boolean;
    width: number;
    height: number;
    fileSize: number;
    type?: string;
    fileName?: string;
    path?: string;
    latitude?: number;
    longitude?: number;
    timestamp?: string;
  }

  export interface CustomButtonOptions {
    name?: string;
    title?: string;
  }

  export interface Options {
    title?: string;
    cancelButtonTitle?: string;
    takePhotoButtonTitle?: string;
    chooseFromLibraryButtonTitle?: string;
    customButtons?: Array<CustomButtonOptions>;
    cameraType?: "front" | "back";
    mediaType?: "photo" | "video" | "mixed";
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    videoQuality?: "low" | "medium" | "high";
    durationLimit?: number;
    rotation?: number;
    allowsEditing?: boolean;
    noData?: boolean;
    storageOptions?: StorageOptions;
    permissionDenied?: PermissionDenied;
  }

  export interface StorageOptions {
    skipBackup?: boolean;
    path?: string;
    cameraRoll?: boolean;
    waitUntilSaved?: boolean;
  }

  export interface PermissionDenied {
    title: string;
    text: string;
    reTryTitle: string;
    okTitle: string;
  }

  export default class ImagePicker {
    static showImagePicker(
      options: Options,
      callback: (response: Response) => void
    ): void;
    static launchCamera(
      options: Options,
      callback: (response: Response) => void
    ): void;
    static launchImageLibrary(
      options: Options,
      callback: (response: Response) => void
    ): void;
  }
}
