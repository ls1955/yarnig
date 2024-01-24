import {Text} from 'react-native';

import Yarnig from './src/Yarnig';

import {useFetchURIs} from './src/hooks/useFetchURIs';

export default function App() {
  const {uris} = useFetchURIs({folder: ''});

  if (!uris) return <Text>Loading, please wait...</Text>;

  return <Yarnig />;
}
