export interface AuthResponse {
  [x: string]: any;
  server : {
      msgType: string;
      msgTitle: string;
      msgBody: string;
      msgData: string;
  }
}
