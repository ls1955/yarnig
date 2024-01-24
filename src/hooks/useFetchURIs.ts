import {useEffect, useState} from 'react';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';

type Props = {folder: string};

export const useFetchURIs = ({folder}: Props) => {
  const [uris, setURIs] = useState<string[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUris({folder});
      setURIs(data);
    };
    fetchData();
  }, []);

  return {uris};
};

// TODO: Maybe move this somewhere else?
const getUris = async ({folder}: Props) => {
  try {
    const photos = await CameraRoll.getPhotos({
      first: 200,
      groupName: folder,
    });
    return photos.edges.map(edge => edge.node.image.uri);
  } catch (error) {
    console.error(error);
  }
};
