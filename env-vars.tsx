import { Platform } from 'react-native';

// LOCAL
export const NEST_JS_API =
    Platform.OS === 'ios' ? 'http://localhost:3000/' : 'http://10.0.2.2:3000/';